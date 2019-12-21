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
  price:{
    type:Sequelize.INTEGER
  },
  discount_price:{
    type:Sequelize.INTEGER
  }
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


// insert into sarees (blouse_available,blouse_color,blouse_fabric,blouse_image,blouse_length,blouse_size,blouse_work,
//   created_at,length,petticoat_available,petticoat_color,petticoat_fabric,petticoat_size,saree_color,updated_at,width) values
//   ('yes','red','silk','path/path','40*10','40*10','embroidery','10-12-2019','2 meter','yes','blue','silk','4 meter'
//   ,'yellow','12-10-2019','100 cm');

  // insert into sarees (blouse_available,blouse_color,blouse_fabric,blouse_image,blouse_length,blouse_size,blouse_work,
  //   created_at,length,petticoat_available,petticoat_color,petticoat_fabric,petticoat_size,saree_color,updated_at,width) values
  //   ('','red','silk','path/path','30*10','50*10','print','10-12-2019','2 meter','yes','blue','silk','4 meter'
  //   ,'yellow','12-10-2019','100 cm');
  //
    // insert into sarees (id,blouse_available,blouse_color,blouse_fabric,blouse_image,blouse_length,blouse_size,blouse_work,
    //   created_at,length,petticoat_available,petticoat_color,petticoat_fabric,petticoat_size,saree_color,updated_at,width) values
    //   (1,'yes','red','silk','path/path','40*10','40*10','hand crafted','10-12-2019','2 meter','','blue','silk','4 meter'
    //   ,'yellow','12-10-2019','100 cm');
