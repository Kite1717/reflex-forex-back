'use strict';

module.exports = (sequelize, DataTypes) => {

  const Fti = sequelize.define('Fti', {
  
    code: {
        type:DataTypes.STRING,

    },
    file: {
        type:DataTypes.STRING,

    },

    catId: {
        type:DataTypes.STRING,

    },
    
    subCatId: {
        type:DataTypes.STRING,

    },
    IsNonTIP:{
      type:DataTypes.BOOLEAN,
    
  },

    
    deleterUserId:{
    type:DataTypes.INTEGER,
    },

 

  }, {
    tableName: "ftiLibrary",
    paranoid: true,
    timestamps: true,
  });


  return Fti;
};