"use strict";

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Login: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Group: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      CertSerialNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Rights: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      MQID: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Registration: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      LastAccess: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      LastPassChange: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      LastIP: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Company: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Account: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Country: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Language: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      ClientID: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      City: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      State: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ZipCode: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Phone: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ID: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Status: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Comment: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Color: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      PhonePassword: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      Leverage: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Agent: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Balance: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      Credit: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },

      //Deposit******************
      Equity: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.REAL,
      },
      Margin: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.REAL,
      },
      MarginFree: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.REAL,
      },
      MarginLevel: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.REAL,
      },
      Floating: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.REAL,
      },
      //*************************** */

      InterestRate: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      CommissionDaily: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      CommissionMonthly: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      BalancePrevDay: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      BalancePrevMonth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      EquityPrevDay: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      EquityPrevMonth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      TradeAccounts: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      LeadCampaign: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      LeadSource: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      LeadSource: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      MainPassword: {
        type: DataTypes.STRING,
      },
      InvestPassword: {
        type: DataTypes.STRING,
      },
      creatorUserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
      deleterUserId: {
        type: DataTypes.INTEGER,
      },

      /*********Merge */
      role: {
        type: DataTypes.INTEGER,
      },
      qr_code: {
        type: DataTypes.BOOLEAN,
      },
      qr_code_image: {
        type: DataTypes.STRING,
      },
      qr_code_secret: {
        type: DataTypes.STRING,
      },
      identificationNumber: {
        type: DataTypes.REAL,
      },
    },
    {
      tableName: "forexAccount",
      paranoid: true,
      timestamps: true,
    }
  );

  return Account;
};
