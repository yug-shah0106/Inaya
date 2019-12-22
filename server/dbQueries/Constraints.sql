ALTER TABLE "designer_orders" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "line_items" ADD FOREIGN KEY ("designer_order_id") REFERENCES "designer_orders" ("id");

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

ALTER TABLE "carts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "line_items" ADD FOREIGN KEY ("cart_id") REFERENCES "carts" ("id");

ALTER TABLE "variants" ADD FOREIGN KEY ("design_id") REFERENCES "designs" ("id");

ALTER TABLE "option_type_values_variants" ADD FOREIGN KEY ("variant_id") REFERENCES "variants" ("id");

ALTER TABLE "variants" ADD FOREIGN KEY ("design_id") REFERENCES "designs" ("id");

ALTER TABLE "option_type_values_variants" ADD FOREIGN KEY ("variant_id") REFERENCES "variants" ("id");

ALTER TABLE "option_type_values_variants" ADD FOREIGN KEY ("option_type_value_id") REFERENCES "option_type_values" ("id");