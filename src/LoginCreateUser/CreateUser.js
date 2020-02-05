import React from "react";
import "./CreateUser.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      age: "",
      height: "",
      weight: "",
      error: null,
    };
  }

  updateUsername(username) {
    this.setState({username: username});
  }

  updatePassword(password) {
    this.setState({password: password});
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
          throw new Error('Something went wrong')
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
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
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
            <Link to={"/"}>
              <button type='reset' className='create_user_button'>
                Cancel Order
              </button>
            </Link>

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
