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
