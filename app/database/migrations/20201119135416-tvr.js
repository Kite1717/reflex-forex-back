'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('tipVisualResults', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
 
    TipAdi : {
        type:Sequelize.STRING,
    },

    DosyaAdi : {
        type:Sequelize.STRING,
    },
    Kategori : {
        type:Sequelize.STRING,
    },
    GosterilenTipSayisi : {
        type:Sequelize.STRING,
    },
    IsabetSayisi : {
        type:Sequelize.STRING,
    },
    IptalSayisi : {
        type:Sequelize.STRING,
    },
    KacirildiSayisi : {
        type:Sequelize.STRING,
    },
    IsabetOrani : {
        type:Sequelize.STRING,
    },
    IptalOrani : {
        type:Sequelize.STRING,
    },
    KacirildiOrani : {
        type:Sequelize.STRING,
    },
 
    IsNonTIP:{
      type:Sequelize.BOOLEAN,
    
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
