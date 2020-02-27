import React, { Component } from 'react'
import './Register.css'

class Register extends Component {
    render() {
        return (
            <main>
                <section>
                    <h1>Register.pg</h1>
                    < input placeholder='Email Address' />
                    < input placeholder='Username' />
                    < input placeholder='Password' />
                    <button>REGISTER</button>
                </section>
            </main>
        )
    }
}

export default Register;

