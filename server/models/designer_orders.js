const Sequelize = require('sequelize');
const db = require('../config/database');

const designerOrders = db.define('designer_orders',{
  order_id:{
    type:Sequelize.INTEGER
  },
  design_id:{
    type:Sequelize.INTEGER
  },
  designer_id:{
    type:Sequelize.INTEGER
  },
  created_at:{
    type:Sequelize.STRING
  },
  updated_at:{
    type:Sequelize.STRING
  },
  confirmed_at:{
    type:Sequelize.STRING
  },
  dispatched_at:{
    type:Sequelize.STRING
  },
  received_at:{
    type:Sequelize.STRING
  },
  completed_at:{
    type:Sequelize.STRING
  },
  designer_discount:{
    type:Sequelize.INTEGER
  },
  coupon_id:{
    type:Sequelize.INTEGER
  },
  status:{
    type:Sequelize.STRING
  },
  discount:{
    type:Sequelize.INTEGER
  },
  total:{
    type:Sequelize.INTEGER
  },
  payout:{
    type:Sequelize.INTEGER
  },
  shipper_id:{
    type:Sequelize.INTEGER
  },
  shipper_name:{
    type:Sequelize.STRING
  },
  awb_number:{
    type:Sequelize.STRING
  }
},{timestamps: false})

module.exports = designerOrders;

// CREATE TABLE "designer_orders" (
//   "id" serial PRIMARY KEY,
//   "order_id" int,
//   "design_id" int,
//   "designer_id" int,
//   "created_at" varchar,
//   "updated_at" varchar,
//   "confirmed_at" varchar,
//   "dispatched_at" varchar,
//   "received_at" varchar,
//   "completed_at" varchar,
//   "designer_discount" int,
//   "coupon_id" int,
//   "status" varchar,
//   "discount" int4,
//   "total" int4,
//   "payout" int4,
//   "shipper_id" int4,
//   "shipper_name" varchar,
//   "awb_number" varchar
// );
