'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    let fullName = req.body.fullName;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;
    let tokenID = req.body.tokenID;

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
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
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
