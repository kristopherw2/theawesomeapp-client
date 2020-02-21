import React from "react";
import "./UserStats.css";
import {Component} from "react";
import UserContext from "../../UserContext";

class UpdateUserStatsForm extends Component {
  constructor() {
    super();
    this.state = {
      userweight: "",
    };
  }

  static contextType = UserContext;

  componentDidMount() {
    const url = `http://localhost:8000/api/users/${this.context.id}`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, Mamma Mia! There seems to be a problem.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          id: data.id,
          username: data.username,
          age: data.age,
          height: data.height,
          userweight: data.userweight,
        });
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
    const url = `http://localhost:8000/api/users/${this.context.id}`;

    const updatedUserStats = {
      id: this.context.id,
      username: this.context.username,
      userweight: this.state.userweight,
    };

    const options = {
      method: "PATCH",
      body: JSON.stringify(updatedUserStats),
      headers: {
        "Content-Type": "application/json",
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
        <li>Username: {this.state.username}</li>
        <li>Age: {this.state.age}</li>
        <li>Height: {this.state.height}</li>
        <li>
          Weight:{" "}
          <input
            type='text'
            onChange={e => this.updateUserWeight(e.target.value)}
          />
        </li>
        <button onClick={() => this.handleUserWeightUpdate()}>
          Submit Weight
        </button>
      </ul>
    );
  }
}

export default UpdateUserStatsForm;
