const express = require("express");
const db = require("../models");
const Op = db.Sequelize.Op;

// Middlewares
const auth = require("../middlewares/auth");

//auth
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const forex = require("../../app/helpers/forex");

//Roles
const { UserRolls } = require("../helpers/enum");

const app = express.Router();

const cryptoJS = require("crypto-js");
const nodemailer = require("nodemailer");

//**************Route Level 1

//LOG

//  console.log(JSON.stringify(result,null,2))

app.post("/create-user", async (req, res) => {
  db.Account.findOne({ where: { Email: req.body.Email } }).then((user) => {
    if (user) {
      return res
        .status(500)
        .json({ msg: "Already account existing", status: 0 });
    } else {
      forex.createUser(req.body).then((fores) => {
        let result = fores.data[0];
        result.createdAt = new Date();
        result.updatedAt = new Date();
        result.creatorUserId = 1;

        //hash password
        let password = bcrypt.hashSync(
          req.body.MainPassword,
          Number.parseInt(authConfig.rounds)
        );

        result.MainPassword = password;
        result.InvestPassword = password;
        result.PhonePassword = password;

        //add role
        result.role = 1;

        db.Account.create(result)
          .then((user) => {
            // await db.ULog.create({createdAt:result.createdAt,creatorUserId: result.creatorUserId,comment:"Hesap Oluşturdu"})
            return res.json({
              user: user,
              status: 1,
            });
          })
          .catch((err) => {
            return res.status(500).json({ err, status: 0 });
          });
      });
    }
  });
}); //end of create user

app.put("/update-user", async (req, res) => {
  if (req.body.MainPassword !== "" && req.body.MainPassword !== null) {
    db.Account.findOne({ where: { Email: req.body.Email } }).then((user) => {
      if (user) {
        if (!bcrypt.compareSync(req.body.MainPassword, user.MainPassword)) {
          res
            .status(500)
            .json({ to: "DB", msg: "Account password not correct", status: 0 });
        } else {
          req.body.Login = user.Login;
          forex
            .updateUser(req.body)
            .then((fores) => {
              let result = fores;

              result.updatedAt = new Date();

              //hash password
              let password = bcrypt.hashSync(
                req.body.MainPassword,
                Number.parseInt(authConfig.rounds)
              );

              result.MainPassword = password;
              result.InvestPassword = password;
              result.PhonePassword = password;

              // lowercase areas

              if (req.body.identificationNumber) {
                result.identificationNumber = req.body.identificationNumber;
              }

              db.Account.update(result, {
                where: { Login: result.Login },
                returning: true,
              })
                .then((acc) => {
                  //We create the token
                  let token = jwt.sign({ user: acc[1][0] }, authConfig.secret, {
                    expiresIn: authConfig.expires,
                  });

                  return res.json({
                    data: acc[1][0],
                    token,
                    status: 1,
                  });
                })
                .catch((err) => {
                  return res.status(500).json({
                    to: "DB",
                    msg: "Account is not updated",
                    status: 0,
                  });
                });
            })
            .catch((err) => {
              return res.status(500).json({
                to: "Forex",
                msg: "Account is not updated",
                status: 0,
              });
            });
        }
      } else {
        res
          .status(500)
          .json({ to: "DB", msg: "Account is not found", status: 0 });
      }
    });
  } else {
    res.status(500).json({ to: "API", msg: "Invalid Password", status: 0 });
  }
});

app.put("/delete-user", async (req, res) => {
  forex.deleteUser(req.body).then((fores) => {
    if (fores) {
      let result = {};
      result.deletedAt = new Date();
      result.deleterUserId = 1;

      db.Account.update(result, { where: { Login: req.body.Login } })
        .then((acc) => {
          return res.json({
            data: acc,
          });
        })
        .catch((err) => {
          return res.status(500).json(err);
        });
    } else {
      return res.status(404).json({ msg: "Account not deleted" });
    }
  });
});

