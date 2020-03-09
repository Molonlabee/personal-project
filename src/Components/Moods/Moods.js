import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Moods.css";
import '../CreatePost/CreatePost';
import CreatePost from "../CreatePost/CreatePost";
// import {connect} from  "react-redux"
// import {logout} from '../../redux/reducers/authReducer'

class Moods extends Component {
  constructor() {
    super();

    this.state = {
      view: 'createPost'
    }
  }

  createPost = () => {
    TouchList.setState({view: 'createPost'});
  }


  render() {
    return (
      <div id="moods-root">
        
        <nav>
          <h1>user name</h1>
          
          <i class="fas fa-user-circle"></i>
          <input type="file" />
          <div className="btn-container">
          <Link to="/CreatePost"><button>POST</button></Link>
            <button>EDIT</button>
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
        {/* <div className='create-post'>
      <CreatePost />
        </div> */}
      </div>
    );
  }
}

export default Moods;
