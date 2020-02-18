import React from "react";
import "./Login.css";
import "../Components/Footer/Footer.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import UserContext from "../UserContext";
import Footer from "../Components/Footer/Footer";

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
        this.context.handleUserLogin(data);
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
      <div className='login-form'>
        <h3 className='login-banner'>Login</h3>
        {serverErrorMessage}

        <form onSubmit={event => this.validateLogin(event)}>
          <section className='login-form-ctn'>
            <div className='login-form-usr usr-pwd'>
              <section>
                <label htmlFor='username'>Username:</label>
              </section>
            </div>

            <div className='login-form-usr-input'>
              <section>
                <input
                  className='login-form-usr-input'
                  type='text'
                  name='username'
                  id='username'
                  onChange={e => this.updateUsername(e.target.value)}
                />

                {!this.state.idValid ? (
                  <div>
                    <p>{this.state.usernameValidationMessage}</p>
                  </div>
                ) : null}
              </section>
            </div>

            <div className='login-form-pwd usr-pwd'>
              <section>
                <label htmlFor='password'>Password:</label>
              </section>
            </div>

            <div className='login-form-pwd-input'>
              <section>
                <input
                  className='login-form-pwd-input'
                  type='password'
                  name='password'
                  id='password'
                  onChange={e => this.updatePassword(e.target.value)}
                />

                {!this.state.passwordValid ? (
                  <div>
                    <p>{this.state.passwordValidationMessage}</p>
                  </div>
                ) : null}
              </section>
            </div>
          </section>

          <section className='login-btn-ctn'>
            <Link to={"/"} className='login-btn-cancel'>
              <button type='reset' className='login-btn-cancel btn'>
                Cancel Order
              </button>
            </Link>

            <button type='submit' className='login-btn-login btn'>
              Login
            </button>
          </section>
          <Footer className='footer' />
        </form>
        
      </div>
    );
  }
}

export default Login;
