import React from "react";
import {Component} from "react";
import ResultsDisplay from "./Results Display/ResultsDisplay";

class PastWorkouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [
        {
          date: "1-19-20",
          name: "Upper Body",
          sets: 3,
          reps: 10,
          time: "1:00",
          calories: 100,
        },
        {
          date: "1-25-20",
          name: "Lower Body",
          sets: 3,
          reps: 10,
          time: "2:00",
          calories: 200,
        },
        {
          date: "1-25-20",
          name: "All The Body",
          sets: 3,
          reps: 10,
          time: "3:00",
          calories: 300,
        },
        {
          date: "1-26-20",
          name: "Legs",
          sets: 3,
          reps: 10,
          time: "4:00",
          calories: 9000,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Previous Workouts</h2>
        <ResultsDisplay newWorkout={this.state.workouts} />
      </div>
    );
  }
}

export default PastWorkouts;
