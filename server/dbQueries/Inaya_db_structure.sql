CREATE TABLE "orders" (
  "id" int PRIMARY KEY,
  "number" varchar UNIQUE,
  "user_id" int,
  "status" varchar,
  "created_at" varchar,
  "updated_at" varchar,
  "confirmed_at" varchar,
  "dispatched_at" varchar,
  "app_source" varchar,
  "pincode" varchar,
  "street" varchar,
  "city" varchar,
  "state" varchar,
  "country" varchar,
  "billing_pincode" varchar,
  "billing_street" varchar,
  "billing_city" varchar,
  "billing_state" varchar,
  "billing_country" varchar,
  "name" varchar,
  "email" varchar,
  "phone" varchar,
  "weight" float8,
  "discount" int4,
  "coupon_id" int,
  "cart_id" int,
  "ip_address" varchar,
  "total" int4,
  "paid_amount" int4,
  "pay_type" varchar,
  "payment_gateway" varchar,
  "payment_status" varchar,
  "order_details" hstore
);

CREATE TABLE "designer_orders" (
  "id" int PRIMARY KEY,
  "order_id" int,
  "design_id" int,
  "designer_id" int,
  "created_at" varchar,
  "updated_at" varchar,
  "confirmed_at" varchar,
  "dispatched_at" varchar,
  "received_at" varchar,
  "completed_at" varchar,
  "designer_discount" int,
  "coupon_id" int,
  "status" varchar,
  "discount" int4,
  "total" int4,
  "payout" int4,
  "shipper_id" int4,
  "shipper_name" varchar,
  "awb_number" varchar
);

CREATE TABLE "line_items" (
  "id" int PRIMARY KEY,
  "designer_order_id" int,
  "cart_id" int,
  "design_id" int,
  "status" varchar,
  "quantity" int4,
  "total" int4,
  "discount" int4,
  "coupon_id" int,
  "created_at" varchar,
  "received_at" varchar
);

CREATE TABLE "designs" (
  "id" int PRIMARY KEY,
  "designer_id" int,
  "quantity" int,
  "price" int4,
  "discount_price" int4,
  "coupon_id" int,
  "created_at" varchar,
  "updated_at" varchar,
  "status" varchar,
  "designable_type" varchar,
  "last_stocked_in_at" varchar,
  "last_out_of_stock_at" varchar
);

CREATE TABLE "designers" (
  "id" int PRIMARY KEY,
  "quantity" int,
  "email" int,
  "phone" int,
  "user_id" int,
  "status" varchar,
  "coupon_id" varchar,
  "created_at" varchar,
  "updated_at" varchar
);

CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "user_type" varchar,
  "email" int,
  "phone" int,
  "status" varchar
);

CREATE TABLE "addresses" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "street" varchar,
  "city" varchar,
  "state" varchar,
  "pincode" varchar,
  "country" varchar
);

CREATE TABLE "coupons" (
  "id" int PRIMARY KEY,
  "start_date" varchar,
  "end_date" varchar,
  "coupon_owner" varchar,
  "coupon_type" varchar,
  "coupon_unit" int
);

CREATE TABLE "sarees" (
  "id" int4 PRIMARY KEY,
  "type" varchar,
  "blouse" varchar,
  "print_or_pattern_type" varchar,
  "ocassion" varchar,
  "ornamentation" varchar,
  "border" varchar,
  "blouse_color" varchar,
  "blouse_fabric" varchar,
  "blouse_work" varchar,
  "created_at" timestamp,
  "saree_length" varchar,
  "petticoat_available" varchar,
  "petticoat_color" varchar,
  "petticoat_fabric" varchar,
  "petticoat_size" varchar,
  "saree_fabric" varchar,
  "saree_color" varchar,
  "updated_at" timestamp
);

CREATE TABLE "jewellery" (
  "id" int4 PRIMARY KEY,
  "ocassion" varchar,
  "base_metal" varchar,
  "stone_type" varchar,
  "type" varchar,
  "trends" varchar,
  "plating" varchar,
  "carat" varchar,
  "care" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "carts" (
  "id" int4 PRIMARY KEY,
  "user_id" int4,
  "created_at" varchar,
  "updated_at" varchar
);