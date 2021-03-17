'use strict';

module.exports = (sequelize, DataTypes) => {

  const Ir = sequelize.define('Ir', {
 
    CihazKimlikNo:{
        type:DataTypes.STRING,
    },
    Firma : {
        type:DataTypes.STRING,
    },
    Soyadı : {
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
    Tarih:{
        type:DataTypes.STRING,
    },
    
    TehditKategorisi:{
        type:DataTypes.STRING,
    },
    TehditDosyaAdi:{
        type:DataTypes.STRING,
    },
    Karar:{
        type:DataTypes.STRING,
    },
    IsabetSuresi:{
        type:DataTypes.STRING,
    },
    YanlisAlarmSuresi:{
        type:DataTypes.STRING,
    },
  
    creatorUserId:{
        type:DataTypes.INTEGER,
    },

  }, {
    tableName: "individualResult",
    paranoid: true,
    timestamps: true,
  });


  return Ir;
};