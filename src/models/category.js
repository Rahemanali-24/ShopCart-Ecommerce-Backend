const Sequelize = require('sequelize');
const db = require('../config/db_config');

const Category = db.define('Category',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});

module.exports = Category;
