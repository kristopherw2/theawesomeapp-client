import React from "react";
import {Component} from "react";

class WorkoutName extends Component {
  render() {
    return (
      <div>
        <form
          className='workout_form name'
          onSubmit={e => this.handleCreateWorkout(e)}
        >
          <label htmlFor='username'>Workout Name:</label>
          <input
            type='text'
            id='workout_form_input name'
            onChange={e => this.workoutnameChange(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default WorkoutName;
