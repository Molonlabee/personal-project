CREATE TABLE users (id SERIAL PRIMARY KEY,
  username VARCHAR(120),
  password VARCHAR(20),
  email VARCHAR(120) unique,
  img TEXT
);

INSERT INTO users
(username, password, email, img)
VALUES
('Starlord', '$2a$10$', 'Starlord@dev.com', NULL),
('Mc Nasty', '$2a$10$KFR1', 'McNasty@dev.com', NULL),
('Stinky', '$2a$10$.', 'Stinky@dev.com', NULL);

/////////////////////////////
CREATE TABLE post (id SERIAL PRIMARY KEY,
mood_entry VARCHAR(200),
spotify_song TEXT,
photo_id INT,
book_id INT,
game_id INT,
tv_id INT
);

INSERT INTO post 
  (mood_entry, spotify_song, photo_id, book_id, game_id, tv_id)
VALUES
  ('okay', 'blah blah blah', 1, 2, 2, 1),
  ('bye', 'lah lah lah', 2, 2, 3, 3),
  ('hello', 'bye bye bye', 2, 1, 2, 2);

///////////////////////////

CREATE TABLE books ( books_id SERIAL PRIMARY KEY, 
   books VARCHAR(1000) 
   );

INSERT INTO books 
(books) 
VALUES 
( 'harry potter'),
('game of thrones');

////////////////////////

CREATE TABLE games ( games_id SERIAL PRIMARY KEY, 
    game VARCHAR(1000) 
   );

INSERT INTO games
(game) 
VALUES 
( 'call of duty'),
('need for speed');
///////////////////////////

CREATE TABLE tv ( tv_id SERIAL PRIMARY KEY, 
    tv VARCHAR(1000) 
   );

INSERT INTO tv
(tv) 
VALUES 
( 'JoJo'),
('Breaking Bad');
////////////////////////

CREATE TABLE photos ( photos_id SERIAL PRIMARY KEY, 
    photo TEXT
   );

INSERT INTO photos
(photo) 
VALUES 
( null);
////////////////////////////
SELECT * FROM users 
JOIN post ON 
users.post_id = post_id;

/////////////////////////
ALTER TABLE users
ALTER COLUMN password TYPE text;

//////////////////////////
ALTER TABLE users
ADD COLUMN img TEXT;