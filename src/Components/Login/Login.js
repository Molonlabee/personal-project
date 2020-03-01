import React, { Component } from 'react'
import './Login.css'
import {connect} from  "react-redux"
import {Link, Redirect} from 'react-router-dom'
import {updateState, resetFields, loginUser, getUser, registerUser} from '../../redux/reducers/authReducer'

class Login extends Component {

    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value })
    }

    handleClickLogin = () => {
        this.props
        .loginUser(this.props.username, this.props.password)
        .then(res => {
        console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }
    
    render() {
        console.log(this.props.users)
        // if (this.state.shouldRedirect) {
        // return <Redirect to="/Register" />;
        
        // if(this.props.user.user)
        
        return (
            <main>
                <section>
                    <h1>Login</h1>
                    <div>
                        <p>Username:</p>
                        <input type="text" name='username' onChange={this.handleChange}/>
                        <p>Password:</p>
                        <input type="password" name='password' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <Link to="/Moods"><button onClick={this.handleClickLogin}>Login</button></Link>
                        <Link to="/Register"><button>Register</button></Link>
                    </div>
                </section>
            </main>
           
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.authReducer.username,
        password: state.authReducer.password,
        email: state.authReducer.email
    }}
export default connect(mapStateToProps, {
updateState,
resetFields,
registerUser,
loginUser
})(Login);

