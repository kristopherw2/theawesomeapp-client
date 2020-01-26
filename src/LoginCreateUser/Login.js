import React from "react";
import "../App.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <p>Username:</p>
        <input type='text' />
        <p>Password:</p>
        <input type='text' />
        <Link to={"/homepage"}>
          <button>Login</button>
        </Link>
      </div>
    );
  }
}

export default Login;
