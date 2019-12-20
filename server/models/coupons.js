const Sequelize = require('sequelize');
const db = require('../config/database');

const coupons = db.define('coupons',{
  updated_at:{
    type:Sequelize.STRING
  },
  end_date:{
    type:Sequelize.STRING
  },
  coupon_owner:{
    type:Sequelize.STRING
  },
  coupon_type:{
    type:Sequelize.STRING
  },
  coupon_unit:{
    type:Sequelize.INTEGER
  }
},{timestamps: false})

module.exports = coupons;

// CREATE TABLE "coupons" (
//   "id" serial PRIMARY KEY,
//   "start_date" varchar,
//   "end_date" varchar,
//   "coupon_owner" varchar,
//   "coupon_type" varchar,
//   "coupon_unit" int
// );
