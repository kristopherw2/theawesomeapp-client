import React, {Component} from "react";
import {Link} from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from '../../UserContext'

class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercisename: "",
      sets: "",
      repetitions: "",
      exerciseweight: "",
      time: "",
      caloriesburned: "",
      exerciseArray: [],
    };
  }

  static contextType = UserContext;

  componentDidMount() {
    console.log(this.context.workoutIdArray)
    const passedInWorkoutId = this.context.workoutIdArray;
    const getWorkout = passedInWorkoutId.map(item => {
      return item.workoutid;
    });
    fetch(`http://localhost:8000/api/exercises/${getWorkout}`, {
      headers: {
        "authorization": `bearer ${TokenService.getAuthToken()}`
      }
    })
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
        this.setState({exerciseArray: data});
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  showList() {
    const mapExerciseArray = this.state.exerciseArray;
    return (
      <ul>
        {mapExerciseArray.map(item => (
          <li key={item.exerciseid}>
            <div>{`Exercise: ${item.exercisename}`}</div>
            <div>{`Reps: ${item.repetitions}`}</div>
            <div>{`Sets: ${item.sets}`}</div>
            <div>{`Weight: ${item.exerciseweight}`}</div>
            <div>{`Time: ${item.time}`}</div>
            <div>{`Calories Burned: ${item.caloriesburned}`}</div>
            <br />
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h3>Exercise Info</h3>
        <span>{this.showList()}</span>
        <form>
          <Link to={"/homepage"} id='btn'>
            <button>Back to Homepage</button>
          </Link>
          <Link to={"/login"} id='btn'>
            <button>Login</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default ExercisesList;
