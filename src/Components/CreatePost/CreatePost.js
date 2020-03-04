import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getGames, getBooks, getPhotos, getTv} from '../../redux/reducers/postReducer';

class CreatePost extends Component {
    
    componentDidMount() {
        this.props.getGames();
        this.props.getBooks();
        this.props.getPhotos();
        this.props.getTv();
    }

    // displayUsername() {
    //     return this.props.user.map((username) => {
    //         return(
    //             <h1 key={user.id}>{user.username}</h1>
    //             );
    //         });
    // }
   
    render() {
        
        const mappedGames = this.props.games.map((game, index) => {
            return(
                <div>
                    <h4 key={index}>{game.game}</h4>
                </div>
            );
        });
       const mappedBooks = this.props.books.map((book, index) => {
           return(
               <div>
                   <h4 key={index}>{book.books}</h4>
               </div>
           );
       });
       const mappedPhotos = this.props.photos.map((photo, index) => {
           return(
               <div>
                   <h4 key={index}>{photo.photos}</h4>
               </div>
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

                    {/* <h1>{this.displayUsername}</h1>  */}

                    <h4>{mappedGames}</h4>
                    <h4>{mappedBooks}</h4>
                    <h4>{mappedPhotos}</h4>
                    <h4>{mappedTV}</h4>
                                            
                </section>
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
    {getGames, getBooks, getPhotos, getTv})(CreatePost);
