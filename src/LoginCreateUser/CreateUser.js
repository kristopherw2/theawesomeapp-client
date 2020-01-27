import React from "react";
import "./CreateUser.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class CreateUser extends Component {
  render() {
    return (
      <div className='create_user'>
        <h3 className='title'>Create User</h3>
        <form className='create_form'>
          <p>Username:</p>
          <input type='text' />
          <p>Password:</p>
          <input type='text' />
          <p>Age:</p>
          <input type='text' />
          <p>Height:</p>
          <input type='text' />
          <Link to={"/homepage"} id='btn'>
            <button>Let's go!</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateUser;
