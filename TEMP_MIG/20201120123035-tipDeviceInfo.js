'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('tipDeviceInfo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipSoftwareVersions: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      softwareTechnicalFeatures: {
        allowNull: false,
        type: Sequelize.STRING
      },
            
      standAloneMode: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      networkMode: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      xRayDevices: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      creatorUserId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
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
