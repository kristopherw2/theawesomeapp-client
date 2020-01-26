import React from "react";
import "./App.css";
import {Component} from "react";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Route} from 'react-router-dom';
import Landing from "./Landing/Landing";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Landing />
        <Route path='/login' component={Login} />
        <Route path='/createuser' component={CreateUser} />
      </div>
    );
  }
}

export default App;
