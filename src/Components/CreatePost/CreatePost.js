import React, { Component } from 'react';
import './CreatePost';


class CreatePost extends Component {
    render() {
        return (
            <main>
                <h1>CreatePost.pg</h1>
                <section className='left'>
                    <button><img style={{ width: '5rem', height:'5rem' }} src="{}" /></button>
                    <p>User</p>
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

export default CreatePost;
