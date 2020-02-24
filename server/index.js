require("dotenv").config();
const express = require("express");
const massive = require("massive");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

//DB
// massive(CONNECTION_STRING).then(dbInstance => {
//     app.set('db', dbInstance);
// .catch(err => console.log(err));
// });


//ENDPOINTS
// app.get('/api/post', getPost);

// app.delete(‘/api/post/:id’, deletePost);
// app.delete(‘/api/books/:id’,deletePost);
// app.delete(‘/api/TV/:id’,deletePost);
// app.delete(‘/api/games/:id’,deletePost);
// app.delete(‘/api/photos/:id’,deletePost);

// app.post(‘/api/post/‘]:id’, addPost);
// app.post(‘/api/books/:id’,deletePost);
// app.post(‘/api/TV/:id’,deletePost);
// app.post(‘/api/games/:id’,deletePost);
// app.post(‘/api/photos/:id’,deletePost);

// app.put(‘/api/post/:id’, editPost);

// app.patch(‘/api/post', post);


//LISTEN
app.listen(SERVER_PORT, () => {
  console.log(`Bat is Back! ${SERVER_PORT}`);
});