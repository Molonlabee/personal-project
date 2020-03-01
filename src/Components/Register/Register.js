import React, { Component } from 'react'
import './Register.css'



class Register extends Component {

    handleChange = e => {
        this.props.updateState({ [e.target.name]: e.target.value})
    }

    handleClickRegister = () => {
        this.props.registerUser(this.props.username, this.props.password, this.props.email).then(() => {
            this.props.loginUser(this.props.username, this.props.password)
        }).catch(error => {
            console.log(error)
        })
    }

    
    render() {
        return (
            <main>
                <section>
                <h1>Register</h1>
                <div>
                    <p>Username:</p>
                    <input type="text" name="username" onChange={this.handleChange}/>
                    <p>Password:</p>
                    <input type="password" name='password' onChange={this.handleChange}/>
                    <p>Profile Email:</p>
                    <input type="text" name='email' onChange={this.handleChange}/>
                </div>
                <button onClick={this.handleClickRegister}>Register</button>
                </section>
            </main>
        )
    }
    // const mapStateToProps = state => {
    //     return {
    //         username: state.authReducer.username,
    //         password: state.authReducer.password,
    //         profile_img: state.authReducer.email
    //     }
}

// export default connect(mapStateToProps, {
//     updateState,
//     resetFields,
//     registerUser,
//     loginUser
// })(Register);

export default Register;
