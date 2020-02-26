import React from "react";
import "./WorkoutForm.css";
import {Component} from "react";
import WorkoutName from "./WorkoutName";
import UserContext from "../../UserContext";
import ExcerciseForm from "../Exercises/ExerciseForm";

class WorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: null,
      workoutname: "",
      workoutid: "",
      showWorkoutForm: true,
    };
  }
  static contextType = UserContext;

  render() {
    const renderForms = this.context.showWorkoutForm ? (
      <WorkoutName />
    ) : (
      <ExcerciseForm />
    );

    return (
      <div className='workout_info'>
        <h3 className='title'>Enter Workout Info</h3>
        {renderForms}
      </div>
    );
  }
}

export default WorkoutForm;
