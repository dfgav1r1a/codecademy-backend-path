--creating db
CREATE DATABASE favorite_movies WITH OWNER=postgres;

--creating table
CREATE TABLE films (
	name TEXT,
	release_year INTEGER
);

--testing
SELECT * FROM films;

--inserting data
INSERT INTO films (name, release_year)
VALUES 
('Lord of the Rings: Fellowship of the Ring', 2001),
('Lord of the Rings: The Two Towers', 2002),
('Lord of the Rings: The Return of the King', 2003),
('Sleepy Hollow', 1999),
('Penguins of Madagascar', 2014);

--adding new columns
ALTER TABLE films
ADD COLUMN runtime TEXT,
ADD COLUMN rating TEXT;

--backfilling data in new columns
UPDATE films
SET runtime='1h45m' 
WHERE release_year=1999;

UPDATE films
SET runtime='3h21m' 
WHERE release_year=2003;

UPDATE films
SET runtime='2h59m' 
WHERE release_year=2004;

UPDATE films
SET runtime='2h58m' 
WHERE release_year=2001;

UPDATE films
SET runtime='1h32m' 
WHERE release_year=2014;

UPDATE films SET rating='PG-13' WHERE release_year=2001;
UPDATE films SET rating='PG-13' WHERE release_year=2002;
UPDATE films SET rating='PG-13' WHERE release_year=2003;
UPDATE films SET rating='PG-13' WHERE release_year=2014;
UPDATE films SET rating='R' WHERE release_year=1999;

--entering a constraint
ALTER TABLE films
ADD CONSTRAINT unique_name UNIQUE (name);

--testing
SELECT * FROM films;