UPDATE books
SET books = $1

WHERE
 books_id = $2;

SELECT * FROM books;