import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <main className="container">
                    <h1>MOOD</h1>
                 
                    <div className="Login">
                        <input placeholder='USER' />
                        <br/>
                        <input placeholder='PASSWORD' />
                        <br/>
                        <button>Login</button>
                        <button>Register</button>
                    </div>
            </main>
        )
    }
}

export default Login;
