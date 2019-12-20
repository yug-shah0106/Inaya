
const Sequelize = require('sequelize');
const db = require('../config/database');

const Addresses = db.define('addresses',{
  user_id:{
    type:Sequelize.INTEGER
  },
  street:{
    type:Sequelize.INTEGER
  },
  city:{
    type:Sequelize.STRING
  },
  state:{
    type:Sequelize.STRING
  },
  pincode:{
    type:Sequelize.STRING
  },
  country:{
    type:Sequelize.STRING
  }
},{timestamps: false})

module.exports = Addresses;
//
// CREATE TABLE "addresses" (
//   "id" serial PRIMARY KEY,
//   "user_id" int,
//   "street" varchar,
//   "city" varchar,
//   "state" varchar,
//   "pincode" varchar,
//   "country" varchar
// );
