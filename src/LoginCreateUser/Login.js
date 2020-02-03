/* import React from "react";
import "./Login.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  updateUsername(username) {
    this.setState({username: username});
  }

  updatePassword(password) {
    this.setState({password: password});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {username, password, age, height, weight} = this.state;
    const newUser = {username, password, age, height, weight};
    //TODO: Will need to change url to live server
    const url = "http://localhost:8000/api/users/login";
    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    }
  }

    
  render() {
    return (
      <div className='login'>
        <h3 className='title'>Login</h3>
        <form className='login-form' onSubmit={e => this.handleSubmit(e)}>
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
          <Link to={"/homepage"} id='btn'>
            <button>Login</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
 */