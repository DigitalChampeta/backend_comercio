CREATE DATABASE market_app;
USE market;

/*CREATE TABLE brands (
  id int AUTO_INCREMENT PRIMARY KEY,
  name_brand varchar(50) NOT NULL,
  description_brand varchar(100)
);*/

CREATE TABLE products (
  id int AUTO_INCREMENT PRIMARY KEY,
  name_product varchar(50) NOT NULL,
  price float NOT NULL,
  stock int NOT NULL,
  brand_name varchar(50) NOT NULL,
  brands_id int
);

/*INSERT into products(name_product,price,stock);
INSERT into brands(name_brand,description_brand)


ALTER TABLE products ADD FOREIGN KEY (brands_id) REFERENCES brands (id);



CREATE database books_app;
USE books_app;
CREATE TABLE books(
id int AUTO_INCREMENT, PRIMARY KEY (id),
title varchar(50) NOT NULL ,
writer varchar(50) NOT NULL,
book_description text(300) NOT NULL,
createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
);

INSERT into books(title,writer,book_description)
VALUES ("100 Años de Soledad", "Gabriel García Márquez", "El mejor libro de la historia"),
("La Fiesta del Chivo", "Mario Vargas Llosa", "Relato del asesinato");*/