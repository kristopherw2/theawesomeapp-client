import React from "react";
import "./WorkoutForm.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import WorkoutName from "./FormComponents/WorkoutName";
/* import ExcerciseForm from "./FormComponents/ExerciseForm"; */
import WorkoutContext from "../WorkoutContext";

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

  static contextType = WorkoutContext;

  handleCreateWorkout = workout => {
    this.setState({
      workoutid: workout.workoutid,
      workoutname: workout.workoutname,
      showWorkoutForm: false,
    });
  };

  render() {


    const renderForms = this.state.showWorkoutForm ? (
      <WorkoutName />
    ) : (
      ""
    );


    return (
      <WorkoutContext.Provider
        value={{
          workoutid: this.state.workoutid,
          userid: this.state.userid,
          workoutname: this.state.workoutname,
          showWorkoutForm: this.state.showWorkoutForm,
        }}
      >
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
      </WorkoutContext.Provider>
    );
  }
}

export default WorkoutForm;
