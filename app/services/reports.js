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


//en son kaldığım yer
app.post("/total-history", async (req, res) => {
    
    forex.getTotalHistory(req.body).then((fores) => {
        if (fores.Order) {
          return res.json({
            data: fores,
          });
        } else {
          return res.status(404).json({ msg: "Ticket not found" });
        }
      });
}); // end of get history


module.exports = app;
