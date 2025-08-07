const { Sequelize } = require('sequelize');

// Ganti dengan sesuai dengan setting phpMyAdmin kamu
const sequelize = new Sequelize('aisprintmanager', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
