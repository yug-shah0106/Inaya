const Sequelize = require('sequelize');
const db = require('../config/database');

const jewellery = db.define('jewellery',{
  ocassion:{
    type:Sequelize.STRING
  },
  base_metal:{
    type:Sequelize.STRING
  },
  stone_type:{
    type:Sequelize.STRING
  },
  type:{
    type:Sequelize.STRING
  },
  trends:{
    type:Sequelize.STRING
  },plating:{
    type:Sequelize.STRING
  },
  carat:{
    type:Sequelize.STRING
  },
  care:{
    type:Sequelize.STRING
  },
  created_at:{
    type:Sequelize.STRING
  },
  updated_at:{
    type:Sequelize.STRING
  }
},{timestamps: false,freezeTableName:true})

module.exports = jewellery;

// CREATE TABLE "jewellery" (
//   "id" int PRIMARY KEY,
  // "ocassion" varchar,
  // "base_metal" varchar,
  // "stone_type" varchar,
//   "type" varchar,
//   "trends" varchar,
//   "plating" varchar,
//   "carat" varchar,
//   "care" varchar,
//   "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
//   "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
// );
