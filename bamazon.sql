CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE item_table (
id INTEGER AUTO_INCREMENT NOT NULL,
item_id INTEGER NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INTEGER NOT NULL,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY(id)
);

DESCRIBE item_table;

INSERT INTO item_table(item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "mountain bike", "Outdoor & Fitness", 500, 6),
		(2, "boxing gloves", "Outdoor & Fitness", 60, 4),
        (3, "Treadmill", "Outdoor & Fitness", 600, 6),
        (4, "Football", "Outdoor & Fitness", 30, 13),
        (5, "Adidas Sneakers", "Clothing accessories", 75, 13),
	  (6, "Winter Jacket", "Clothing accessories", 80, 6),
      (7, "Polo t-shirt", "Clothing accessories", 45, 12),
      (8, "Puma sandals", "Clothing accessories", 35, 13),
      (9, "Ipad", "electronics", 800, 15),
	  (10, "Iphone charger","electronics", 30, 13),
      (11, "35 inch Flat Screen tv","electronics", 600, 12),
      (12, "Playstation 4", "electronics", 400, 16);
  
  SELECT * FROM item_table;
