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
    if (fores) {
      return res.json({
        data: fores,
        status: 1,
      });
    } else {
      return res.status(404).json({ msg: "Ticket not found", status: 0 });
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
  forex.getPageDeal(req.body).then((deal) => {
    if (deal) {
      return res.json({
        data: deal,
        status: 1,
      });
    } else {
      return res.status(404).json({ msg: "Ticket not found", status: 0 });
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

//history real
app.post("/page-history-detail", async (req, res) => {
  const total = req.body.Total;
  req.body.Total = 99999;
  forex
    .getPageDeal(req.body)
    .then((deal) => {
      if (deal) {
        forex
          .getPageHistory(req.body)
          .then((history) => {
            let temp = [];
            let count = 0;

            if (history) {
              for (let i = 0; i < deal.length; i++) {
                for (let j = 0; j < history.length; j++) {
                  if (
                    deal[i].PositionID === history[j].Order &&
                    deal[i].Price !== history[j].PriceCurrent
                  ) {
                    count++;

                    let change =
                      (
                        (history[j].Type === 1 ? -100 : 100) +
                        100 * (history[j].PriceCurrent / deal[i].Price)
                      )
                        .toFixed(2)
                        .toString() + " %";
                    if (change === "200.00 %") {
                      change = "0.00 %";
                    } else if (
                      (history[j].Type === 1 ? -100 : 100) +
                        100 * (history[j].PriceCurrent / deal[i].Price) >
                      100.0
                    ) {
                      change =
                        (
                          200 -
                          ((history[j].Type === 1 ? -100 : 100) +
                            100 * (history[j].PriceCurrent / deal[i].Price))
                        )
                          .toFixed(2)
                          .toString() + " %";
                    }
                    temp.push({
                      TimeSetup:
                        new Date(Number(history[j].TimeSetup * 1000))
                          .toISOString()
                          .substr(0, 10) +
                        " " +
                        new Date(Number(history[j].TimeSetup * 1000))
                          .toISOString()
                          .substr(11, 8),
                      Symbol: history[j].Symbol,
                      Order: history[j].Order,
                      Type: history[j].Type === 1 ? "Sell" : "Buy",
                      Volume: history[j].VolumeInitial / 10000,
                      PriceH: history[j].PriceCurrent,
                      SL: history[j].PriceSL,
                      TP: history[j].PriceTP,
                      TimeDone:
                        new Date(Number(deal[i].Time * 1000))
                          .toISOString()
                          .substr(0, 10) +
                        " " +
                        new Date(Number(deal[i].Time * 1000))
                          .toISOString()
                          .substr(11, 8),
                      PriceD: deal[i].Price,
                      Value: (
                        (history[j].Type === 1 ? -10 : 10) *
                        history[j].VolumeInitial *
                        deal[i].Price
                      ).toFixed(2),
                      Commission: deal[i].Commission,
                      Fee: deal[i].TickValue,
                      Swap: deal[i].Storage,
                      Profit: deal[i].Profit,
                      Change: change,
                    });

                    //limit
                    if (count === total) {
                      return res.json({
                        data: temp,
                        status: 1,
                      });
                    }
                  }
                }
              }
              return res.json({
                data: temp,
                status: 1,
              });
            } else {
              return res
                .status(404)
                .json({ msg: "Ticket not found", status: 0 });
            }
          })
          .catch(() => {
            return res.status(404).json({ msg: "Forex Error", status: 0 });
          });
        //History mantığı
      } else {
        return res.status(404).json({ msg: "Ticket not found", status: 0 });
      }
    })
    .catch(() => {
      return res.status(404).json({ msg: "Forex Error", status: 0 });
    });
}); // end of get page history

module.exports = app;
