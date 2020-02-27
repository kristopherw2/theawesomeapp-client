import React from "react";
import "./UserStats.css";
import {Component} from "react";
import UserContext from "../../UserContext";
import TokenService from "../../services/token-service";

class UpdateUserStatsForm extends Component {
  constructor() {
    super();
    this.state = {
      userweight: "",
    };
  }

  static contextType = UserContext;

  componentDidMount() {
    const url = `http://localhost:8000/api/users/userstats`;
    const options = {
      method: "get",
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

  updateUserWeight = letter => {
    this.setState({
      userweight: letter,
    });
  };

  handleUserWeightUpdate = () => {
    const url = `http://localhost:8000/api/users/userstats`;

    const updatedUserStats = {
      userweight: this.state.userweight,
    };

    const options = {
      method: "PATCH",
      body: JSON.stringify(updatedUserStats),
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
      .then(res => {
        this.context.handleUserWeightUpdate({
          userweight: this.state.userweight,
        });
        this.swithUserStatsDisplay();
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    return (
      <ul>
        <li>Username: {this.context.username}</li>
        <li>Age: {this.context.age}</li>
        <li>Height: {this.context.height}</li>
        <li>
          Weight:{" "}
          <input
            type='text'
            onChange={e => this.updateUserWeight(e.target.value)}
          />
        </li>
        <button
          className='upd-weight-btn btn'
          onClick={() => this.handleUserWeightUpdate()}
        >
          Submit Weight
        </button>
      </ul>
    );
  }
}

export default UpdateUserStatsForm;
