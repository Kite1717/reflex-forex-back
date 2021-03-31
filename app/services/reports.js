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

app.post("/total-history", async (req, res) => {
    
    forex.getTotalHistory(req.body).then((fores) => {
        if (fores.data) {
          return res.json({
            data: fores,
          });
        } else {
          return res.status(404).json({ msg: "Ticket count not found" });
        }
      });
}); // end of get total history



app.post("/page-history", async (req, res) => {
    
  forex.getPageHistory(req.body).then((fores) => {
      if (fores.length>0) {
        return res.json({
          data: fores,
        });
      } else {
        return res.status(404).json({ msg: "Ticket not found" });
      }
    });
}); // end of get page history


app.get("/get-history/:ticket", async (req, res) => {
    
  forex.getHistory({ Ticket: req.params.ticket }).then((fores) => {
      if (fores.Order) {
        return res.json({
          data: fores,
        });
      } else {
        return res.status(404).json({ msg: "Ticket not found" });
      }
    });
}); // end of get history






app.post("/total-deal", async (req, res) => {
    
  forex.getTotalDeal(req.body).then((fores) => {
      if (fores.data) {
        return res.json({
          data: fores,
        });
      } else {
        return res.status(404).json({ msg: "Ticket count not found" });
      }
    });
}); // end of get history



app.post("/page-deal", async (req, res) => {
  
forex.getPageDeal(req.body).then((fores) => {
    if (fores.length>0) {
      return res.json({
        data: fores,
      });
    } else {
      return res.status(404).json({ msg: "Ticket not found" });
    }
  });
}); // end of get page history


app.get("/get-deal/:ticket", async (req, res) => {
  
forex.getDeal({ Ticket: req.params.ticket }).then((fores) => {
    if (fores.Deal) {
      return res.json({
        data: fores,
      });
    } else {
      return res.status(404).json({ msg: "Ticket not found" });
    }
  });
}); // end of get history






module.exports = app;
