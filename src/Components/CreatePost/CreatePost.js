import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./CreatPost.css";
import {
  getGames,
  getBooks,
  getPhotos,
  getTv,
  addGame
} from "../../redux/reducers/postReducer";

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      game: "",
      book: "",
      photo: "",
      tv: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick() {
    this.props.addGame(this.state.game);
  }
  componentDidMount() {
    this.props.getGames();
    this.props.getBooks();
    this.props.getPhotos();
    this.props.getTv();
  }

  render() {
    // console.log(this.props.games)

    // const mappedGames = this.props.games.map((game, index) => {
    //   return <option value={game.game}>{game.game}</option>;
    // });
    // const mappedBooks = this.props.books.map((book, index) => {
    //   return <option value={book.books}>{book.books}</option>;
    // });
    // console.log(this.props.photos);
    // const mappedPhotos = this.props.photos.map((photos, index) => {
    //   return <option value={photos.photo}>{photos.photo}</option>;
    // });
    // console.log(this.props.tv);
    // const mappedTV = this.props.tv.map((tv, index) => {
    //   return <option value={tv.tv}>{tv.tv}</option>;
    // });

    return (
      <main id="create-post-root">
        <div className="content-container">
          <div className="board">
            <div className='note-1'>
              <div className='nail-1'></div>
              <img src='https://images.pexels.com/photos/2731667/pexels-photo-2731667.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
            </div>
            <div className='note-2'>
              <div className='nail-2'></div>
              <img src='https://images.pexels.com/photos/2731664/pexels-photo-2731664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
            </div>
            <div className='note-3'>
              <div className='nail-3'></div>
              <img src='https://images.pexels.com/photos/1466335/pexels-photo-1466335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
            </div>
            <div className='note-4'>
              <div className='nail-4'></div>
              <img src='https://images.pexels.com/photos/3676962/pexels-photo-3676962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
            </div>
            <div className='note-5'>
              <div className='nail-5'></div>
              <img src='https://images.pexels.com/photos/2178565/pexels-photo-2178565.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
            </div>
            <div className='note-6'>
              <div className='nail-6'></div>
              <img src='https://images.pexels.com/photos/395087/pexels-photo-395087.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
            </div>
            <div className='note-7'>
              <div className='nail-7'></div>
              <img src='https://images.pexels.com/photos/2753946/pexels-photo-2753946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
            </div>
            <div className='note-8'>
              <div className='nail-8'></div>
              <img src='https://images.pexels.com/photos/2753946/pexels-photo-2753946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
            </div>
            <div className='note-9'>
              <div className='nail-9'></div>
              <img src='https://images.pexels.com/photos/3536257/pexels-photo-3536257.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
            </div>
            <div className='note-10'>
              <div className='nail-10'></div>
              <img src='https://images.pexels.com/photos/1047319/pexels-photo-1047319.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            <div className='note-11'>
              <div className='nail-11'></div>
              <img src='https://images.pexels.com/photos/2731663/pexels-photo-2731663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            <div className='note-12'>
              <div className='nail-12'></div>
              <img src='https://images.pexels.com/photos/1466335/pexels-photo-1466335.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            <div className='note-13'>
              <div className='nail-13'></div>
              <img src='https://images.pexels.com/photos/1092201/pexels-photo-1092201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            {/* <div className='note-14'>
              <div className='nail-14'></div>
              <img src='https://images.pexels.com/photos/458976/pexels-photo-458976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div> */}
            {/* <div className='note-15'>
              <div className='nail-15'></div>
              <img src='https://images.pexels.com/photos/573302/pexels-photo-573302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div> */}
            {/* <div className='note-16'>
              <div className='nail-16'></div>
              <img src='https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div> */}
            {/* <div className='note-17'>
              <div className='nail-17'></div>
              <img src='https://images.pexels.com/photos/572861/pexels-photo-572861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div> */}
            {/* <div className='note-18'>
              <div className='nail-18'></div>
              <img src='https://images.pexels.com/photos/618752/pexels-photo-618752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div> */}
            {/* <div className='note-19'>
              <div className='nail-19'></div>
              <img src='https://images.pexels.com/photos/2361/nature-animal-wolf-wilderness.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div> */}
            {/* <div className='note-20'>
              <div className='nail-20'></div>
              <img src='https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'/>
            </div> */}
          </div>
          
          <div className="text-field">
            <h1>MOOD ENTRY</h1>

            <textarea></textarea>
          </div>
          <div className="btn-container">
            <button>SAVE</button>
            <div className="upload_icon">
            <i class="fas fa-upload"></i>
          </div>
            <Link to="/Moods">
              <button>CANCEL</button>
            </Link>
          </div>
        </div>

        {/* <select>
                    {mappedGames}
                </select>
                
                <select>
                    {mappedBooks}
                </select>

                <select>
                    {mappedPhotos}
                </select>
                
                <select>
                    {mappedTV}
                </select>

        <input placeholder='GAME' type='text' name='game' onChange={this.handleChange} />
                <button onClick={this.handleClick}>ADD Game</button> */}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.postReducer.games,
    books: state.postReducer.books,
    photos: state.postReducer.photos,
    tv: state.postReducer.tv
  };
};

export default connect(mapStateToProps, {
  getGames,
  getBooks,
  getPhotos,
  getTv,
  addGame
})(CreatePost);
