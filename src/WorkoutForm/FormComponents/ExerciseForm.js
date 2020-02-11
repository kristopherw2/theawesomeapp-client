import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";

class ExcerciseForm extends Component {
  /* constructor(props) {
    super(props);

    this.state = {

    }
  } */

  handlePostToExercise(e) {
    e.preventDefault();
    const url = `http://localhost:8000/api/exercises/create`;
    const options = {
      method: "POST",
      body: JSON.stringify({
        workoutname: this.state.workoutname,
        userid: this.context.id,
      }),
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
        console.log(data.workoutname);
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
