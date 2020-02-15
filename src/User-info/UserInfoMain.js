import React from "react";
import {Component} from "react";
import PastWorkouts from "../PastWorkouts/PastWorkouts";
import TotalPizzaEarned from "./TotalPizzaEarned";
import UserStats from "./UserStats/UserStats";
import {Link} from "react-router-dom";
import "./UserInfoMain.css";
import UserContext from "../UserContext";

export default class UserInfo extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div className='user-info'>
        <TotalPizzaEarned />
        <UserStats />
        <PastWorkouts />
        <Link to={"/workoutform"}>
          <button>Add New Workout</button>
        </Link>
        <Link to={"/"}>
          <button id='logout-btn'>Logout</button>
        </Link>
      </div>
    );
  }
}
