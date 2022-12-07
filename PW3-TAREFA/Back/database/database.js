const Sequelize = require('sequelize');

const connection = new Sequelize(
    'api_noticias',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;