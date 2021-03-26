const user = require("./services/user");
const dataEntries = require("./services/dataEntries");
const tipDeviceInfo = require("./services/tipDeviceInfo");
const ctiLibrary = require("./services/ctiLibrary");
const ftiLibrary = require("./services/ftiLibrary");
const tipPerformance = require("./services/tipPerformance");
const reportByDevices = require("./services/reportByDevices");
const account = require("./services/account");
const transactions = require("./services/transactions");

const express = require("express");
const router = express.Router();

// Home Default
router.get("/", (req, res) => res.json({ KITE: "ACTIVE" }));

//uploads
router.use("/files", express.static("uploads"));

/**********SERVICES********/

router.use("/api/account", account);
router.use("/api/transactions", transactions);

router.use("/api/user", user);
router.use("/api/de", dataEntries);
router.use("/api/tip-device-info", tipDeviceInfo);
router.use("/api/cti-library", ctiLibrary);
router.use("/api/fti-library", ftiLibrary);
router.use("/api/tip-performance", tipPerformance);
router.use("/api/device-report", reportByDevices);

/**************************/

module.exports = router;
