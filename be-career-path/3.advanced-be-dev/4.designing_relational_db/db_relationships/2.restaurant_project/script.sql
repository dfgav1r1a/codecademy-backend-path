--1, 6

CREATE TABLE restaurant (
  id integer PRIMARY KEY,
  name varchar(20),
  description varchar(100),
  rating decimal,
  telephone varchar(20),
  hours varchar(100)
);

CREATE TABLE address (
 id integer PRIMARY KEY,
 street_number varchar(100),
 street_name varchar(100),
 city varchar(20),
 state varchar(100),
 map_link varchar(50),
 restaurant_id integer REFERENCES restaurant(id) UNIQUE
);

--3
CREATE TABLE category (
  id char(2) PRIMARY KEY,
  name varchar(20),
  description varchar(1000)
);

--4
CREATE TABLE dish (
  id integer PRIMARY KEY,
  name varchar(50),
  description varchar(1000),
  spicy boolean
);

--5
CREATE TABLE  review (
  id integer PRIMARY KEY,
  rating decimal,
  content varchar(200),
  date date,
  restaurant_id integer REFERENCES restaurant(id)
);

--8
CREATE TABLE categories_dishes (
  category_id char(2) REFERENCES category(id),
  dish_id integer REFERENCES dish(id),
  PRIMARY KEY (category_id, dish_id),
  price money
);

--2
SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'address';

SELECT constraint_name, table_name, column_name
FROM information_schema.key_column_usage
WHERE table_name = 'restaurant';
  
/*
 *--------------------------------------------
 Insert values for restaurant
 *--------------------------------------------
 */

INSERT INTO restaurant VALUES (
  1,
  'Bytes of China',
  'Delectable Chinese Cuisine',
  3.9,
  '6175551212',
  'Mon - Fri 9:00 am to 9:00 pm, Weekends 10:00 am to 11:00 pm'
);

/*
 *--------------------------------------------
 Insert values for address
 *--------------------------------------------
 */
INSERT INTO address VALUES (
  1,
  '2020',
  'Busy Street',
  'Chinatown',
  'MA',
  'http://bit.ly/BytesOfChina',
  1
);

/*
 *--------------------------------------------
 Insert values for review
 *--------------------------------------------
 */
INSERT INTO review VALUES (
  1,
  5.0,
  'Would love to host another birthday party at Bytes of China!',
  '05-22-2020',
  1
);

INSERT INTO review VALUES (
  2,
  4.5,
  'Other than a small mix-up, I would give it a 5.0!',
  '04-01-2020',
  1
);

INSERT INTO review VALUES (
  3,
  3.9,
  'A reasonable place to eat for lunch, if you are in a rush!',
  '03-15-2020',
  1
);

/*
 *--------------------------------------------
 Insert values for category
 *--------------------------------------------
 */
INSERT INTO category VALUES (
  'C',
  'Chicken',
  null
);

INSERT INTO category VALUES (
  'LS',
  'Luncheon Specials',
  'Served with Hot and Sour Soup or Egg Drop Soup and Fried or Steamed Rice  between 11:00 am and 3:00 pm from Monday to Friday.'
);

INSERT INTO category VALUES (
  'HS',
  'House Specials',
  null
);

/*
 *--------------------------------------------
 Insert values for dish
 *--------------------------------------------
 */
INSERT INTO dish VALUES (
  1,
  'Chicken with Broccoli',
  'Diced chicken stir-fried with succulent broccoli florets',
  false
);

INSERT INTO dish VALUES (
  2,
  'Sweet and Sour Chicken',
  'Marinated chicken with tangy sweet and sour sauce together with pineapples and green peppers',
  false
);

INSERT INTO dish VALUES (
  3,
  'Chicken Wings',
  'Finger-licking mouth-watering entree to spice up any lunch or dinner',
  true
);

INSERT INTO dish VALUES (
  4,
  'Beef with Garlic Sauce',
  'Sliced beef steak marinated in garlic sauce for that tangy flavor',
  true
);
  
INSERT INTO dish VALUES (
  5,
  'Fresh Mushroom with Snow Peapods and Baby Corns',
  'Colorful entree perfect for vegetarians and mushroom lovers',
  false
);

INSERT INTO dish VALUES (
  6,
  'Sesame Chicken',
  'Crispy chunks of chicken flavored with savory sesame sauce',
  false
);

INSERT INTO dish VALUES (
  7,
  'Special Minced Chicken',
  'Marinated chicken breast sauteed with colorful vegetables topped with pine nuts and shredded lettuce.',
  false
);

INSERT INTO dish VALUES (
  8,
  'Hunan Special Half & Half',
  'Shredded beef in Peking sauce and shredded chicken in garlic sauce',
  true
);

/*
 *--------------------------------------------
 Insert valus for cross-reference table, categories_dishes
 *--------------------------------------------
 */
INSERT INTO categories_dishes VALUES (
  'C',
  1,
  6.95
);
  
INSERT INTO categories_dishes VALUES (
  'C',
  3,
  6.95
);
  
INSERT INTO categories_dishes VALUES (
  'LS',
  1,
  8.95
);
  
INSERT INTO categories_dishes VALUES (
  'LS',
  4,
  8.95
);
  
INSERT INTO categories_dishes VALUES (
  'LS',
  5,
  8.95
);
  
INSERT INTO categories_dishes VALUES (
 'HS',
 6,
 15.95
);
  
INSERT INTO categories_dishes VALUES (
 'HS',
 7,
 16.95
);
  
INSERT INTO categories_dishes VALUES (
 'HS',
 8,
 17.95
);

-- 10, 11
  
SELECT restaurant.name,
       address.street_number,
       address.street_name,
       restaurant.telephone
FROM restaurant
INNER JOIN address
  ON  restaurant.id = address.restaurant_id;
  
--the following uses a subquery
SELECT rating AS best_rating, content FROM review
WHERE rating = (
SELECT MAX(rating)
FROM review
);
  
--12
SELECT dish.name, categories_dishes.price AS price, category.name
FROM dish
INNER JOIN categories_dishes
  ON dish.id = categories_dishes.dish_id
INNER JOIN category
  ON category.id = categories_dishes.category_id
ORDER BY dish.name ASC;
  
--13
SELECT category.name AS category, dish.name, categories_dishes.price AS price
FROM dish
INNER JOIN categories_dishes
  ON dish.id = categories_dishes.dish_id
INNER JOIN category
  ON category.id = categories_dishes.category_id
ORDER BY 1 ASC;

--14
SELECT dish.name AS spicy_dish, category.name AS category, categories_dishes.price AS price
FROM dish
INNER JOIN categories_dishes
  ON dish.id = categories_dishes.dish_id
INNER JOIN category
  ON category.id = categories_dishes.category_id
WHERE dish.spicy = true
ORDER BY 1 ASC;
  
--15, 16, 17
SELECT dish_id, dish.name AS dish_name, COUNT(dish_id) AS category_count
FROM categories_dishes
JOIN dish
  ON dish.id = categories_dishes.dish_id
GROUP BY 1 , 2
HAVING COUNT(dish_id) > 1;