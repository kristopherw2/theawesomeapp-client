import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";

class ExcerciseForm extends Component {
  render() {
    return (
      <div>
        <form className='workout_form xercise'>
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

export default ExcerciseForm;
