const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('users',{
  user_type:{
    type:Sequelize.STRING
  },
  phone:{
    type:Sequelize.INTEGER
  },
  email:{
    type:Sequelize.INTEGER
  },
  status:{
    type:Sequelize.STRING
  }
},{timestamps: false})

module.exports = Users;
  // 
  // insert into users(user_type,phone,email,status) values('vendors',7021,123,'working');
