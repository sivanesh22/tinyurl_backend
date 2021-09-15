const Sequelize = require('sequelize');
const config = require('config');
const db_connect = config.dbConfig;
module.exports = new Sequelize(db_connect.database, db_connect.user, '', {
  host: db_connect.host,
  dialect:'postgres'
});
