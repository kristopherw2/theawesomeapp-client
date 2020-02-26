import React from "react";
import "./Login.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import TokenService from '../services/token-service'
import UserContext from "../UserContext";
import { withRouter } from "react-router-dom"

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

  static contextType = UserContext;

  //trying to implement auth

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const {username, password} = ev.target
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username.value, password.value)
    )

  }

  updateUsername(username) {
    this.setState({username: username});
  }

  updatePassword(password) {
    this.setState({password: password});
  }

  handleSubmitJwtAuth = event => {
    event.preventDefault()
    const {username, password} = event.target
    event.preventDefault();
    if (username.value === "") {
      this.setState({
        usernameValidationMessage: "Username can not be blank",
        idValid: false,
      });
    } else if (password.value === "") {
      this.setState({
        passwordValidationMessage: "Password is required",
        passwordValid: false,
      });
    } else {
      this.setState(
        {
          usernameValidationMessage: "",
          passwordValidationMessage: "",
          idValid: true,
          passwordValid: true,
        }
      );
    }
    //TODO: Will need to change url to live server
    const url = "http://localhost:8000/api/users/login";
    const options = {
      method: "POST",
      body: JSON.stringify({username: username.value, password: password.value}),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, Mamma Mia! There seems to be a problem.");
        }
        return res.json();
      })
      .then(data => {
        if (data.error) {
          throw new Error(`${data.error.message}`);
        }
        TokenService.saveAuthToken(data.authToken)
        this.context.handleUserLogin(data);
        this.setState({
          error: null,
        });
        this.props.history.push('/homepage')
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
          onSubmit={event => this.handleSubmitJwtAuth(event)}
        >
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              required
              type='text'
              className='create_user_control'
              name='username'
              id='username'
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
              required
              type='password'
              className='create_user_control'
              name='password'
              id='password'
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

export default withRouter(Login);
