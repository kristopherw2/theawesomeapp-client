import React from "react";
import {Component} from "react";
import {Link} from "react-router-dom";
import UserContext from '../../UserContext'

class ExcerciseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercisename: '',
      sets: '',
      repetitions: '',
      weight: '',
      time: '', 
      caloriesburned: '',
      workoutid: '',
      metValue: 5,
      kgValue: .453592
    }
  }

  static contextType = UserContext;

  //kgValue =0.453592

  updateExerciseName = letter => {
    this.setState({
      exercisename: letter
    })
  };

  updateSets = letter => {
    console.log(typeof letter)
    this.setState({
      sets: letter
    })
  };

  updateRepetitions = letter => {
    this.setState({
      repetitions: letter
    })
  }

  convertMETCaloriesBurned = (e) => {
    e.preventDefault()
    let convertUserWeight = Math.floor(parseInt(this.state.weight, 10)/this.state.kgValue)
    let convertSecondsToMinutes = (parseInt(this.state.time, 10)/60)
    let calculatedValueForCalories = Math.floor(convertSecondsToMinutes * (this.state.metValue * 3.5 * convertUserWeight)/200)
    this.setState(
      {
      caloriesburned: calculatedValueForCalories
    },
    () => {
      this.handlePostToExercise()
    }
    )
  }

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
        console.log(data)
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