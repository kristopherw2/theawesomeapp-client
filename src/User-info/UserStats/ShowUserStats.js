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
        "authorization": `bearer ${TokenService.getAuthToken()}`
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
        this.context.handleUserStatsUpdate(data)
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
    console.log(this.context.username)
    return (
      <ul>
        <li>Username: {this.context.username}</li>
        <li>Age: {this.context.age}</li>
        <li>Height: {this.context.height}</li>
        <li>Weight: {this.context.userweight}</li>
        <button onClick={() => this.swithUserStatsDisplay()}>
          Update Weight
        </button>
      </ul>
    );
  }
}

export default ShowerUserStats;
