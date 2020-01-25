import React from "react";
import "../App.css";
import {Component} from "react";
import ResultsDisplay from "./Results Display/ResultsDisplay";

class PastWorkouts extends Component {
  constructor(props){
    super(props);
    this.state = {
      workouts: [
        {
        date: "1-19-20",
        name: "Upper Body",
        sets: 3,
        reps: 10,
        time: "1:00",
        calories: 100
      },
      {
        date: "1-25-20",
        name: "Lower Body",
        sets: 3,
        reps: 10,
        time: "2:00",
        calories: 200
      },
      {
        date: "1-25-20",
        name: "All The Body",
        sets: 3,
        reps: 10,
        time: "3:00",
        calories: 300
      }
    ]
    }

    
  }

  render() {
    return (
      <div>
        <ResultsDisplay newWorkout={this.state.workouts} />
      </div>
    );
  }
}

export default PastWorkouts;
