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
    /* console.log(contextType); */
    /* this.context.handleUserLogin(data); */
    console.log(`Render-username:${this.context.username}`)
    console.log(`Render-username:${this.context.id}`);
    return (
      
      <div className='user-info'>
        <TotalPizzaEarned />
        <UserStats />
        <PastWorkouts />
        <Link to={"/workoutform"}>
          <button>Add New Workout</button>
        </Link>

        {/* To be removed after static aproval */}
        <Link to={"/"}>
          <button id='delete-this-button'>Back to landing(Remove)</button>
        </Link>
      </div>
    );
  }
}