//bunu bi kontrol et ilerde  cevapda başka verilerde geliyor
app.get("/get-user/:login", async (req, res) => {
  forex.getUser({ Login: req.params.login }).then((fores) => {
    if (fores.Login) {
      db.Account.findOne({ where: { Login: fores.Login } }).then((user) => {
        return res.json({
          forexApi: fores,
          db: user,
        });
      });
    } else {
      return res.status(404).json({ msg: "Account not found" });
    }
  });
});

app.post("/send-user-email", async (req, res) => {
  let Email = req.body.Email;
  let CodeLength = parseInt(req.body.CodeLength);

  let authCode = 0;
  if (!Number.isNaN(CodeLength) && CodeLength >= 4) {
    authCode = parseInt(
      Math.random()
        .toString()
        .slice(2, CodeLength + 2)
    );
  } else {
    return res.status(404).json({ msg: "Invalid CodeLength" });
  }
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "reflextestmail@gmail.com",
      pass: "fufgwligjgrvfwbw",
    },
  });
  let mailOptions = {
    from: "reflextestmail@gmail.com",
    to: Email,
    subject: "Nodemailer Test",
    html: `<h1> ${authCode} </h1>`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (!err) {
      res.status(200).json({
        status: "1",
        authCode,
      });
    } else {
      res.status(500).json({
        status: "0",
      });
    }
  });
});

app.post("/login", async (req, res) => {
  let Email = req.body.Email;
  let MainPassword = req.body.MainPassword;

  if (Email && MainPassword) {
    db.Account.findOne({
      where: {
        Email,
      },
    }).then((user) => {
      if (user) {
        if (bcrypt.compareSync(MainPassword, user.MainPassword)) {
          //We create the token
          let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });
          if (!user.qr_code) {
            return res.json({
              status: 2,
              user,
              token: token,
            });
          } else {
            return res.json({
              status: 1,
              image: user.qr_code_image,
              secret: user.qr_code_secret,
              user,
              token: token,
            });
          }
        } else {
          // Unauthorized Access
          return res.status(401).json({ msg: "Incorrect password" });
        }
      } else {
        return res.status(404).json({ msg: "Account not found" });
      }
    });
  } else {
    return res.status(500).json({ msg: "Invalid Data" });
  }
});

//get token
app.get("/me", auth([UserRolls.Admin, UserRolls.User]), async (req, res) => {
  if (req.user) {
    forex.getUser({ Login: req.user.Login }).then((fores) => {
      if (fores.Login) {
        db.Account.findOne({ where: { Login: fores.Login } }).then((user) => {
          return res.json({
            forexApi: fores,
            user: user,
            type: true,
          });
        });
      } else {
        return res.status(404).json({ msg: "Account not found" });
      }
    });
  } else {
    return res.status(401).json({ msg: "Unauthorized access" });
  }
});

app.post("/set-auth", async (req, res) => {
  let qr_code_image = req.body.qr_code_image;
  let Email = req.body.Email;
  let MainPassword = req.body.MainPassword;
  let secret = req.body.qr_code_secret;

  if (qr_code_image && Email && MainPassword && secret) {
    db.Account.findOne({
      where: {
        Email,
      },
    }).then((user) => {
      if (user) {
        if (bcrypt.compareSync(MainPassword, user.MainPassword)) {
          // email password correct

          if (user.qr_code) {
            return res.json({
              status: 2,
            });
          } else {
            //update

            db.Account.update(
              { qr_code: true, qr_code_image, qr_code_secret: secret },
              { where: { Login: user.Login, qr_code: false } }
            )
              .then((acc) => {
                return res.json({
                  status: 1,
                });
              })
              .catch((err) => {
                return res.status(500).json(err);
              });
          }
        } else {
          // Unauthorized Access
          return res.status(401).json({ msg: "Incorrect password" });
        }
      } else {
        return res.status(404).json({ msg: "Account not found" });
      }
    });
  } else {
    return res.status(500).json({ msg: "Invalid Data" });
  }
});

module.exports = app;
