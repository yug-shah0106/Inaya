const Sequelize = require('sequelize');
const db = require('../config/database');

const product = db.define('product_listing',{
  description:{
    type:Sequelize.TEXT
  },
  title:{
    type:Sequelize.TEXT
  },
  price:{
    type:Sequelize.INTEGER
  },
  designer_id:{
    type:Sequelize.INTEGER
  },
  quantity:{
    type:Sequelize.INTEGER
  },
  color:{
    type:Sequelize.TEXT
  },
  discount_percent:{
    type:Sequelize.INTEGER
  },
  discount_price:{
    type:Sequelize.INTEGER
  },
  design_code:{
    type:Sequelize.TEXT
  },
  weight:{
    type:Sequelize.INTEGER
  },
  sell_count:{
    type:Sequelize.INTEGER
  },
  coupon_id:{
    type:Sequelize.INTEGER
  }
},{timestamps: false,
freezeTableName: true})

module.exports = product;
