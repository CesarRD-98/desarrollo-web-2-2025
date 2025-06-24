create database productos_db;
use productos_db;
/*
-- select count(*) as cantidad, categoryCode as categoria from productos group by categoryCode; 
rename table product_v6 to producto;
ALTER TABLE producto CHANGE `category.code` categoryCode VARCHAR(255);
ALTER TABLE producto CHANGE `brand.code` brandCode VARCHAR(255);
ALTER TABLE producto CHANGE `family.code` familyCode VARCHAR(255);
ALTER TABLE producto CHANGE `line.code` lineCode VARCHAR(255);
ALTER TABLE producto CHANGE `productSegment.code` productSegmentCode VARCHAR(255);

*/
-- select count(*) as cantidad, plannerCode as codigo_de_planificacion from productos group by plannerCode; 

-- se hizo una modificacion a los nombres de las columnas con representacion de <nombre.code> a <nombreCode> de las anteriores columnas
-- CesarRD

select categoryCode as Codigo_categoria, avg(value) as Promedio from producto group by categoryCode;