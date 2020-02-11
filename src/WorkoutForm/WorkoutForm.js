import React from "react";
import "./WorkoutForm.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import UserContext from "../UserContext";
import WorkoutName from "./FormComponents/WorkoutName";
import ExcerciseForm from "./FormComponents/ExerciseForm";


class WorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: null,
      workoutname: "",
      workoutid: "",
    };
  }
  static contextType = UserContext;

  workoutnameChange = letter => {
    this.setState({workoutname: letter});
  };

  handleCreateWorkout(e) {
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
        this.setState({
          workoutname: data.workoutname,
          workoutid: data.workoutid,
          userid: this.context.id,
        });
        console.log(`FROM FETCH: ${this.state.userid}`);
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    return (
      <div className='workout_info'>
        <h3 className='title'>Enter Workout Info</h3>
        <WorkoutName />
        <ExcerciseForm />

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
