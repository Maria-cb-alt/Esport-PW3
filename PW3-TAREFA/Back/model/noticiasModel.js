const Sequelize = require('sequelize');

const connection = require('../database/database');

const noticias = connection.define(
    'tbl_noticias',
    {
        nome_noticia:{
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

//noticias.sync({force:true});

module.exports = noticias;




