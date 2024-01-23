--1
SELECT * FROM book;
--2
SELECT * FROM author;
--3
INSERT INTO books_authors VALUES (
  '123457890',
  'jkey@db.com'
);

INSERT INTO books_authors VALUES (
  '123457890',
  'cindex@db.com'
);

INSERT INTO books_authors VALUES (
  '987654321',
  'cindex@db.com'
);

--4
SELECT book.title AS book_title,
        author.name AS author_name,
        book.description AS book_description
FROM book
JOIN books_authors
  ON book.isbn = books_authors.book_isbn
JOIN author
  ON author.email = books_authors.author_email;

--5
SELECT author.name AS author_name,
       author.email AS author_email,
       book.title AS book_title
FROM author
INNER JOIN books_authors
  ON  books_authors.author_email = author.email
INNER JOIN book
  ON books_authors.book_isbn = book.isbn;


