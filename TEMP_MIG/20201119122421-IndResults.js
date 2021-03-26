'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('individualResult', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    CihazKimlikNo:{
      type:Sequelize.STRING,
    },
    Soyadı : {
      type:Sequelize.STRING, 
    },
    Firma : {
        type:Sequelize.STRING,
    },
    Site:{
        type:Sequelize.STRING,
    },
    AltSite:{
        type:Sequelize.STRING,
    },
    Makine:{
        type:Sequelize.STRING,
    },
    MakineSeriNo:{
        type:Sequelize.STRING,
    },
    Tarih:{
        type:Sequelize.STRING,
    },
    TehditKategorisi:{
        type:Sequelize.STRING,
    },
    TehditDosyaAdi:{
        type:Sequelize.STRING,
    },
    Karar:{
      type:Sequelize.STRING,
    },
    IsabetSuresi:{
        type:Sequelize.STRING,
    },
    YanlisAlarmSuresi:{
        type:Sequelize.STRING,
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
