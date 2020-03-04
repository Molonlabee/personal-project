require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const {register, login, logout, getUser} = require('./controllers/authController');
const {getGames, addGame} = require('./controllers/gamesController');
const {getBooks} = require('./controllers/booksController');
const {getPhotos} = require('./controllers/photosController');
const {getTv} = require('./controllers/tvControllers');

const app = express();

//CONTROLLERS
const auth = require('./controllers/authController')
const game = require('./controllers/gamesController')

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
app.post('/api/game', game.addGame);
// api.post('/api/book', postBook);
// api.post('/api/photo', postPhoto);
// api.post('/api/tv', postTv);
//DELETE
// api.delete('/api/game/:id',deleteGame);
// api.delete('/api/book/:id',deleteBook);
// api.delete('/api/photo/:id',deletePhoto);
// api.delete('/api/tv/:id',deleteTv);

//PUT


//LISTEN
app.listen(SERVER_PORT, () => {
  console.log(`Bat is Back! ${SERVER_PORT}`);
});