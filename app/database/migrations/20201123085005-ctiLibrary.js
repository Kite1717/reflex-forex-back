'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('ctiLibrary', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    file : {
      allowNull: false,
      type:Sequelize.STRING,
    },
    code: {
      allowNull: false,
      type :Sequelize.STRING,
    },

    IsNonTIP:{
      type:Sequelize.BOOLEAN,
    
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
