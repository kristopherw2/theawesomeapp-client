import React from "react";
import {Component} from "react";
import PastWorkouts from "../PastWorkouts/PastWorkouts";
import TotalPizzaEarned from "./TotalPizzaEarned";
import UserStats from "./UserStats/UserStats";
import {Link} from "react-router-dom";

export default class UserInfo extends Component {
  render() {
    return (
      <div>
        <TotalPizzaEarned />
        <UserStats />
        <PastWorkouts />
        <Link to={"/workoutform"}>
          <button>Add New Workout</button>
        </Link>
      </div>
    );
  }
}
