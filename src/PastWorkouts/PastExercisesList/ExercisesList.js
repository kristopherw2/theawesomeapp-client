import React, {Component} from "react";
import {Link} from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../UserContext";
import "./ExercisesList.css";

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
    const passedInWorkoutId = this.context.workoutIdArray;
    const getWorkout = passedInWorkoutId.map(item => {
      return item.workoutid;
    });
    fetch(`http://localhost:8000/api/exercises/${getWorkout}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
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
      <ul className='exercise-info-list'>
        {mapExerciseArray.map(item => (
          <li key={item.exerciseid}>
            <div>
              <span className='exercise-info-li'>Exercise: </span>
              {`${item.exercisename}`}
            </div>
            <div>
              <span className='exercise-info-li'>Reps: </span>
              {`${item.repetitions}`}
            </div>
            <div>
              <span className='exercise-info-li'>Sets: </span>
              {`${item.sets}`}
            </div>
            <div>
              <span className='exercise-info-li'>Weight: </span>
              {`${item.exerciseweight}`}
            </div>
            <div>
              <span className='exercise-info-li'>Time: </span>
              {`${item.time}`}
            </div>
            <div>
              <span className='exercise-info-li'>Calories Burned: </span>
              {`${item.caloriesburned}`}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='exercise-info-ctn'>
        <h3 className='exercise-info-title'>Exercise Info</h3>
        <span className='exercise-info-list-ctn'>{this.showList()}</span>
        <form>
          <Link to={"/homepage"}>
            <button className='home-btn btn'>Back to Homepage</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default ExercisesList;
