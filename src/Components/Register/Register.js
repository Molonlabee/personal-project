import React, { Component } from "react";
import { connect } from "react-redux";
import "./Register.css";
import { Link } from "react-router-dom";
import {
  updateState,
  resetFields,
  loginUser,
  registerUser
} from "../../redux/reducers/authReducer";

class Register extends Component {
  handleChange = e => {
    this.props.updateState({ [e.target.name]: e.target.value });
  };

  handleClickRegister = () => {
    this.props
      .registerUser(this.props.username, this.props.password, this.props.email)
      .then(() => {
        this.props.loginUser(this.props.username, this.props.password);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <main id="main-root">
        <section className="register-container">
          <i class="fas fa-smile-wink"></i>
          <h1>MOOD</h1>
          <div className='input-container'>
            <p>Username:</p>
            <input type="text" name="username" onChange={this.handleChange} placeholder='Enter user name'/>
            <p>Password:</p>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              placeholder='Enter Password'
            />
            <p>Profile Email:</p>
            <input type="text" name="email" onChange={this.handleChange} placeholder='Enter Email'/>
          <div className="btn-container">
            <Link to="/">
              <button>Login</button>
            </Link>
            <Link to="/Moods">
              <button onClick={this.handleClickRegister}>Register</button>
            </Link>
          </div>
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
  };
};
export default connect(mapStateToProps, {
  updateState,
  resetFields,
  registerUser,
  loginUser
})(Register);
