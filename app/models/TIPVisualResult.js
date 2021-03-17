'use strict';

module.exports = (sequelize, DataTypes) => {

  const Tvr = sequelize.define('Tvr', {
 
    TipAdi : {
        type:DataTypes.STRING,
    },

    DosyaAdi : {
        type:DataTypes.STRING,
    },
    Kategori : {
        type:DataTypes.STRING,
    },
    GosterilenTipSayisi : {
        type:DataTypes.STRING,
    },
    IsabetSayisi : {
        type:DataTypes.STRING,
    },
    IptalSayisi : {
        type:DataTypes.STRING,
    },
    KacirildiSayisi : {
        type:DataTypes.STRING,
    },
    IsabetOrani : {
        type:DataTypes.STRING,
    },
    IptalOrani : {
        type:DataTypes.STRING,
    },
    KacirildiOrani : {
        type:DataTypes.STRING,
    },

    IsNonTIP:{
        type:DataTypes.BOOLEAN,
    },
   
    creatorUserId:{
        type:DataTypes.INTEGER,
    },

  }, {
    tableName: "tipVisualResults",
    paranoid: true,
    timestamps: true,
  });


  return Tvr;
};