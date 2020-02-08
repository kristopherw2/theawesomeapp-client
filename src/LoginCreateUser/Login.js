import React from "react";
import "./Login.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      usernameValidationMessage: "",
      passwordValidationMessage: "",
      idValid: true,
      passwordValid: true,
      redirect: null,
    };
  }

  updateUsername(username) {
    this.setState({username: username});
  }

  updatePassword(password) {
    this.setState({password: password});
  }

  validateLogin = event => {
    event.preventDefault();
    if (this.state.username === "") {
      this.setState({
        usernameValidationMessage: "Username can not be blank",
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
    } else {
      this.setState(
        {
          usernameValidationMessage: "",
          passwordValidationMessage: "",
          idValid: true,
          passwordValid: true,
        },
        () => {
          this.handleSubmit();
        }
      );
    }
  };

  handleSubmit() {
    const {username, password} = this.state;
    const newUser = {username, password};
    //TODO: Will need to change url to live server
    const url = "http://localhost:8000/api/users/login";
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
          //TODO: CHANGE ERROR WORDAGE
          throw new Error("Oh, Mamma Mia! That username seems to be taken!");
        }

        this.setState({
          username: this.updateUsername(username),
          password: this.updatePassword(password),
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
      <div className='login'>
        <h3 className='title'>Login</h3>
        {serverErrorMessage}
        <form
          className='login-form'
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

          <Link to={"/"}>
            <button type='reset' className='create_user_button'>
              Cancel Order
            </button>
          </Link>

          <button type='submit' className='create_user_button'>
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
