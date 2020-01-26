import React from "react";
import "./App.css";
import {Component} from "react";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Router, Route} from 'react-router-dom';
import Landing from "./Landing/Landing";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Routes />
      </div>
    );
  }
}

export default App;
