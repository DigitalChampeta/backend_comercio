CREATE TABLE `products` (
  `id` varchar(255) PRIMARY KEY,
  `name` varchar(255),
  `price` float,
  `stock` int,
  `brands_id` int
);

CREATE TABLE `brands` (
  `id` int PRIMARY KEY,
  `name` varchar(255)
);

ALTER TABLE `products` ADD FOREIGN KEY (`brands_id`) REFERENCES `brands` (`id`);
