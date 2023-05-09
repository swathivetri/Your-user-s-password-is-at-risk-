
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Swa8667414579', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;