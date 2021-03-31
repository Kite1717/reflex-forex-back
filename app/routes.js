const user = require("./services/user");
const account = require("./services/account");
const transactions = require("./services/transactions");
const reports = require("./services/reports");

const express = require("express");
const router = express.Router();

// Home Default
router.get("/", (req, res) => res.json({ KITE: "ACTIVE" }));

//uploads
router.use("/files", express.static("uploads"));

/**********SERVICES********/

router.use("/api/account", account);
router.use("/api/transactions", transactions);
router.use("/api/reports", reports);
router.use("/api/user", user);


/**************************/

module.exports = router;
