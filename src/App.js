import React, { Component } from 'react';
import './App.css'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import CreatePost from './Components/CreatePost/CreatePost';
import Moods from './Components/Moods/Moods';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        {/* <Register />  */}
        {/* <Moods /> */}
        {/* <CreatePost /> */}
      </div>
    );
  }
}

export default App;


