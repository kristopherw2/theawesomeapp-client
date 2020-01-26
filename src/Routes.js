import React from "react";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Router, Route} from "react-router-dom";
import {Component} from "react";
import Landing from "./Landing/Landing";

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/createuser' component={CreateUser} />
      </div>
    );
  }
}

export default Routes;
