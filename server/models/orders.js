const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('orders',{
  number:{
    type:Sequelize.STRING
  },
  user_id:{
    type:Sequelize.INTEGER
  },
  status:{
    type:Sequelize.STRING
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
  app_source:{
    type:Sequelize.STRING
  },
  pincode:{
    type:Sequelize.STRING
  },
  street:{
    type:Sequelize.STRING
  },
  city:{
    type:Sequelize.STRING
  },
  state:{
    type:Sequelize.STRING
  },
  country:{
    type:Sequelize.STRING
  },
  billing_pincode:{
    type:Sequelize.STRING
  },
  billing_street:{
    type:Sequelize.STRING
  },
  billing_city:{
    type:Sequelize.STRING
  },
  billing_state:{
    type:Sequelize.STRING
  },
  billing_country:{
    type:Sequelize.STRING
  },
  name:{
    type:Sequelize.STRING
  },
  email:{
    type:Sequelize.STRING
  },
  phone:{
    type:Sequelize.STRING
  },
  weight:{
    type:Sequelize.FLOAT
  },
  discount:{
    type:Sequelize.INTEGER
  },
  coupon_id:{
    type:Sequelize.INTEGER
  },
  cart_id:{
    type:Sequelize.INTEGER
  },
  ip_address:{
    type:Sequelize.STRING
  },
  total:{
    type:Sequelize.INTEGER
  },
  paid_amount:{
    type:Sequelize.INTEGER
  },
  pay_type:{
    type:Sequelize.STRING
  },
  payment_gateway:{
    type:Sequelize.STRING
  },
  payment_status:{
    type:Sequelize.STRING
  },
  order_details:{
    type:Sequelize.HSTORE
  },
},{timestamps: false})

module.exports = Users;

// CREATE TABLE "orders" (
//   "id" serial PRIMARY KEY,
//   "number" varchar UNIQUE,
//   "user_id" int,
//   "status" varchar,
//   "created_at" varchar,
//   "updated_at" varchar,
//   "confirmed_at" varchar,
//   "dispatched_at" varchar,
//   "app_source" varchar,
//   "pincode" varchar,
//   "street" varchar,
//   "city" varchar,
//   "state" varchar,
//   "country" varchar,
//   "billing_pincode" varchar,
//   "billing_street" varchar,
//   "billing_city" varchar,
//   "billing_state" varchar,
//   "billing_country" varchar,
//   "name" varchar,
//   "email" varchar,
//   "phone" varchar,
//   "weight" float8,
//   "discount" int4,
//   "coupon_id" int,
//   "cart_id" int,
//   "ip_address" varchar,
//   "total" int4,
//   "paid_amount" int4,
//   "pay_type" varchar,
//   "payment_gateway" varchar,
//   "payment_status" varchar,
//   "order_details" hstore
// );
