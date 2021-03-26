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
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Rights: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      MQID: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Registration: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      LastAccess: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      LastPassChange: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      LastIP: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Company: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Account: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Country: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Language: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ClientID: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      City: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      State: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ZipCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ID: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Comment: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Color: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      PhonePassword: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Leverage: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Agent: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      Balance: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      Credit: {
        allowNull: false,
        type: Sequelize.REAL,
      },

      //Deposit******************
      Equity: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.REAL,
      },
      Margin: {
        allowNull: false,
        defaultValue:0,
        type: Sequelize.REAL,
      },
      MarginFree: {
        allowNull: false,
        defaultValue:0,
        type: Sequelize.REAL,
      },
      MarginLevel: {
        allowNull: false,
        defaultValue:0,
        type: Sequelize.REAL,
      },
      Floating: {
        allowNull: false,
        defaultValue:0,
        type: Sequelize.REAL,
      },
//*************************** */

      InterestRate: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      CommissionDaily: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      CommissionMonthly: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      BalancePrevDay: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      BalancePrevMonth: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      EquityPrevDay: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      EquityPrevMonth: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      TradeAccounts: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      LeadCampaign: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      LeadSource: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      LeadSource: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      MainPassword: {
        type: Sequelize.STRING,
      },
      InvestPassword: {
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
