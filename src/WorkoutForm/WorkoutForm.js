import React from "react";
import "./WorkoutForm.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class WorkoutForm extends Component {
  render() {
    return (
      <div className='workout_info'>
        <h3 className='title'>Enter Workout Info</h3>
        <form className='workout_form'>
          <p>Exercise:</p>
          <input type='text' />
          <p>Sets:</p>
          <input type='text' />
          <p>Reps:</p>
          <input type='text' />
          <p>Weight:</p>
          <input type='text' />
          <p>Time:</p>
          <input type='text' />
          <Link to={"/homepage"} id='btn'>
            <button>Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default WorkoutForm;
