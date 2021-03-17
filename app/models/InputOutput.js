'use strict';

module.exports = (sequelize, DataTypes) => {

  const Io = sequelize.define('Io', {
 
    CihazKimlikNo:{
        type:DataTypes.STRING,
    },
    Soyadı : {
        type:DataTypes.STRING, 
    },
    Firma : {
        type:DataTypes.STRING,
    },

    Site:{
        type:DataTypes.STRING,
    },
    AltSite:{
        type:DataTypes.STRING,
    },
    Makine:{
        type:DataTypes.STRING,
    },
    MakineSeriNo:{
        type:DataTypes.STRING,
    },
    GirisTarihi:{
        type:DataTypes.STRING,
    },
    CikisTarihi:{
        type:DataTypes.STRING,
    },

   
    creatorUserId:{
        type:DataTypes.INTEGER,
    },

  }, {
    tableName: "inputOutput",
    paranoid: true,
    timestamps: true,
  });


  return Io;
};