import React from "react";
import "./App.css";
import {Component} from "react";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Landing from "./Landing/Landing";
import UserInfo from "./User-info/UserInfoMain";
import WorkoutForm from "./WorkoutForm/WorkoutForm";
import Login from "./LoginCreateUser/Login";
import CreateUser from "./LoginCreateUser/CreateUser";
import {Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />
          <Route exact path='/' component={Landing} />
          <Route path='/login' component={Login} />
          <Route path='/createuser' component={CreateUser} />
          <Route path='/homepage' component={UserInfo} />
          <Route path='/workoutform' component={WorkoutForm} />
        <Footer />
      </div>
    );
  }
}

export default App;
