import React from "react";
import "./App.css";
import {Component} from "react";
<<<<<<< HEAD
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Route} from 'react-router-dom';
import Landing from "./Landing/Landing";
=======
import UserInfo from "./User-info/UserInfoMain";


>>>>>>> static_version

class App extends Component {
  render() {
    return (
      <div className='app'>
<<<<<<< HEAD
        <Landing />
        <Route path='/login' component={Login} />
        <Route path='/createuser' component={CreateUser} />
=======
        <UserInfo />
>>>>>>> static_version
      </div>
    );
  }
}

export default App;
