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
        console.log(` This is in the .then of userStats.js ${data.age}`)
        /* this.context.handleUserLogin(data); */
        this.context.handleUserStats(data)
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    console.log(this.context.age)
    /* console.log(`Loook it worked !!! ${this.context.id}`);
    console.log(`Loook it worked !!! ${this.context.username}`); */
    return (
      <div className='userStats'>
        <ul>
          <li>Username: {this.context.username}</li>
          <li>Age: {this.context.age}</li>
          <li>Height: {this.context.height}</li>
          <li>Weight: {this.context.weight}</li>
        </ul>
      </div>
    );
  }
}

export default UserStats;
