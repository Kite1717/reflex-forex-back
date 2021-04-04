"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        "forexAccount", // table name
        "qr_code_secret", // new field name
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.addColumn(
        "forexAccount", // table name
        "identificationNumber", // new field name
        {
          type: Sequelize.REAL,
        }
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    // return Promise.all([
    //   queryInterface.removeColumn('Users', 'linkedin'),
    //   queryInterface.removeColumn('Users', 'twitter'),
    //   queryInterface.removeColumn('Users', 'bio'),
    // ]);
  },
};
