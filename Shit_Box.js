// CREATE TABLE users ( user_id SERIAL PRIMARY KEY, 
//     name VARCHAR(200) NOT NULL, 
//     password VARCHAR(200) NOT NULL, 
//     post_id INTEGER
//    );
// INSERT INTO users 
// ( name, password, post_id) 
// VALUES 
// ( 'MadMax', 'drowssap', 2 ),
// ('Bob', 'password', 1);
///////////////////////////////

// CREATE TABLE post ( post_id SERIAL PRIMARY KEY, 
//     mood_entry VARCHAR(1000) NOT NULL, 
//     spotify_song VARCHAR(20000) NOT NULL, 
//     book_id INTEGER,
//       game_id INTEGER,
//   TV_id INTEGER,
//   photo_id INTEGER
//    );
// INSERT INTO post 
// ( mood_entry, spotify_song, book_id, game_id, TV_id, photo_id) 
// VALUES 
// ( 'hellfire', 'ACDC', 2, 4, 6, 3),
// ( 'angles', 'nas', 2, 3, 6, 5);
/////////////////////////////

// CREATE TABLE books ( books_id SERIAL PRIMARY KEY, 
//    books VARCHAR(1000) 
//    );

// INSERT INTO books 
// (books) 
// VALUES 
// ( 'harry potter'),
// ('game of thrones');
//////////////////////////

// CREATE TABLE games ( games_id SERIAL PRIMARY KEY, 
//     game VARCHAR(1000) 
//    );

// INSERT INTO games
// (game) 
// VALUES 
// ( 'call of duty'),
// ('need for speed');
/////////////////////////////

// CREATE TABLE tv ( tv_id SERIAL PRIMARY KEY, 
//     tv VARCHAR(1000) 
//    );

// INSERT INTO tv
// (tv) 
// VALUES 
// ( 'JoJo'),
// ('Breaking Bad');
//////////////////////////

// CREATE TABLE photos ( photos_id SERIAL PRIMARY KEY, 
//     photo VARCHAR(20000) 
//    );

// INSERT INTO photos
// (photo) 
// VALUES 
// ( null);
//////////////////////////////

// SELECT * FROM users 
// JOIN post ON 
// users.post_id = post_id;