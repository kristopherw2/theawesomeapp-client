import React from "react";
import {Component} from "react";
import ResultsDisplay from "./Results Display/ResultsDisplay";
import UserContext from "../UserContext";

class PastWorkouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
    };
  }

  static contextType = UserContext;

  componentDidMount() {
    const url = `https://sheltered-mesa-92095.herokuapp.com/api/workouts/user/${this.context.id}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, Mamma Mia! There seems to be a problem.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.context.handleWorkoutsArrayUpdate(data)
        this.setState({
          workouts: data
        })
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Previous Workouts</h2>
        <ResultsDisplay />
      </div>
    );
  }
}

export default PastWorkouts;
