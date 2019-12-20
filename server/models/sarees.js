const Sequelize = require('sequelize');
const db = require('../config/database');

const sarees = db.define('sarees',{
  blouse_available:{
    type:Sequelize.STRING
  },
  blouse_color:{
    type:Sequelize.STRING
  },
  blouse_fabric:{
    type:Sequelize.STRING
  },
  blouse_image:{
    type:Sequelize.STRING
  },
  blouse_length:{
    type:Sequelize.STRING
  },
  blouse_size:{
    type:Sequelize.STRING
  },
  blouse_work:{
    type:Sequelize.STRING
  },
  created_at:{
    type:Sequelize.STRING
  },
  length:{
    type:Sequelize.STRING
  },
  petticoat_available:{
    type:Sequelize.STRING
  },
  petticoat_color:{
    type:Sequelize.STRING
  },
  petticoat_fabric:{
    type:Sequelize.STRING
  },
  saree_color:{
    type:Sequelize.STRING
  },
  petticoat_size:{
    type:Sequelize.STRING
  },
  updated_at:{
    type:Sequelize.STRING
  },
  width:{
    type:Sequelize.STRING
  },
},{timestamps: false})

module.exports = sarees;

// CREATE TABLE "sarees" (
//   "id" int4,
//   "blouse_available" varchar,
//   "blouse_color" varchar,
//   "blouse_fabric" varchar,
//   "blouse_image" varchar,
//   "blouse_length" varchar,
//   "blouse_size" varchar,
//   "blouse_work" varchar,
//   "created_at" timestamp,
//   "length" varchar,
//   "petticoat_available" varchar,
//   "petticoat_color" varchar,
//   "petticoat_fabric" varchar,
//   "petticoat_size" varchar,
//   "saree_color" varchar,
//   "updated_at" timestamp,
//   "width" varchar
// );
