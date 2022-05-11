create table productos(
    id integer primary key auto_increment,
    nombre text,
    descripcion text
);

select * from productos;

/*para insertar*/
insert into productos (nombre, descripcion) values ('Monitor', 'Monitor de 50 pulgadas');
insert into productos (nombre, descripcion) values ('Teclado', 'Standard');
insert into productos (nombre, descripcion) values ('Mouse', 'Standard');
/*para actualizar*/
update productos set nombre = 'CPU' where nombre = "Monitor"; 
/*para eliminar*/
delete from productos where id = 1;


create table usuarios (
    id integer primary key auto_increment,
    nombre text,
    edad integer
);

insert into usuarios (nombre, edad) values ('Nahuel', 20);
insert into usuarios (nombre, edad) values ('Matt', 38);
insert into usuarios (nombre, edad) values ('Seba', 40);
insert into usuarios (nombre, edad) values ('Charly', 35);
insert into usuarios (nombre, edad) values ('Fulana', 30);