import React from "react";
import "./WorkoutForm.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import WorkoutName from "./FormComponents/WorkoutName";
import UserContext from '../UserContext';
/* import ExcerciseForm from "./FormComponents/ExerciseForm"; */

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
    const renderForms = this.context.showWorkoutForm ? <WorkoutName /> : "";

    console.log(this.context.showWorkoutForm);

    return (
      <div className='workout_info'>
        <h3 className='title'>Enter Workout Info</h3>
        {renderForms}
        {/* <WorkoutName /> */}
        {/* <ExcerciseForm /> */}

        <form>
          <Link to={"/homepage"} id='btn'>
            <button>Go home, you're drunk!</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default WorkoutForm;
