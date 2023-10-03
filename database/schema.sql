CREATE DATABASE marketApp;
USE marketApp;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR (50)NOT NULL,
stock INT NOT NULL,
description_product VARCHAR (100) NOT NULL,
price FLOAT NOT NULL
);

INSERT INTO products (product_name, stock, description_product, price)
VALUES ("Mompox", 10, "Joyería artesanal filigrana", 20);

INSERT INTO products (product_name, stock, description_product, price)
VALUES ("Mompox Collar", 10, "Joyería artesanal filigrana de oro", 250);

INSERT INTO products (product_name, stock, description_product, price)
VALUES ("Mompox Pulsera", 10, "Joyería artesanal filigrana de plata", 80);

USE marketApp;

CREATE TABLE brands(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name_brand VARCHAR (50)NOT NULL
);
SELECT * FROM brands;

INSERT INTO brands (name_brand)
VALUES ("Mompox Jewels");

ALTER TABLE products ADD brand_id INT;
ALTER TABLE `products` ADD FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);