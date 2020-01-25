import React from "react";
import "./App.css";
import {Component} from "react";
import Nav from './Components/Nav/Nav'
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />
        <Route path='/login' component={Login} />
        <Route path='/createuser' component={CreateUser} />
      </div>
    );
  }
}

export default App;
