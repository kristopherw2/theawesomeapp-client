import React from "react";
import "./UserStats.css";
import {Component} from "react";
import UserContext from "../../UserContext";

class UserStats extends Component {
  static contextType = UserContext;

  render() {
    console.log(`Loook it worked !!! ${this.context.id}`);
    console.log(`Loook it worked !!! ${this.context.username}`);
    return (
      <div className='userStats'>
        <ul>
          <li>Username:</li>
          <li>Age:</li>
          <li>Height:</li>
          <li>Weight:</li>
        </ul>
      </div>
    );
  }
}

export default UserStats;
