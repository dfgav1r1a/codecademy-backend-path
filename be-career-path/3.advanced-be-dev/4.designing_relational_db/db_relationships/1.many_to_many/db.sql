/* 
All tables should be created in a new schema
called cc_user
*/

DROP SCHEMA IF EXISTS cc_user CASCADE;
CREATE SCHEMA cc_user;
SET SEARCH_PATH = cc_user;

CREATE TABLE book (
  title varchar(100),
  isbn varchar(50) PRIMARY KEY,
  pages integer,
  price money,
  description varchar(256),
  publisher varchar(100)
);

CREATE TABLE author (
  name varchar(50),
  bio varchar(100),
  email varchar(20) PRIMARY KEY
);

CREATE TABLE books_authors (
  book_isbn varchar(50) REFERENCES book(isbn),
  author_email varchar(20) REFERENCES author(email),
  PRIMARY KEY (book_isbn, author_email)
);

INSERT INTO book VALUES (
  'Learn PostgreSQL Volume 1',
  '123457890',
  100,
  2.99,
  'Manage database part one',
  'Codecademy'
);

INSERT INTO book VALUES (
  'Learn PostgreSQL Volume 2',
  '987654321',
  200,
  3.99,
  'Manage database part two',
  'Codecademy'
);

INSERT INTO author VALUES (
  'James Key',
  'Guru in database management with PostgreSQL',
  'jkey@db.com'
);

INSERT INTO author VALUES (
  'Clara Index',
  'Guru in database management with PostgreSQL',
  'cindex@db.com'
);



