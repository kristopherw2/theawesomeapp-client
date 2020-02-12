import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";

class ExcerciseForm extends Component {
  /* constructor(props) {
    super(props);

    this.state = {

    }
  } */

  handlePostToExercise() {
    const { exercisename, sets, repetitions, weight, time, caloriesburned, workoutid } = this.state
    const newExercise = { exercisename, sets, repetitions, weight, time, caloriesburned, workoutid }
    const url = `http://localhost:8000/api/exercises/create`;
    const options = {
      method: "POST",
      body: JSON.stringify(newExercise),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, Mamma Mia! There seems to be a problem.");
        }
        return res.json();
      })
      .then(data => {
        this.context.handleCreateWorkout(data);
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
        <form className='workout_form xercise'>
          <label htmlFor='exercisename'>Exercise Name:</label>
          <input type='text' id='exercisename' />
          <label htmlFor='sets'>Sets:</label>
          <input type='text' id='sets' />
          <label htmlFor='reps'>Reps:</label>
          <input type='text' id='reps'/>
          <label htmlFor='weight'>Weight lbs:</label>
          <input type='number' id='weight' />
          <label htmlFor='time'>TimeSeconds:</label>
          <input type='number' />

          <Link to={"/homepage"} id='btn'>
            <button>Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default ExcerciseForm;
