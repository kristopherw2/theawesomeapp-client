import React from "react";
import "./CreateUser.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import ValidationError from "../ValidationError";

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
      error: null,
    };
  }

  updateUsername(username) {
    this.setState({username: {value: username, touched: true}});
  }

  updatePassword(password) {
    this.setState({password: {value: password, touched: true}});
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
    const newUser = {username, password, age, height, weight};

    //TODO: Will need to change url to live server
    const url = "http://localhost:8000/api/users/registration";
    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then(res => {
        if (res.status === 400) {
          throw new Error("Something went wrong");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          username: this.updateUsername(username),
          password: this.updatePassword(password),
          age: this.updateAge(age),
          height: this.updateHeight(height),
          weight: this.updateWeight(weight),
          error: null,
        });
        console.log(this.state);
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  validateUsername() {
    /* console.log(this.state.username); */
    const username = this.state.username.value; /* .trim(); */
    /* console.log(username); */
    if (username.length === 0) {
      return "Username is required";
    } else if (username.length < 6 || username.length > 36) {
      return "Username must be between 6 and 36 characters";
    }
  }

  validatePassword() {
    /* console.log(this.state.password); */
    const password = this.state.password.value; /* .trim(); */
    /* console.log(password); */
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 8 || password.length > 36) {
      return "Password must be between 8 and 36 characters";
    } else if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      return "Password must be contain at least one digit";
    } else if (password.startsWith(" ") || password.endsWith(" ")) {
      return "Password must not start with spaces";
    }
  }


  render() {
    const nameError = this.validateUsername();
    const passwordError = this.validateUsername();
    console.log(nameError);
    console.log(passwordError);
    const serverErrorMessage = this.state.error ? (
      <div className='create_user__error'>{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <div className='create_user'>
        <h3 className='title'>Create Profile</h3>
        <form className='create_form' onSubmit={e => this.handleSubmit(e)}>
          <div className='form-group'>
            {serverErrorMessage}
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              className='create_user_control'
              name='username'
              id='username'
              onChange={e => this.updateUsername(e.target.value)}
            />
            {this.state.username.touched && (
              <ValidationError message={nameError} />
            )}
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
            {this.state.password.touched && (
              <ValidationError message={passwordError} />
            )}
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
            <Link to={"/"}>
              <button type='reset' className='create_user_button'>
                Cancel Order
              </button>
            </Link>

            <button
              type='submit'
              className='create_user_button'
              disabled={this.validateUsername() || this.validatePassword()}
            >
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
