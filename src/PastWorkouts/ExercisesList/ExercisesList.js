import React, {Component} from "react";
import {Link} from "react-router-dom";
import UserContext from "../../UserContext";

class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercisename: "",
      sets: "",
      repetitions: "",
      weight: "",
      time: "",
      caloriesburned: "",
    };
  }

  static contextType = UserContext;

  /* updateExerciseName(exercisename) {
    this.setState({exercisename: exercisename});
  }

  updateSets(sets) {
    this.setState({sets: sets});
  }

  updateRepetitions(repetitions) {
    this.setState({repetitions: repetitions});
  }

  updateWeight(weight) {
    this.setState({weight: weight});
  }

  updateTime(time) {
    this.setState({time: time});
  }

  updateCaloriesBurned(caloriesburned) {
    this.setState({caloriesburned: caloriesburned});
  } */

  componentDidMount() {
    /* const url = `http://localhost:8000/api/exercises/4`; */
    /* const {exercisename, sets, repetitions, weight, time, caloriesburned} =this.state
    const displayData = {caloriesburned, time, weight, repetitions, sets, exercisename} */

    fetch(`http://localhost:8000/api/exercises/4`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, Mamma Mia! There seems to be a problem.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw new Error("Oh, Mamma Mia! That username seems to be taken!");
        }
        
      })
      
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    /* console.log(data); */
    console.log(this.state);
    return (
      <div>
        <h3>Exercise Info</h3>
        <ul>
          <li>Exercise Name</li>
          <li>Sets</li>
          <li>Reps</li>
          <li>weight</li>
          <li>time</li>
          <li>cal burned</li>
        </ul>

        <form>
          <Link to={"/login"} id='btn'>
            <button>Go home, you're drunk!</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default ExercisesList;
