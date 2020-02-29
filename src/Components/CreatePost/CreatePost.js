import React, { Component } from 'react'

class CreatePost extends Component {
    render() {
        return (
            <main>
                <h1>CreatePost.pg</h1>
                <section>
                    <img style={{ width: '5rem', height:'5rem' }} src="{}" />
                    <p>User</p>
                    <ul>
                        <li><button>Books</button></li>
                        <li><button>TV</button></li>
                        <li><button>Music</button></li>
                        <li><button>Games</button></li>
                        <li><button>Photos</button></li>
                        <li><button>Delete</button></li>
                        <li><button>Add</button></li>
                    </ul>
                    {/* <div>
                        <button>Games</button>
                        <button>TV</button>
                        <button>Music</button>
                        <button>Photos</button>
                        <button>Books</button>
                        <button>Delete</button>
                        <button>Add</button>
                    </div> */}
                </section>

                <section>
                    <img style={{ width: '10rem', height:'12rem' }} src="{}" />
                    <body>
                    <title>Card Title</title>
                    <textarea style={{ width: '10rem', height:'9rem' }} >
                    BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK.
                    BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK.
                    </textarea>
                    <button variant="post">POST</button>
                    </body>
                </section>

            </main>
        )
    }
}

export default CreatePost;
