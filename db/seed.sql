-- CREATE TABLE users (id SERIAL PRIMARY KEY,
--   username VARCHAR(120),
--   password VARCHAR(20),
--   email VARCHAR(120) unique
-- );

-- INSERT INTO users
-- (username, password, email)
-- VALUES
-- ('Starlord', '$2a$10$', 'Starlord@dev.com'),
-- ('Mc Nasty', '$2a$10$KFR1', 'McNasty@dev.com'),
-- ('Stinky', '$2a$10$.', 'Stinky@dev.com');

CREATE TABLE users ( user_id SERIAL PRIMARY KEY, 
    name VARCHAR(200) NOT NULL, 
    password VARCHAR(200) NOT NULL, 
    email VARCHAR(200) NOT NULL,
    post_id INTEGER
  );
INSERT INTO users 
( name, password, email, post_id) 
VALUES 
( 'MadMax', 'drowssap', 'MadMax@dev.com', 2 ),
('Bob', 'password', 'Bob@dev.com', 1);
/////////////////////////////
-- CREATE TABLE post
-- (
--   id SERIAL PRIMARY KEY,
--   image_url VARCHAR(2000),
--   mood_entry VARCHAR(2000),
--   spotify_song VARCHAR(20000), 
--   book_id INT,
--   game_id INT,
--   TV_id INT,
--   photo_id INT,
--   user_id INT
-- );

-- INSERT INTO post 
--   (image_url, mood_entry, spotify_song, book_id, game_id, TV_id, photo_id, user_id)
-- VALUES
--   ('http://www.theholidayspot.com/easter/treasure_hunt/images/treasure-chest.png', 'okay', 'url', 1, 2, 2, 1, 1),
--   ('https://comps.canstockphoto.com/opened-treasure-chest-with-treasures-illustration_csp15511126.jpg','hello', 'url', 2, 2, 3, 3, 2),
--   ('https://vignette.wikia.nocookie.net/politicsandwar/images/d/d9/Treasure.jpg/revision/latest?cb=20170515133205', 'bye', 'url', 2, 1, 2, 2, 3);

CREATE TABLE post ( post_id SERIAL PRIMARY KEY, 
    mood_entry VARCHAR(1000) NOT NULL, 
    spotify_song VARCHAR(20000) NOT NULL, 
    book_id INTEGER,
      game_id INTEGER,
  TV_id INTEGER,
  photo_id INTEGER
   );
INSERT INTO post 
( mood_entry, spotify_song, book_id, game_id, TV_id, photo_id) 
VALUES 
( 'hellfire', 'ACDC', 2, 4, 6, 3),
( 'angles', 'nas', 2, 3, 6, 5);
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
    photo VARCHAR(20000) 
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