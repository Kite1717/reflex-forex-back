'use strict';

module.exports = (sequelize, DataTypes) => {

  const Glhr = sequelize.define('Glhr', {
 
    TIPSayisi:{
        type:DataTypes.STRING,
    },
    IsabetSayisi:{
        type:DataTypes.STRING,
    },
    IsabetOrani:{
        type:DataTypes.STRING,
    },
    TIPSayisiBombs:{
        type:DataTypes.STRING,
    },
    IsabetSayisiBombs:{
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
    IsabetOraniGuns:{
        type:DataTypes.STRING,
    },
    TIPSayisiKnife:{
        type:DataTypes.STRING,
    },
    IsabetSayisiKnife:{
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
    IsabetOraniOthers:{
        type:DataTypes.STRING,
    },
 
    creatorUserId:{
        type:DataTypes.INTEGER,
    },

  }, {
    tableName: 'generalLibraryHitRate',
    paranoid: true,
    timestamps: true,
  });


  return Glhr;
};