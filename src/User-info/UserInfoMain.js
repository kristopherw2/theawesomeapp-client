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
        <header>
          <TotalPizzaEarned />
          <UserStats />
        </header>
        <PastWorkouts />
        <Link to={"/workoutform"}>
          <button className='add-workout-btn btn'>Add New Workout</button>
        </Link>
        {/* To be removed after static aproval */}
        <Link to={"/"}>
          <button className='logout-btn btn'>Logout</button>
        </Link>
      </div>
    );
  }
}
