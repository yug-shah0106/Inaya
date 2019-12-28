const Sequelize = require('sequelize');
const db = require('../config/database');

const lineItems = db.define('line_items',{
  designer_order_id:{
    type:Sequelize.INTEGER
  },
  cart_id:{
    type:Sequelize.INTEGER
  },
  design_id:{
    type:Sequelize.INTEGER
  },
  status:{
    type:Sequelize.STRING
  },
  quantity:{
    type:Sequelize.INTEGER
  },
  total:{
    type:Sequelize.INTEGER
  },
  discount:{
    type:Sequelize.INTEGER
  },
  coupon_id:{
    type:Sequelize.INTEGER
  },
  created_at:{
    type:Sequelize.STRING
  },
  updated_at:{
    type:Sequelize.STRING
  },
  received_at:{
    type:Sequelize.STRING
  }
},{timestamps: false})

module.exports = lineItems;

// CREATE TABLE "line_items" (
// "id" serial PRIMARY KEY,
// "designer_order_id" int,
// "cart_id" int,
// "design_id" int,
// "status" varchar,
// "quantity" int4,
// "total" int4,
// "discount" int4,
// "coupon_id" int,
// "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
// "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
// "received_at" varchar
// );
