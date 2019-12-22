CREATE TABLE "orders" (
  "id" serial,
  "number" varchar UNIQUE,
  "user_id" int,
  "status" varchar,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
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
  "id" serial,
  "order_id" int,
  "design_id" int,
  "designer_id" int,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "confirmed_at" varchar,
  "dispatched_at" varchar,
  "received_at" varchar,
  "completed_at" varchar,
  "designer_discount" int,
  "coupon_id" int,
  "status" varchar,
  "discount" int4,
  "total" int4,
  "shipper_id" int4,
  "payout" int4,
  "shipper_name" varchar,
  "awb_number" varchar
);

CREATE TABLE "line_items" (
  "id" serial,
  "designer_order_id" int,
  "cart_id" int,
  "design_id" int,
  "status" varchar,
  "quantity" int4,
  "total" int4,
  "discount" int4,
  "coupon_id" int,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "received_at" varchar
);

CREATE TABLE "designs" (
  "id" serial,
  "designer_id" int,
  "quantity" int,
  "price" int4,
  "discount_price" int4,
  "coupon_id" int,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "status" varchar,
  "designable_type" varchar,
  "last_stocked_in_at" timestamptz,
  "last_out_of_stock_at" timestamptz
);

CREATE TABLE "designers" (
  "id" serial,
  "email" varchar,
  "phone" varchar,
  "user_id" int,
  "status" varchar,
  "coupon_id" varchar,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "users" (
  "id" serial,
  "user_type" varchar,
  "email" varchar,
  "phone" varchar,
  "status" varchar,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "addresses" (
  "id" serial,
  "user_id" int,
  "street" varchar,
  "city" varchar,
  "state" varchar,
  "pincode" varchar,
  "country" varchar,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "coupons" (
  "id" serial,
  "start_date" varchar,
  "end_date" varchar,
  "coupon_owner" varchar,
  "coupon_type" varchar,
  "coupon_unit" int,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "sarees" (
  "id" serial,
  "type" varchar,
  "blouse" varchar,
  "print_or_pattern_type" varchar,
  "ocassion" varchar,
  "ornamentation" varchar,
  "border" varchar,
  "blouse_color" varchar,
  "blouse_fabric" varchar,
  "blouse_work" varchar,
  "saree_length" varchar,
  "petticoat_available" varchar,
  "petticoat_color" varchar,
  "petticoat_fabric" varchar,
  "petticoat_size" varchar,
  "saree_fabric" varchar,
  "saree_color" varchar,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "jewellery" (
  "id" serial,
  "ocassion" varchar,
  "base_metal" varchar,
  "stone_type" varchar,
  "type" varchar,
  "trends" varchar,
  "plating" varchar,
  "carat" varchar,
  "care" varchar,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "carts" (
  "id" serial,
  "user_id" int4,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE "variants" (
  "id" serial PRIMARY KEY,
  "design_id" int,
  "vaiant_show" int,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "option_type_values" (
  "id" serial PRIMARY KEY,
  "name" varchar,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "option_type_values_variants" (
  "id" serial PRIMARY KEY,
  "variant_id" int,
  "option_type_value_id" int,
  "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP
);
