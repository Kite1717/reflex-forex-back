'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address:{
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      deviceIdNo :{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      tcNo : {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      isTipAdmin :{
        type : Sequelize.BOOLEAN,
        allowNull: false,
      },
      role:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      phoneNumber : {
        allowNull: false,
        type: Sequelize.STRING
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
   
  }
};
