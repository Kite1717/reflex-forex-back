'use strict';

module.exports = (sequelize, DataTypes) => {

  const ULog = sequelize.define('ULog', {

    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creatorUserId:{
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt:{
        type: DataTypes.DATE
      },
      deleterUserId:{
        type: DataTypes.INTEGER
      },

  }, {
    tableName: "userLogs",
    paranoid: true,
    timestamps: true,
  });


  return ULog;
};