const Sequelize = require('sequelize');
const db = require('../config/database');

const designers = db.define('designers',{
  quantity:{
    type:Sequelize.INTEGER
  },
  email:{
    type:Sequelize.STRING
  },
  phone:{
    type:Sequelize.INTEGER
  },
  user_id:{
    Sequelize.INTEGER
  },
  status:{
    type:Sequelize.STRING
  },
  coupon_id:{
    type:Sequelize.INTEGER
  },
  created_at:{
    type:Sequelize.STRING
  },
  updated_at:{
    type:Sequelize.STRING
  }
},{timestamps: false})

module.exports = designers;


//
// CREATE TABLE "designers" (
//   "id" serial PRIMARY KEY,
//   "quantity" int,
//   "email" int,
//   "phone" int,
//   "user_id" int,
//   "status" varchar,
//   "coupon_id" int,
//   "created_at" varchar,
//   "updated_at" varchar
// );
