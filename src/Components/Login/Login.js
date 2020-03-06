import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateState,
  resetFields,
  loginUser,
  getUser,
  registerUser
} from "../../redux/reducers/authReducer";

class Login extends Component {
  handleChange = e => {
    this.props.updateState({ [e.target.name]: e.target.value });
  };

  handleClickLogin = () => {
    //ADDED (this.props.mapStateToProps)
    this.props
      .loginUser(
        this.props.username,
        this.props.password,
        this.props.mapStateToProps
      )
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props.users);
    // if (this.state.shouldRedirect) {
    // return <Redirect to="/Register" />;

    // if(this.props.user.user)

    return (
      <div id='login-root'>
        <div className="login-container">
          <i class="fas fa-smile-wink"></i>
          <h1>MOOD</h1>
          <div className="input-container">
            <input
              type="text"
              name="username"
              placeholder="USERNAME:"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="PASSWORD:"
              onChange={this.handleChange}
            />
          </div>
          <div className="btn-container">
            <Link to="/Moods">
              <button onClick={this.handleClickLogin}>Login</button>
            </Link>
            <Link to="/Register">
              <button>Register</button>
            </Link>
          </div>
        </div>

      </div>
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
  loginUser,
  getUser
})(Login);
