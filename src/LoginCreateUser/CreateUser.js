import React from "react";
import "./CreateUser.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";

/* import {withRouter} from "react-router-dom"; */

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      age: null,
      height: null,
      weight: null,
      error: null,
      usernameValidationMessage: "",
      passwordValidationMessage: "",
      generalValidationMessage: "",
      idValid: true,
      passwordValid: true,
      generalValid: true,
      redirect: null,
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

  validateLogin = event => {
    event.preventDefault();
    if (this.state.username === "") {
      this.setState({
        usernameValidationMessage: "Username can not be blank",
        idValid: false,
      });
    } else if (
      this.state.username.length < 6 ||
      this.state.username.length > 20
    ) {
      this.setState({
        usernameValidationMessage:
          "Username must be longer than 6 characters and less than 36",
        idValid: false,
      });
    } else if (this.state.password === "") {
      this.setState({
        passwordValidationMessage: "Password is required",
        passwordValid: false,
      });
    } else if (
      this.state.password.length < 8 ||
      this.state.password.length > 36
    ) {
      this.setState({
        passwordValidationMessage:
          "Password must be between 8 and 36 characters",
        passwordValid: false,
      });
    } else if (
      this.state.password.startsWith(" ") ||
      this.state.password.endsWith(" ")
    ) {
      this.setState({
        passwordValidationMessage: "Password Must not start or end with spaces",
        passwordValid: false,
      });
    } else if (
      !this.state.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    ) {
      this.setState({
        passwordValidationMessage:
          "Password must contain letters and at least one digit",
        passwordValid: false,
      });
    } else if (this.state.age == null) {
      this.setState({
        generalValidationMessage: "Age is required",
        generalValid: false,
      });
    } else if (this.state.height == null) {
      this.setState({
        generalValidationMessage: "Height is required",
        generalValid: false,
      });
    } else if (this.state.weight == null) {
      this.setState({
        generalValidationMessage: "Weight is required",
        generalValid: false,
      });
    } else {
      this.setState(
        {
          usernameValidationMessage: "",
          passwordValidationMessage: "",
          generalValidationMessage: "",
          idValid: true,
          passwordValid: true,
          generalValid: true,
        },
        () => {
          this.handleSubmit();
        }
      );
    }
  };

  /* if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    } */

  handleSubmit() {
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
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw new Error("Oh, Mamma Mia! That username seems to be taken!")
        }

        this.setState({
          username: this.updateUsername(username),
          password: this.updatePassword(password),
          age: this.updateAge(age),
          height: this.updateHeight(height),
          weight: this.updateWeight(weight),
          error: null,
          redirect: "/homepage",
        });
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  usernameChange = letter => {
    this.setState({username: letter});
  };

  passwordChange = letter => {
    this.setState({password: letter});
  };

  ageChange = letter => {
    this.setState({age: letter});
  };

  heightChange = letter => {
    this.setState({height: letter});
  };

  weightChange = letter => {
    this.setState({
      weight: letter,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const serverErrorMessage = this.state.error ? (
      <div className='create_user__error'>{this.state.error}</div>
    ) : (
      ""
    );

    return (
      <div className='create_user'>
        <h3 className='title'>Create Profile</h3>
        {serverErrorMessage}
        <form
          className='create_form'
          onSubmit={event => this.validateLogin(event)}
        >
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              className='create_user_control'
              name='username'
              id='username'
              onChange={e => this.updateUsername(e.target.value)}
            />
            {!this.state.idValid ? (
              <div>
                <p>{this.state.usernameValidationMessage}</p>
              </div>
            ) : null}
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
            {!this.state.passwordValid ? (
              <div>
                <p>{this.state.passwordValidationMessage}</p>
              </div>
            ) : null}
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
          {!this.state.generalValid ? (
            <div>
              <p>{this.state.generalValidationMessage}</p>
            </div>
          ) : null}

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

export default /* withRouter(CreateUser) */ CreateUser;
