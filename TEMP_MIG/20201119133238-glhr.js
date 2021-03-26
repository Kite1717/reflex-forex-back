'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('generalLibraryHitRate', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
  
    TIPSayisi:{
        type:Sequelize.STRING,
    },
    IsabetSayisi:{
        type:Sequelize.STRING,
    },
    IsabetOrani:{
        type:Sequelize.STRING,
    },
    TIPSayisiBombs:{
        type:Sequelize.STRING,
    },
    IsabetSayisiBombs:{
        type:Sequelize.STRING,
    },
    IsabetOraniBombs:{
        type:Sequelize.STRING,
    },
    TIPSayisiGuns:{
        type:Sequelize.STRING,
    },
    IsabetSayisiGuns:{
        type:Sequelize.STRING,
    },
    IsabetOraniGuns:{
        type:Sequelize.STRING,
    },
    TIPSayisiKnife:{
        type:Sequelize.STRING,
    },
    IsabetSayisiKnife:{
        type:Sequelize.STRING,
    },
    IsabetOraniKnife:{
        type:Sequelize.STRING,
    },
    TIPSayisiOthers:{
        type:Sequelize.STRING,
    },
    IsabetSayisiOthers:{
        type:Sequelize.STRING,
    },
    IsabetOraniOthers:{
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
