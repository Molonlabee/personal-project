import React, { Component } from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {getGames} from '../../redux/reducers/postReducer';

class CreatePost extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         // users: '',
    //         games: ''
    //     }
    // }

    // displayUsername() {
    //     return this.props.user.map((username) => {
    //         return(
    //             <p key={user.id}>{user.username}</p>
    //             );
    //         });
    //     }
    componentDidMount() {
        this.props.getGames();
    }

    displayGame() {
        return this.props.games.map((game) => {
            return(
            <p key={game.id}>{game.game}</p>
            );
        });
    }

    render() {
        return (
            <main>
                <h1>CreatePost.pg</h1>
                <section className='left'>
                    <button><img style={{ width: '5rem', height:'5rem' }} src="{}" /></button>

                    <p>USERNAME</p>
                    {/* <p>{this.displayUsername()}</p> */}
 
                        <p>{this.displayGame()}</p>
                    <div>
                        <button>Games</button>
                        <button>TV</button>
                        <button>Music</button>
                        <button>Photos</button>
                        <button>Books</button>
                        <button>Delete</button>
                        <button>Add</button>
                    </div>
                </section>

                <section className='right'>
                    <img style={{ width: '10rem', height:'12rem' }} src="{}" />
                    <body>

                    <title>Card Title</title>

                    <textarea style={{ width: '10rem', height:'9rem' }} >
                    BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK.
                    BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK.
                    </textarea>

                    <button>POST</button>
                    <button>DELETE</button>
                    </body>
                </section>
            </main>
        )
    }
}

// export default CreatePost;

const mapStateToProps = state => {
    return {
        games: state.postReducer.games
    }}
    
export default connect(mapStateToProps,
    {getGames})(CreatePost);
