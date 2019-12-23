const Sequelize = require('sequelize');
const db = require('../config/database');

const sarees = db.define('sarees',{
  type:{
    type:Sequelize.STRING
  },
  blouse:{
    type:Sequelize.STRING
  },
  print_or_pattern_type:{
    type:Sequelize.STRING
  },
  ocassion:{
    type:Sequelize.STRING
  },
  ornamentation:{
    type:Sequelize.STRING
  },
  border:{
    type:Sequelize.STRING
  },
  blouse_fabric:{
    type:Sequelize.STRING
  },
  blouse_color:{
    type:Sequelize.STRING
  },
  blouse_work:{
    type:Sequelize.STRING
  },
  blouse_size:{
    type:Sequelize.STRING
  },
  created_at:{
    type:Sequelize.STRING
  },
  saree_length:{
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
  petticoat_size:{
    type:Sequelize.STRING
  },
  updated_at:{
    type:Sequelize.STRING
  },
  saree_fabric:{
    type:Sequelize.STRING
  },
  saree_length:{
    type:Sequelize.STRING
  },
  saree_color:{
    type:Sequelize.STRING
  }
},{timestamps: false})

module.exports = sarees;

// CREATE TABLE "sarees" (
//   "id" int4 PRIMARY KEY,
//   "type" varchar,
//   "blouse" varchar,
//   "print_or_pattern_type" varchar,
//   "ocassion" varchar,
//   "ornamentation" varchar,
//   "border" varchar,
//   "blouse_color" varchar,
//   "blouse_fabric" varchar,
//   "blouse_work" varchar,
//   "created_at" timestamp,
//   "saree_length" varchar,
//   "petticoat_available" varchar,
//   "petticoat_color" varchar,
//   "petticoat_fabric" varchar,
//   "petticoat_size" varchar,
//   "saree_fabric" varchar,
//   "saree_color" varchar,
//   "updated_at" timestamp
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
