import React from 'react'
import '../App.css'
import { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <p>Username:</p>
        <input type="text"/>
        <p>Password:</p>
        <input type="text"/>
        <button type="submit">Login</button>
      </div>
    )
  }
}

export default Login;