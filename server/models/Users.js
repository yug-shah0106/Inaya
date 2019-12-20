const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('user',{
  user_type:{
    type:Sequelize.STRING
  },
  phone:{
    type:Sequelize.INTEGER
  },
  email:{
    type:Sequelize.STRING
  },
  status:{
    type:Sequelize.STRING
  }
},{timestamps: false})

module.exports = Users;
