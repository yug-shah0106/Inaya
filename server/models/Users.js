const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('user',{
  name:{
    type:Sequelize.STRING
  },
  email:{
    type:Sequelize.STRING
  }
},{timestamps: false})

module.exports = Users;
