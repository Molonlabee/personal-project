require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const {register, login, logout, getUser} = require('./controllers/authController');
const {getGames, addGame,deleteGame, updateGame} = require('./controllers/gamesController');
const {getBooks, addBook, deleteBook, updateBook} = require('./controllers/booksController');
const {getPhotos, addPhoto, deletePhoto, updatePhoto} = require('./controllers/photosController');
const {getTv, addTv, deleteTv, updateTv} = require('./controllers/tvControllers');

const app = express();

//CONTROLLERS
const auth = require('./controllers/authController')
const game = require('./controllers/gamesController')
const book = require('./controllers/booksController')
const photo = require('./controllers/photosController')
const tv = require('./controllers/tvControllers')

//DOTENV
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// DB
// connects to the heroku db 
massive(CONNECTION_STRING).then(db => {
  app.set("db", db); //saves the db argument in App under the name 'db'
  console.log('DB connected'); //lets you know the server started
})
.catch(res => console.log(res))

//BCRYPT
app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 1
    }
  })
);

// //USE REQ, RES
app.use(express.json());

//ENDPOINTS

//BCRYPT
app.post('/auth/register', register);
app.post('/auth/login', login);
app.post('/auth/logout', logout);
//GET
app.get('/api/games', getGames);
app.get('/api/books', getBooks);
// app.get('/api/music', getMusic);
app.get('/api/photos', getPhotos);
app.get('/api/tv', getTv);
//POST
app.post('/api/game', addGame);
app.post('/api/book', addBook);
app.post('/api/photo', addPhoto);
app.post('/api/tv', addTv);
//DELETE
app.delete('/api/game/:id',deleteGame);
app.delete('/api/book/:id',deleteBook);
app.delete('/api/photo/:id',deletePhoto);
app.delete('/api/tv/:id',deleteTv);

//PUT
app.put('/api/game', updateGame);
app.put('/api/book', updateBook);
app.put('./api/photo', updatePhoto);
app.put('./api/tv', updateTv);


//LISTEN
app.listen(SERVER_PORT, () => {
  console.log(`Bat is Back! ${SERVER_PORT}`);
});