import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Moods.css";
// import {connect} from  "react-redux"
// import {logout} from '../../redux/reducers/authReducer'

class Moods extends Component {
  render() {
    return (
      <div id="moods-root">
        <nav>
          <h1>user name</h1>
          <div className="img-box"></div>
          <input type="file" />
          <div className="btn-container">
          <Link to="/CreatePost"><button>POST</button></Link>
            <button>DELETE</button>
          </div>
        </nav>
        <div className='post-box'>
        <div className="post-container">
          <div className="post1"></div>
          <div className="post2"></div>
          <div className="post3"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default Moods;
