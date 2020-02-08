import React from "react";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Route, Switch} from "react-router-dom";
import {Component} from "react";
import Landing from "./Landing/Landing";
import UserInfo from "./User-info/UserInfoMain";
import WorkoutForm from "./WorkoutForm/WorkoutForm";

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/createuser' component={CreateUser} />
          <Route path='/homepage' component={UserInfo} />
          <Route path='/workoutform' component={WorkoutForm} />
          {/*TODO: ADD NOT FOUND ROUTE */}
        </Switch>
      </div>
    );
  }
}

export default Routes;
