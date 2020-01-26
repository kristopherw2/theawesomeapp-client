import React from "react";
import "../App.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class CreateUser extends Component {
  render() {
    return (
      <div>
        <h3>Create User</h3>
        <form className='create_user'>
          <p>Username:</p>
          <input type='text' />
          <p>Password:</p>
          <input type='text' />

          <Link to={"/homepage"}>
            <button>Let's go!</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateUser;
