insert into users(id,user_type,phone,email,status) 
values(1,'vendors',5236,123,'working');

insert into designers (id,quantity,email,phone,user_id,status,coupon_id,created_at,updated_at) 
values(123,10,12,0000,1,'working',0,'10-12-2019','10-12-2019');

insert into designs (id,designer_id,quantity,coupon_id,created_at,updated_at,status,designable_type,last_stocked_in_at,last_out_of_stock_at)
values (101,123,10,0,'10-12-2019','10-12-2019','good','saree','10-12-2019','10-12-2019');

insert into sarees (id,type,blouse,print_or_pattern_type,ocassion,ornamentation,border,blouse_color,blouse_fabric,blouse_work,created_at,saree_length,petticoat_available,petticoat_color,petticoat_fabric,petticoat_size,saree_fabric,saree_color,updated_at)
values(101,'banrasi','blouse piece','abstract','party wear',null,'no border','black','silk',null,'10-20-2019','5.2','yes','red','cotton','2.5','silk','red','10-20-2019');

-- insert into sarees (id,blouse_available,blouse_color,blouse_fabric,blouse_image,blouse_length,blouse_size,blouse_work,
-- created_at,length,petticoat_available,petticoat_color,petticoat_fabric,petticoat_size,saree_color,updated_at,width) values
-- ('yes','red','silk','path/path','40*10','40*10','hand crafted','10-12-2019','2 meter','','blue','silk','4 meter'
-- ,'yellow','12-10-2019','100 cm');
--
-- insert into sarees (blouse_available,blouse_color,blouse_fabric,blouse_image,blouse_length,blouse_size,blouse_work,
-- created_at,length,petticoat_available,petticoat_color,petticoat_fabric,petticoat_size,saree_color,updated_at,width) values
-- ('','red','silk','path/path','30*10','50*10','print','10-12-2019','2 meter','yes','blue','silk','4 meter'
-- ,'yellow','12-10-2019','100 cm');