'use strict';

module.exports = (sequelize, DataTypes) => {

  const Cti = sequelize.define('Cti', {
  
    code: {
        type:DataTypes.STRING,

    },
    file: {
        type:DataTypes.STRING,

    },
    
    deleterUserId:{
    type:DataTypes.INTEGER,
    },
    IsNonTIP:{
      type:DataTypes.BOOLEAN,
    
  },

 

  }, {
    tableName: "ctiLibrary",
    paranoid: true,
    timestamps: true,
  });


  return Cti;
};