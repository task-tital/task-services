const Sequelize = require('sequelize');

const DB_CONNECTION_STRING = 'postgres://citizix_user:S3cret@localhost:5432/prueba';

const sequelize = new Sequelize(DB_CONNECTION_STRING);

module.exports = sequelize;