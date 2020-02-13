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
      exerciseweight: "",
      time: "",
      caloriesburned: "",
    };
  }

  static contextType = UserContext;

  componentDidMount() {
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
        /* console.log(data); */
        return data.map(item => {
          return this.setState({
            exercisename: item.exercisename,
            sets: item.sets,
            repetitions: item.repetitions,
            exerciseweight: item.exerciseweight,
            time: item.time,
            caloriesburned: item.caloriesburned,
          });
        });
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    /* console.log(this.context); */
    /* console.log(`MOTHERFUCKINSTATE: ${this.state}`); */
    const displayExercises = this.state;
    console.log(displayExercises);

    return (
      <div>
        <h3>Exercise Info</h3>

        

        {/* <ul>
          <li>Exercise Name:</li>
          <li>{this.state.exercisename}</li>
          <li>Sets:</li>
          <li>{this.state.sets}</li>
          <li>Reps:</li>
          <li>{this.state.repetitions}</li>
          <li>weight:</li>
          <li>{this.state.weight}</li>
          <li>time:</li>
          <li>{this.state.time}</li>
          <li>cal burned:</li>
          <li>{this.state.caloriesburned}</li>
        </ul> */}

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
