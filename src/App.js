import React from "react";
import "./App.css";
import {Component} from "react";
//import PastWorkouts from "./PastWorkouts/PastWorkouts";
import UserInfo from './User-info/UserInfoMain'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <UserInfo />
      </div>
    );
  }
}

export default App;
