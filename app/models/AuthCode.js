"use strict";

module.exports = (sequelize, DataTypes) => {
  const AutCode = sequelize.define(
    "AutCode",
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
      paranoid: true,
      timestamps: true,
    }
  );

  return AutCode;
};
