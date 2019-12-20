const Sequelize = require('sequelize');
const db = require('../config/database');

const designs = db.define('designs',{
  designer_id:{
    type:Sequelize.INTEGER
  },
  quantity:{
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
  status:{
    type:Sequelize.STRING
  },
  designable_type:{
    type:Sequelize.STRING
  },
  last_stocked_in_at:{
    type:Sequelize.STRING
  },
  last_out_of_stock_at:{
    type:Sequelize.STRING
  }
},{timestamps: false})

module.exports = designs;
// CREATE TABLE "designs" (
//   "id" serial PRIMARY KEY,
//   "designer_id" int,
//   "quantity" int,
//   "coupon_id" int,
//   "created_at" varchar,
//   "updated_at" varchar,
//   "status" varchar,
//   "designable_type" varchar,
//   "last_stocked_in_at" varchar,
//   "last_out_of_stock_at" varchar
// );
