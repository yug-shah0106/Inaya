const Sequelize = require('sequelize');
const db = require('../config/database');

const jewellery = db.define('jewellery',{
  carat:{
    type:Sequelize.STRING
  },
  care:{
    type:Sequelize.STRING
  },
  created_at:{
    type:Sequelize.STRING
  },
  earings_height:{
    type:Sequelize.STRING
  },
  earings_width:{
    type:Sequelize.STRING
  },
  finish:{
    type:Sequelize.STRING
  },
  height:{
    type:Sequelize.STRING
  },
  setting:{
    type:Sequelize.STRING
  },
  speciality:{
    type:Sequelize.STRING
  },
  updated_at:{
    type:Sequelize.STRING
  },
  width:{
    type:Sequelize.STRING
  }
},{timestamps: false,freezeTableName:true})

module.exports = jewellery;

// CREATE TABLE "jewellery" (
//   "id" int4,
//   "carat" varchar,
//   "care" varchar,
//   "created_at" timestamp,
//   "earings_height" varchar,
//   "earings_width" varchar,
//   "finish" varchar,
//   "height" varchar,
//   "setting" varchar,
//   "speciality" varchar,
//   "updated_at" timestamp,
//   "width" varchar
// );
