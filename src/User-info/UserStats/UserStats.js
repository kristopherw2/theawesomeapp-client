import React from "react";
import "./UserStats.css";

function UserStats(props) {
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

export default UserStats;
