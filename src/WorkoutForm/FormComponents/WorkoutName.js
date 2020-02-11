import React from "react";
import {Component} from "react";
import UserContext from "../../UserContext";
import WorkoutContext from "../../WorkoutContext";

class WorkoutName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutname: "",
    };
  }

  static contextType = UserContext;
  static contextType = WorkoutContext;

  workoutnameChange = letter => {
    this.setState({workoutname: letter});
  };

  handlePostToWorkout(e) {
    e.preventDefault();
    const url = `http://localhost:8000/api/workouts`;
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
        if (!data.ok) {
          throw new Error(`${data.error.message}`);
        }
        this.context.handleCreateWorkout(data);
        /* this.setState({
          workoutname: data.workoutname,
          workoutid: data.workoutid,
          userid: this.context.id,
        }); */
        /* console.log(`FROM FETCH: ${this.state.userid}`); */
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    console.log(`USER ID: ${this.context.id}`);
    console.log(`STAAAAATE: ${this.state}`);
    return (
      <div>
        <form
          className='workout_form name'
          onSubmit={e => this.handlePostToWorkout(e)}
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
