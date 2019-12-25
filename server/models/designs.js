const Sequelize = require('sequelize');
const db = require('../config/database');

const designs = db.define('designs',{
    name:{
      type:Sequelize.STRING
    },
  designer_id:{
    type:Sequelize.INTEGER
  },
  quantity:{
    type:Sequelize.INTEGER
  },
  price:{
    type:Sequelize.INTEGER
  },
  discount_price:{
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
// "id" serial PRIMARY KEY,
// "name" varchar,
// "designer_id" int,
// "quantity" int,
// "price" int4,
// "discount_price" int4,
// "coupon_id" int,
// "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
// "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
// "status" varchar,
// "designable_type" varchar,
// "last_stocked_in_at" timestamptz,
// "last_out_of_stock_at" timestamptz
// );
//
// insert into designs (designer_id,quantity,coupon_id,created_at,updated_at,status,designable_type,last_stocked_in_at,last_out_of_stock_at)
// values (123,10,0,'10-12-2019','10-12-2019','good','saree','10-12-2019','10-12-2019');
//
// insert into designs (designer_id,quantity,coupon_id,created_at,updated_at,status,designable_type,last_stocked_in_at,last_out_of_stock_at)
// values (124,0,0,'10-12-2019','10-12-2019','good','saree','10-12-2019','10-12-2019');
//
// insert into designs (designer_id,quantity,coupon_id,created_at,updated_at,status,designable_type,last_stocked_in_at,last_out_of_stock_at)
// values (125,5,0,'10-12-2019','10-12-2019','good','saree','10-12-2019','10-12-2019');
//
// insert into designs (designer_id,quantity,coupon_id,created_at,updated_at,status,designable_type,last_stocked_in_at,last_out_of_stock_at)
// values (126,10,0,'10-12-2019','10-12-2019','good','jewellery','10-12-2019','10-12-2019');
//
// insert into designs (designer_id,quantity,coupon_id,created_at,updated_at,status,designable_type,last_stocked_in_at,last_out_of_stock_at)
// values (127,0,0,'10-12-2019','10-12-2019','good','jewellery','10-12-2019','10-12-2019');
