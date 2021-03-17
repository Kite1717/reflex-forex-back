'use strict';

module.exports = (sequelize, DataTypes) => {

  const Mir = sequelize.define('Mir', {
 
    Firma : {
        type:DataTypes.STRING,
    },
    Soyadı : {
        type:DataTypes.STRING, 
    },
    CihazKimlikNo:{
        type:DataTypes.STRING,
    },
    BagajSayisi:{
        type:DataTypes.STRING,
    },
    TIPSayisi:{
        type:DataTypes.STRING,
    },
    IsabetSayisi:{
        type:DataTypes.STRING,
    },
    YanlisAlarmSayisi:{
        type:DataTypes.STRING,
    },
    KacirildiSayisi:{
        type:DataTypes.STRING,
    },
    IsabetOran:{
        type:DataTypes.STRING,
    },
    YanlisAlarmOran:{
        type:DataTypes.STRING,
    },
    IsabetSuresi:{
        type:DataTypes.STRING,
    },
    YanlisAlarmSuresi:{
        type:DataTypes.STRING,
    },
    TIPSayisiBombs:{
        type:DataTypes.STRING,
    },
    IsabetSayisiBombs:{
        type:DataTypes.STRING,
    },
    KacirildiSayisiBombs:{
        type:DataTypes.STRING,
    },
    IsabetOraniBombs:{
        type:DataTypes.STRING,
    },
    TIPSayisiGuns:{
        type:DataTypes.STRING,
    },
    IsabetSayisiGuns:{
        type:DataTypes.STRING,
    },
    KacirildiSayisiGuns:{
        type:DataTypes.STRING,
    },
    IsabetOraniGuns:{
        type:DataTypes.STRING,
    },
    TIPSayisiKnife:{
        type:DataTypes.STRING,
    },
    IsabetSayisiKnife:{
        type:DataTypes.STRING,
    },
    KacirildiSayisiKnife:{
        type:DataTypes.STRING,
    },
    IsabetOraniKnife:{
        type:DataTypes.STRING,
    },
    TIPSayisiOthers:{
        type:DataTypes.STRING,
    },
    IsabetSayisiOthers:{
        type:DataTypes.STRING,
    },
    KacirildiSayisiOthers:{
        type:DataTypes.STRING,
    },
    IsabetOraniOthers:{
        type:DataTypes.STRING,
    },


    creatorUserId:{
        type:DataTypes.INTEGER,
    },

  }, {
    tableName: "monthlyIndividualResult",
    paranoid: true,
    timestamps: true,
  });


  return Mir;
};