require("dotenv").config();

module.exports = {
  Auth: process.env.AUTH_KEY,
  // MainPassword: process.env.MAIN_PASSWORD ,
  //   InvestPassword: process.env.INVEST_PASSWORD,
  //   PhonePassword: process.env.PHONE_PASSWORD,
  Group: process.env.GROUP,
  Leverage: process.env.LEVERAGE,
};
