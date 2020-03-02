import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from  "react-redux"
import {logout} from '../../redux/reducers/authReducer'

class Moods extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         username: '',
    //         password: ''
    //     }
    // }

    render() {
        // if(!this.props.username){
        //     return (
        //         <Redirect to="/" />
        //     )
        // }

        return (
            <main>
                <section>
                    <button><img style={{ width: '5rem', height:'5rem' }} src="{}" /></button>
                    <p>User</p>
                    <div>
                        <Link to="/CreatePost"><button>POST</button></Link>
                        <button>DELETE</button>
                        <Link to='/'><button onClick={this.props.logout}>Logout</button></Link>
                        
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

// const mapStateToProps = reduxState => {
//     return {
//         username: reduxState.userReducer.username
       
//     }
// }
// export default connect(mapStateToProps, {
//     logout
// })(Moods)


