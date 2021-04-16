"use strict";
/*
https://api.launchfxm.com/api_v1/create_user?
Name=AbdulAziz66&Leverage=500&Group=demo\andrewAPI
&MainPassword=FDfsffs1234&InvestPassword=adsgeDDS213&PhonePassword=Kjdfjaj4124&auth=7834757667699
*/

/*
  "data": [
        {
            "Login": 68689324,
            "Group": "demo\\andrewAPI",
            "CertSerialNumber": 0,
            "Rights": 1,
            "MQID": "0",
            "Registration": 1616792225,
            "LastAccess": 1616792225,
            "LastPassChange": 1616792225,
            "LastIP": "Unresolved",
            "Name": "AbdulAziz66",
            "Company": "",
            "Account": "",
            "Country": "",
            "Language": 0,
            "ClientID": 0,
            "City": "",
            "State": "",
            "ZipCode": "",
            "Address": "",
            "Phone": "",
            "Email": "",
            "ID": "",
            "Status": "",
            "Comment": "",
            "Color": 0,
            "PhonePassword": "Kjdfjaj4124",
            "Leverage": 500,
            "Agent": 0,
            "Balance": 0,
            "Credit": 0,
            "InterestRate": 0,
            "CommissionDaily": 0,
            "CommissionMonthly": 0,
            "BalancePrevDay": 0,
            "BalancePrevMonth": 0,
            "EquityPrevDay": 0,
            "EquityPrevMonth": 0,
            "TradeAccounts": "",
            "LeadCampaign": "",
            "LeadSource": "",
            "MainPassword": null,
            "InvestPassword": null
        },
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("forexAccount", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Login: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Group: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      CertSerialNumber: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      Rights: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      MQID: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Registration: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      LastAccess: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      LastPassChange: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      LastIP: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Name: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Company: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Account: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Country: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Language: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      ClientID: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      City: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      State: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      ZipCode: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Address: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Phone: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ID: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Status: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Comment: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      Color: {
        defaultValue: 0,
        type: Sequelize.INTEGER,
      },
      PhonePassword: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Leverage: {
        defaultValue: 300,
        type: Sequelize.INTEGER,
      },
      Agent: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      Balance: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      Credit: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },

      //Deposit******************
      Equity: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      Margin: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      MarginFree: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      MarginLevel: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      Floating: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      //*************************** */

      InterestRate: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      CommissionDaily: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      CommissionMonthly: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      BalancePrevDay: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      BalancePrevMonth: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      EquityPrevDay: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      EquityPrevMonth: {
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      TradeAccounts: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      LeadCampaign: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      LeadSource: {
        defaultValue: "",
        type: Sequelize.STRING,
      },
      LeadSource: {
        defaultValue: "",
        type: Sequelize.STRING,
      },

      MainPassword: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      InvestPassword: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      creatorUserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      deleterUserId: {
        type: Sequelize.INTEGER,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {},
};
