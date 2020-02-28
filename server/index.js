require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
// const {register, login, logOut getUser} = require('./controllers/authController');

const app = express();

//CONTROLLERS
const auth = require('./controllers/authController')

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
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.post('/auth/logout', auth.logout);
//GET
// app.get('/api/post', getPost);
//DELETE
// app.delete(‘/api/post/:id’, deletePost);
// app.delete(‘/api/books/:id’,deletePost);
// app.delete(‘/api/TV/:id’,deletePost);
// app.delete(‘/api/games/:id’,deletePost);
// app.delete(‘/api/photos/:id’,deletePost);
//POST
// app.post(‘/api/post/‘]:id’, addPost);
// app.post(‘/api/books/:id’,deletePost);
// app.post(‘/api/TV/:id’,deletePost);
// app.post(‘/api/games/:id’,deletePost);
// app.post(‘/api/photos/:id’,deletePost);
//PUT
// app.put(‘/api/post/:id’, editPost);
//PATCH OR PUT
// app.patch(‘/api/post', post);

//LISTEN
app.listen(SERVER_PORT, () => {
  console.log(`Bat is Back! ${SERVER_PORT}`);
});