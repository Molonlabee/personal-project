import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {connect} from  "react-redux"
// import {logout} from '../../redux/reducers/authReducer'

class Moods extends Component {
   
    render() {
        return (
            <main>
                <section>
                    <button><img style={{ width: '5rem', height:'5rem' }} src="{}" /></button>
                    <p>User</p>
                    <div>
                        <Link to="/CreatePost"><button>POST</button></Link>
                        <button>DELETE</button>
                        {/* <Link to='/'><button onClick={this.props.logout}>LOGOUT</button></Link> */}
                        
                    </div>
                </section>

                <section>
                    <img style={{ width: '8rem', height:'8rem' }} src="{}" />
                    <img style={{ width: '8rem', height:'8rem' }} src="{}" />
                    <img style={{ width: '8rem', height:'8rem' }} src="{}" />
                    <img style={{ width: '8rem', height:'8rem' }} src="{}" />
                    <img style={{ width: '8rem', height:'8rem' }} src="{}" />
                    <img style={{ width: '8rem', height:'8rem' }} src="{}" />
                    <img style={{ width: '8rem', height:'8rem' }} src="{}" />
                    <img style={{ width: '8rem', height:'8rem' }} src="{}" />
                    <img style={{ width: '8rem', height:'8rem' }} src="{}" />
                </section>
            </main>
        )
    }
}

export default Moods;



