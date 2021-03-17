const express = require('express');
const app = express();
const { sequelize } = require('./models/index');

// Settings
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require('./routes'));


//Start
app.listen(PORT, function () {
  console.log(`Example app listening on PORT : ${PORT}`);

  sequelize.authenticate().then(() => {
      console.log('We have connected to the database');
  })
});