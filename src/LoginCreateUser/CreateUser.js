import React from "react";
import "./CreateUser.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: {
        value: "",
        touched: false,
      },
      password: {
        value: "",
        touched: false,
      },
      age: "",
      height: "",
      weight: "",
    };
  }

  updateUsername(username) {
    this.setState({username: {value: username, touched: true}});
  }

  updatePassword(password) {
    this.setState({
      password: {value: password, touched: true},
    });
  }

  updateAge(age) {
    this.setState({age: age});
  }

  updateHeight(height) {
    this.setState({height: height});
  }

  updateWeight(weight) {
    this.setState({weight: weight});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {username, password, age, height, weight} = this.state;
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Age:", age);
    console.log("Height:", height);
    console.log("Weight:", weight);
  }

  /*   validateUsername() {
    const username = this.state.username.value.trim();
    if (username.length === 0) {
      return "Username is required";
    } else if (username.length < 6 || username.length > 20) {
      return "Username must be between 6 and 20 characters";
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 8 || password.length > 36) {
      return "Password must be between 8 and 36 characters long";
    } else if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      return "Password must contain at least one number";
    }
  } */

  render() {
    return (
      <div className='create_user'>
        <h3 className='title'>Create Profile</h3>
        <form className='create_form' onSubmit={e => this.handleSubmit(e)}>
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              className='create_user_control'
              name='username'
              id='username'
              onChange={e => this.updateUsername(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              className='create_user_control'
              name='password'
              id='password'
              onChange={e => this.updatePassword(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='age'>Age:</label>
            <input
              type='text'
              className='create_user_control'
              name='age'
              id='age'
              onChange={e => this.updateAge(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='height'>Height:</label>
            <input
              type='text'
              className='create_user_control'
              name='height'
              id='height'
              onChange={e => this.updateHeight(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='weight'>Weight:</label>
            <input
              type='text'
              className='create_user_control'
              name='weight'
              id='weight'
              onChange={e => this.updateWeight(e.target.value)}
            />
          </div>

          <div className='create_user_button_group'>
            <button type='reset' className='create_user_button'>
              Cancel Order
            </button>
            <button type='submit' className='create_user_button'>
              Toss in the Oven
            </button>
          </div>

          <Link to={"/homepage"} id='btn'>
            <button>Let's go!</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CreateUser;
