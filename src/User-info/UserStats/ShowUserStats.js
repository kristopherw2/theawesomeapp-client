import React from "react";
import "./UserStats.css";
import {Component} from "react";
import UserContext from "../../UserContext";
import TokenService from "../../services/token-service";

class ShowerUserStats extends Component {
  static contextType = UserContext;

  componentDidMount() {
    const url = `http://localhost:8000/api/users/userstats`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    };
    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, Mamma Mia! There seems to be a problem.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.context.handleUserStatsUpdate(data);
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  swithUserStatsDisplay = () => {
    this.props.switchForm();
  };

  render() {
    return (
      <>
      <ul>
        <li>
          <span className='usr-stats-txt'>Username:</span>{" "}
          {this.context.username}
        </li>
        <li>
          <span className='usr-stats-txt'>Age:</span> {this.context.age}
        </li>
        <li>
          <span className='usr-stats-txt'>Height:</span> {this.context.height}
        </li>
        <li>
          <span className='usr-stats-txt'>Weight:</span>{" "}
          {this.context.userweight}
        </li>
      </ul>
      <button
          className='upd-weight-btn btn'
          onClick={() => this.swithUserStatsDisplay()}
        >
          Update Weight
        </button>
        </>
    );
  }
}

export default ShowerUserStats;
