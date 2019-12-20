CREATE TABLE "orders" (
  "id" serial PRIMARY KEY,
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
  "id" serial PRIMARY KEY,
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
  "id" serial PRIMARY KEY,
  "designer_order_id" int,
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
  "id" serial PRIMARY KEY,
  "designer_id" int,
  "quantity" int,
  "coupon_id" int,
  "created_at" varchar,
  "updated_at" varchar,
  "status" varchar,
  "designable_type" varchar,
  "last_stocked_in_at" varchar,
  "last_out_of_stock_at" varchar
);

CREATE TABLE "designers" (
  "id" serial PRIMARY KEY,
  "quantity" int,
  "email" int,
  "phone" int,
  "user_id" int,
  "status" varchar,
  "coupon_id" int,
  "created_at" varchar,
  "updated_at" varchar
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "user_type" varchar,
  "email" int,
  "phone" int,
  "status" varchar
);

CREATE TABLE "addresses" (
  "id" serial PRIMARY KEY,
  "user_id" int,
  "street" varchar,
  "city" varchar,
  "state" varchar,
  "pincode" varchar,
  "country" varchar
);

CREATE TABLE "coupons" (
  "id" serial PRIMARY KEY,
  "start_date" varchar,
  "end_date" varchar,
  "coupon_owner" varchar,
  "coupon_type" varchar,
  "coupon_unit" int
);

CREATE TABLE "sarees" (
  "id" int4,
  "blouse_available" varchar,
  "blouse_color" varchar,
  "blouse_fabric" varchar,
  "blouse_image" varchar,
  "blouse_length" varchar,
  "blouse_size" varchar,
  "blouse_work" varchar,
  "created_at" timestamp,
  "length" varchar,
  "petticoat_available" varchar,
  "petticoat_color" varchar,
  "petticoat_fabric" varchar,
  "petticoat_size" varchar,
  "saree_color" varchar,
  "updated_at" timestamp,
  "width" varchar
);

CREATE TABLE "jewellery" (
  "id" int4,
  "carat" varchar,
  "care" varchar,
  "created_at" timestamp,
  "earings_height" varchar,
  "earings_width" varchar,
  "finish" varchar,
  "height" varchar,
  "setting" varchar,
  "speciality" varchar,
  "updated_at" timestamp,
  "width" varchar
);

ALTER TABLE "designer_orders" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "designer_orders" ADD FOREIGN KEY ("id") REFERENCES "line_items" ("designer_order_id");

ALTER TABLE "line_items" ADD FOREIGN KEY ("design_id") REFERENCES "designs" ("id");

ALTER TABLE "designs" ADD FOREIGN KEY ("designer_id") REFERENCES "designers" ("id");

ALTER TABLE "designer_orders" ADD FOREIGN KEY ("designer_id") REFERENCES "designers" ("id");

ALTER TABLE "designers" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("coupon_id") REFERENCES "coupons" ("id");

ALTER TABLE "designer_orders" ADD FOREIGN KEY ("coupon_id") REFERENCES "coupons" ("id");

ALTER TABLE "line_items" ADD FOREIGN KEY ("coupon_id") REFERENCES "coupons" ("id");

ALTER TABLE "addresses" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "jewellery" ADD FOREIGN KEY ("id") REFERENCES "designs" ("id");

ALTER TABLE "sarees" ADD FOREIGN KEY ("id") REFERENCES "designs" ("id");
