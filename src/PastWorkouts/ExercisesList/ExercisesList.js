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
        let res = data.map(item => {
          return ({
            exercisename: item.exercisename,
            sets: item.sets,
            repetitions: item.repetitions,
            exerciseweight: item.exerciseweight,
            time: item.time,
            caloriesburned: item.caloriesburned,
          });
        })
        return res.map(item => {
          
        } )
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  /* handleDataMap(){
    const someVar = this.state;
    return someVar.map(item =>{
      
    })
  } */

  render() {
    console.log(this.state);
    
    return (
      <div>
        <h3>Exercise Info</h3>
        {/* {displayExercises} */}
        {/* <div>{displayExercises}</div> */}
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
