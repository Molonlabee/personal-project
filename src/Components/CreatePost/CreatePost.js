import React, { Component } from "react";
import { connect } from "react-redux";
import './CreatPost.css';
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
          
        <nav>
          <h1>user name</h1>
          <div className="img-box"></div>
          <div className="icons-container">
            <div className='game'>
            <i class="fas fa-gamepad"></i>
            </div>
            <div className='music'>
            <i class="fas fa-headphones"></i>
            </div>
            <div className='pictures'>
            <i class="fas fa-camera"></i>
            </div>
            <div className='books'>
            <i class="fas fa-book-open"></i>
            </div>
          </div>
            <button>MOODS</button>
        </nav>

        {/*                 
                <select>
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
                </select> */}

        {/* <input placeholder='GAME' type='text' name='game' onChange={this.handleChange} />
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
