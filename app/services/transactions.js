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

//   bu isteği sonra logla başka bir table !!!
app.post("/account-deposit", async (req, res) => {
  forex.accountDeposit(req.body).then((fores) => {

    if (fores) {
      forex.getUser({ Login: req.body.Login }).then((account) => {
        if (account.Login) {
          
          let result = account;
          result.updatedAt = new Date();
          

          db.Account.update(result,{where:{Login: req.body.Login}})
            .then((acc) => {
              return res.json({
                data: acc,
              });
            })
            .catch((err) => {
              return res.status(500).json(err);
            });

        } else {
          return res.status(404).json({ msg: "Account not found" });
        }
      });
    }
  });
}); // end of account deposit


app.post("/account-withdraw", async (req, res) => {
    forex.accountWithdraw(req.body).then((fores) => {
  
      if (fores) {
        forex.getUser({ Login: req.body.Login }).then((account) => {
          if (account.Login) {
            
            let result = account;
            result.updatedAt = new Date();
            
  
            db.Account.update(result,{where:{Login: req.body.Login}})
              .then((acc) => {
                return res.json({
                  data: acc,
                });
              })
              .catch((err) => {
                return res.status(500).json(err);
              });
  
          } else {
            return res.status(404).json({ msg: "Account not found" });
          }
        });
      }
    });
  }); // end of account withdraw


  app.post("/credit-in", async (req, res) => {
    forex.creditIn(req.body).then((fores) => {
  
      if (fores) {
        forex.getUser({ Login: req.body.Login }).then((account) => {
          if (account.Login) {
            
            let result = account;
            result.updatedAt = new Date();
            
  
            db.Account.update(result,{where:{Login: req.body.Login}})
              .then((acc) => {
                return res.json({
                  data: acc,
                });
              })
              .catch((err) => {
                return res.status(500).json(err);
              });
  
          } else {
            return res.status(404).json({ msg: "Account not found" });
          }
        });
      }
    });
  }); // end of account credit in


  app.post("/credit-out", async (req, res) => {
    forex.creditOut(req.body).then((fores) => {
  
      if (fores) {
        forex.getUser({ Login: req.body.Login }).then((account) => {
          if (account.Login) {
            
            let result = account;
            result.updatedAt = new Date();
            
  
            db.Account.update(result,{where:{Login: req.body.Login}})
              .then((acc) => {
                return res.json({
                  data: acc,
                });
              })
              .catch((err) => {
                return res.status(500).json(err);
              });
  
          } else {
            return res.status(404).json({ msg: "Account not found" });
          }
        });
      }
    });
  }); // end of account credit out


module.exports = app;
