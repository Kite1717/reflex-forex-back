"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        "forexAccount", // table name
        "role", // new field name
        {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 1,
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
