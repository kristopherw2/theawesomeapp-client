import React from "react";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Route} from "react-router-dom";
import {Component} from "react";
import Landing from "./Landing/Landing";
import UserInfo from "./User-info/UserInfoMain";

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/createuser' component={CreateUser} />
        <Route path='/homepage' component={UserInfo} />
        {/* <Route path='/' component={} /> */}
      </div>
    );
  }
}

export default Routes;
