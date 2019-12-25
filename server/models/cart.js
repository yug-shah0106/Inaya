const Sequelize = require('sequelize');
const db = require('../config/database');

const lineItems = db.define('carts',{
  user_id:{
    type:Sequelize.INTEGER
  },
  created_at:{
    type:Sequelize.STRING
  },
  updated_at:{
    type:Sequelize.STRING
  }
  },{timestamps: false})

module.exports = lineItems;