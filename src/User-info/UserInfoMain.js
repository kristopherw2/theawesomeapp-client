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
        <div className="row" id="topRow">
          <UserStats/>
          <h2 className="bigScreen">Previous Workouts</h2>
          <TotalPizzaEarned />
        </div>
        <PastWorkouts />
        <div className="row" id="bottom-buttons">
          <Link to={"/workoutform"}>
            <button id='add-workout'>Add New Workout</button>
          </Link>
          {/* To be removed after static aproval */}
          <Link to={"/"}>
            <button id='delete-this-button'>Back to landing(Remove)</button>
          </Link>
        </div>
      </div>
    );
  }
}
