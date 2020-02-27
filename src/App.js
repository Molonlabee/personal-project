import React, { Component } from 'react';
import './App.css'
// import './Components/Login/Login.css'
import Login from './Components/Login/Login';
// import CreatePost from './Components/CreatePost/CreatePost';
// import Moods from './Components/Moods/Moods';
// import Hobbies from './Components/Hobbies/Hobbies';
// import Register from './Components/Register/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        {/* <Register />
        <Moods />
        <CreatePost />
        <Hobbies /> */}
      </div>
    );
  }
}

export default App;


