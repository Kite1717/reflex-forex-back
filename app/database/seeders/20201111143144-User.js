"use strict";

const bcrypt = require("bcrypt");
const authConfig = require("../../../config/auth");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "forexAccount",
      [
        {
          Name: "ReflexFx",
          Email: "info@reflexfx.com",
          Group: "Admin",
          Login: 9999999,
          MainPassword: bcrypt.hashSync("Mm123456", +authConfig.rounds),
          PhonePassword: bcrypt.hashSync("Mm123456", +authConfig.rounds),
          InvestPassword: bcrypt.hashSync("Mm123456", +authConfig.rounds),
          createdAt: new Date(),
          updatedAt: new Date(),
          qr_code: true,
          role: 0,
          creatorUserId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
