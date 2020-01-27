import React from "react";
import "./Login.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className='login'>
        <h3 className='title'>Login</h3>
        <form className='form'>
          <p>Username:</p>
          <input type='text' />
          <p>Password:</p>
          <input type='text' />
          <Link to={"/homepage"} id='btn'>
            <button>Login</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
