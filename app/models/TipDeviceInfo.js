'use strict';

module.exports = (sequelize, DataTypes) => {

  const Tdi = sequelize.define('Tdi', {
  

    tipSoftwareVersions: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    softwareTechnicalFeatures: {
        allowNull: false,
        type: DataTypes.STRING
    },
            
    standAloneMode: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
    },
    networkMode: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
    },
    xRayDevices: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    creatorUserId:{
      allowNull  :false,
      type:DataTypes.STRING,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    deletedAt:{
        type: DataTypes.DATE
    },
    deleterUserId:{
    type:DataTypes.INTEGER,
    },


  }, {
    tableName: "tipDeviceInfo",
    paranoid: true,
    timestamps: true,
  });


  return Tdi;
};