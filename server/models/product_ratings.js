const Sequelize = require('sequelize');
const db = require('../config/database');

const productRatings = db.define('product_ratings',{
  rating:{
    type:Sequelize.INTEGER
  },
},{timestamps: false})

module.exports = productRatings;
