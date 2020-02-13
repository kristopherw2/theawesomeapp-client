import React from "react";
import "./UserStats.css";
import {Component} from "react";
import UserContext from "../../UserContext";

class UserStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      username: "",
      age: "",
      height: "",
      weight: "",
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
          weight: data.weight
        })
        this.context.handleUserStatsUpdate(data)
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    
    return (
      <div className='userStats'>
        <ul>
          <li>Username: {this.state.username}</li>
          <li>Age: {this.state.age}</li>
          <li>Height: {this.state.height}</li>
          <li>Weight: {this.state.weight}</li>
        </ul>
      </div>
    );
  }
}

export default UserStats;
