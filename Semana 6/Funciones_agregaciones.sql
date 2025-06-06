create database funciones_agregacion;
use funciones_agregacion;

-- Cesar Reyes, fecha: 30/5/2025, DAW2

select * from productos;

-- contar productos en la tabla
select count(*) as Total_de_Productos from productos;

-- calcular el valor total de todos los productos
select sum(value) as Valor_total_de_los_productos from Productos;

-- obtener el valor promedio de los productos
select avg(value) as Promedio_de_Valor from Productos;

-- encontrar el producto con el valor mas alto
select value as Valor, 
partNumber as Codigo, 
description as Descripcion from productos where value = (select max(value) from productos);

-- encontrar el producto con el valor mas bajo
select value as Valor, 
partNumber as Codigo,
description as Descripcion from productos where value = (select min(value) from productos);

-- contar el numero de productos de cada tipo de monedas (valueCurrency)
select count(*) as Numero_de_productos, valueCurrency as tipo_moneda from productos group by valueCurrency;

-- calcular el valor promedio de los productos por cada tipo de moneda (valueCurrency)
select avg(value) as Valor_promedio, valueCurrency as Tipo_moneda from productos group by valueCurrency;

-- obtener el valor total de los productos por productType
select sum(value) as Valor_total, productType as Tipo_producto from productos group by productType;

-- encontrar el valor maximo y minimo por ProductType
select productType as Tipo_producto, max(value) as Valor_maximo, min(value) as Valor_minimo from productos group by productType;

-- calcular el valor promedio de productos por cada categoryCode
select `category.code` as Codigo_categoria, avg(value) as Promedio from productos group by `category.code`;

-- contar productos disponibles en cada status
select count(*) as Cantidad, status as Estado from productos group by status;

-- calcular el valor total de productos en cada brandCode
select `brand.code` as Codigo_marca, sum(value) as Valor_total from productos group by `brand.code`;

-- obtener el numero total de codigos de productos unicos (partNumber)
select count(distinct partNumber) as Cantidad_codigos_unicos from productos;

-- calcular el valor promedio y cantidad de productos por cada lineCode
select `line.code` as Linea_de_codigo, avg(value) as Valor_promedio, count(*) as Cantidad_de_productos from productos group by `line.code`; 

-- encontrar el producto con el valor mas alto por cada plannerCode
select plannerCode as Codigo_planificador, max(value) as Valor_mas_alto from productos group by plannerCode;
