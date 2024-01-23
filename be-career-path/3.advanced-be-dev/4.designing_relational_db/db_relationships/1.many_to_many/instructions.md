
1. We have pre-populated the `book` table with sample data. Write a query to select everything from the `book` table.

2. We have pre-populated the `author` table with sample data. Write a query to select everything from the `author` table.

3. Write statements to populate the `books_authors` table to show the following relationships:

- `'Learn PostgreSQL Volume 1'` is written by both `'James Key'` and `'Clara Index'`
- `'Learn PostgreSQL Volume 2'` is written by `'Clara Index'`

The primary keys for `books` are:

- `'123457890'` for `'Learn PostgreSQL Volume 1'`
- `'987654321'` for `'Learn PostgreSQL Volume 2'`

The primary keys for `authors` are:

- `'jkey@db.com'` for `'James Key'`
- `'cindex@db.com'` for `'Clara Index'`

4.  Write a query to show the one-to-many relationship between `book` and `author`. Display three columns using these aliases - `book_title`, `author_name` and `book_description`.

	You should expect 3 rows of results, in which one row might look like:

|**book_title**|**author_name**|**book_description**|
|---|---|---|
|Learn PostgreSQL Volume 1|Clara Index|Manage database part one|

5.  Write a query to show the one-to-many relationship between `author` and `book`. Display three columns as aliases - `author_name`, `author_email` and `book_title`.

	You should expect to see 3 rows of results and one of them might look like this:

|**author_name**|**author_email**|**book_title**|
|---|---|---|
|Clara Index|[cindex@db.com](mailto:cindex@db.com)|Learn PostgreSQL Volume 1|
