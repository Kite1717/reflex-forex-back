"use strict";

module.exports = (sequelize, DataTypes) => {
  const AuthCode = sequelize.define(
    "AuthCode",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Code: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "authCodes",
      paranoid: false,
      timestamps: false,
    }
  );

  return AuthCode;
};
