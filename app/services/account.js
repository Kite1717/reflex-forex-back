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

//**************Route Level 1

//LOG

//  console.log(JSON.stringify(result,null,2))

app.post("/create-user", async (req, res) => {
  forex.createUser(req.body).then((fores) => {
    let result = fores.data[0];
    result.createdAt = new Date();
    result.updatedAt = new Date();
    result.creatorUserId = 1;

    db.Account.create(result)
      .then(async(acc) => {

        await db.ULog.create({createdAt:result.createdAt,creatorUserId: result.creatorUserId,comment:"Hesap Oluşturdu"}) 

        return res.json({
          data: acc,
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  });
}); //end of create user

app.put("/update-user", async (req, res) => {
  forex.updateUser(req.body).then((fores) => {
    let result = fores;

    result.updatedAt = new Date();

    db.Account.update(result, { where: { Login: result.Login } })
      .then((acc) => {
        return res.json({
          data: acc,
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  });
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
      return res.json({
        data: fores,
      });
    } else {
      return res.status(404).json({ msg: "Account not found" });
    }
  });
});
module.exports = app;
