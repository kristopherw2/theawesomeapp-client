import React from "react";
import "./WorkoutForm.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import WorkoutName from "./FormComponents/WorkoutName";
/* import ExcerciseForm from "./FormComponents/ExerciseForm"; */

import UserContext from "../UserContext";

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


  handleCreateWorkout = workout => {
    this.setState({
      workoutid: workout.workoutid,
      workoutname: workout.workoutname,
      showWorkoutForm: false,
    });
  };
    };
  }
  static contextType = UserContext;

  /* updateUserId (){
    this.setState({
      userid:
    })
  } */

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

  /* componentDidMount() {
    this.setState({
      userid: this.context.id,
    });
  } */

  render() {


    const renderForms = this.state.showWorkoutForm ? (
      <WorkoutName />
    ) : (
      ""
    );


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

      <div className='workout_info'>
        <h3 className='title'>Enter Workout Info</h3>
        <>
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
        </>

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

          <Link to={"/homepage"} id='btn'>
            <button>Go home, you're drunk!</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default WorkoutForm;
