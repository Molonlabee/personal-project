import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getGames, getBooks, getPhotos, getTv, addGame} from '../../redux/reducers/postReducer';
import { Store } from 'express-session';

class CreatePost extends Component {
    constructor() {
        super()
        this.state ={
            game: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    handleClick() {
        this.props.addGame(this.state.game)
    }
    componentDidMount() {
        this.props.getGames();
        this.props.getBooks();
        this.props.getPhotos();
        this.props.getTv();
    }
   
    render() {
        console.log(this.props.games)
        
        const mappedGames = this.props.games.map((game, index) => {
            return(
            <option value={game.game}>{game.game}</option>
            );
        });
       const mappedBooks = this.props.books.map((book, index) => {
           return(
               <div>
                   <p key={index}>{book.books}</p>
               </div>
           );
       });
       const mappedPhotos = this.props.photos.map((photo, index) => {
           return(
            //    <div>
                   <h4 key={index}>{photo.photos}</h4>
            //    </div>
           );
       });
       const mappedTV = this.props.tv.map((tv, index) => {
           return(
               <div>
                   <h4 key={index}>{tv.tv}</h4>
               </div>
           );
       });

       return (
           <main>
                <h1>CreatePost.pg</h1>
                <section className='left'>
                    
                    <img style={{ width: '5rem', height:'5rem' }} 
                    src="https://capenetworks.com/static/images/testimonials/user-icon.svg" />

                    {/* <h4>{mappedGames}</h4> */}
                    <h4>{mappedBooks}</h4>
                    <h4>{mappedPhotos}</h4>
                    <h4>{mappedTV}</h4>                  
                </section>

                <input placeholder='GAME' type='text' name='game' onChange={this.handleChange} />
                <button onClick={this.handleClick}>ADD Game</button>
                <select>
                    {mappedGames}
                </select>

            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        games: state.postReducer.games,
        books: state.postReducer.books,
        photos: state.postReducer.photos,
        tv: state.postReducer.tv
    }}
    
export default connect(mapStateToProps,
    {getGames, getBooks, getPhotos, getTv, addGame})(CreatePost);
