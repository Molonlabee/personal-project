require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
// const {getPost} = require('./controllers/controllers');

//DOTENV
const { SERVER_PORT, CONNECTION_STRING } = process.env;

// DB
// connects to the heroku db 
massive(CONNECTION_STRING).then(db => {
  app.set("db", db); //saves the db argument in App under the name 'db'
  console.log('DB connected'); //lets you know the server started
})
.catch(res => console.log(res))

// //USE REQ, RES
app.use(express.json());

//LISTEN
app.listen(SERVER_PORT, () => {
  console.log(`Bat is Back! ${SERVER_PORT}`);
});

//ENDPOINTS
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