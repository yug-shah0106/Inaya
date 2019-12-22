insert into users(user_type,phone,email,status) 
values('designer',7021435236,'test@test.com','active'),
('buyer',9323135933,me@me.com,'new'),
('designer',8983082331,you@you.com,'active'),
('designer',9284469487,we@we.com,'active'),
('buyer',9821435236,us@us.com,'new'),
('designer',9856458425,inaya@inaya.com,'active');

insert into designers (email,phone,user_id,status,coupon_id) 
values('test@test.com',7021435236,1,'under_review',0),
('you@you.com',8983082331,3,'blocked',0),
('we@we.com',9284469487,4,'approved',0),
('inaya@inaya.com',9856458425,6,'approved',0);

insert into designs (designer_id,quantity,status,designable_type,name)
values (4,10,'in_stock','Jewellery','Green Metallic Necklace Sets'),
(3,0,'out_of_stock','saree','Black silk saree'),
(1,10,'in_stock','saree','Navy blue and gold-coloured Banarasi woven design saree'),
(4,10,'in_stock','Jewellery','Gold Plated 3 Layer Bangle'),
(2,10,'in_stock','Jewellery','White Kundan Necklace Sets'),
(3,10,'in_stock','saree','Printed Mysore Silk Saree');

insert into sarees(id,type,blouse,print_or_pattern_type,ocassion,ornamentation,border,blouse_color,blouse_fabric,blouse_work,saree_length,
petticoat_available,petticoat_color,petticoat_fabric,petticoat_size,saree_fabric,saree_color)
values (2,'Banrasi silk','blouse piece','abstract','party wear','','no border','black','silk','','5.2','yes','Red','Cotton','2.5','Silk','Black'),
(3,'Georgette','blouse piece','floral','Traditional','','Solid','Gold','Cotton','Border','5.2','yes','Navy Blue','Cotton','2.5','Georgette','Navy Blue'),
(6,'Mysore silk','blouse piece','No print','Traditional','square diamonds','Solid','Orange','silk','','5.2','yes','Yellow','Cotton','2.5','Silk','Yellow');

insert into jewellery(id,ocassion,base_metal,stone_type,type,trends,plating)
values(1,'party wear','alloy','kundan','necklace','handcrafted','gold-plated'),
(4,'traditional','silver','','bangles','antique','gold-plated'),
(5,'traditional','alloy','kundan','necklace','antique','gold-plated');

-- insert into sarees (id,blouse_available,blouse_color,blouse_fabric,blouse_image,blouse_length,blouse_size,blouse_work,
-- created_at,length,petticoat_available,petticoat_color,petticoat_fabric,petticoat_size,saree_color,updated_at,width) values
-- ('yes','red','silk','path/path','40*10','40*10','hand crafted','10-12-2019','2 meter','','blue','silk','4 meter'
-- ,'yellow','12-10-2019','100 cm');
--
-- insert into sarees (blouse_available,blouse_color,blouse_fabric,blouse_image,blouse_length,blouse_size,blouse_work,
-- created_at,length,petticoat_available,petticoat_color,petticoat_fabric,petticoat_size,saree_color,updated_at,width) values
-- ('','red','silk','path/path','30*10','50*10','print','10-12-2019','2 meter','yes','blue','silk','4 meter'
-- ,'yellow','12-10-2019','100 cm');