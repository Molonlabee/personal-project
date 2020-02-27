import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    render() {
        return (
            <main>
                <section>
                    <h1>LOGIN PAGE</h1>
                    <input placeholder='Username' />
                    <input placeholder='Password' />
                    <div>
                        <button>LOGIN</button>
                        <button>REGISTER</button>
                    </div>
                </section>
            </main>
        )
    }
}

export default Login;

