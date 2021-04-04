"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        "forexAccount", // table name
        "qr_code", // new field name
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        }
      ),
      queryInterface.addColumn(
        "forexAccount", // table name
        "qr_code_image", // new field name
        {
          type: Sequelize.STRING,
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
