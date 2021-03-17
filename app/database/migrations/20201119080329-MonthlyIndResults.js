'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('monthlyIndividualResult', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    Firma : {
        type:Sequelize.STRING,
        defaultValue: ""
    },
    Soyadı : {
        type:Sequelize.STRING, 
        defaultValue: ""
    },
    CihazKimlikNo:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    BagajSayisi:{
        type:Sequelize.STRING,
        defaultValue:  ""
    },
    TIPSayisi:{
        type:Sequelize.STRING,
        defaultValue:  ""
    },
    IsabetSayisi:{
        type:Sequelize.STRING,
        defaultValue:  ""
    },
    YanlisAlarmSayisi:{
        type:Sequelize.STRING,
        defaultValue:  ""
    },
    KacirildiSayisi:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    IsabetOran:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    YanlisAlarmOran:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    IsabetSuresi:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    YanlisAlarmSuresi:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    TIPSayisiBombs:{
        type:Sequelize.STRING,
        defaultValue: ""

    },
    IsabetSayisiBombs:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    KacirildiSayisiBombs:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    IsabetOraniBombs:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    TIPSayisiGuns:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    IsabetSayisiGuns:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    KacirildiSayisiGuns:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    IsabetOraniGuns:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    TIPSayisiKnife:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    IsabetSayisiKnife:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    KacirildiSayisiKnife:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    IsabetOraniKnife:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    TIPSayisiOthers:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    IsabetSayisiOthers:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    KacirildiSayisiOthers:{
        type:Sequelize.STRING,
        defaultValue: ""
    },
    IsabetOraniOthers:{
        type:Sequelize.STRING,
        defaultValue: ""
    },



    creatorUserId: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deletedAt:{
      type: Sequelize.DATE
    },
    deleterUserId:{
      type: Sequelize.INTEGER
    },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
