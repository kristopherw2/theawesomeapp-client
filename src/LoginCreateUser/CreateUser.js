import React from "react";
import "../App.css";
import {Component} from "react";

class CreateUser extends Component {
  render() {
    return (
      <div>
        <h3>Create User</h3>
        <form className='create_user' onSubmit={}>
          <p>Username:</p>
          <input type='text' />
          <p>Password:</p>
          <input type='text' />
          <button type='submit'>Let's go!</button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
