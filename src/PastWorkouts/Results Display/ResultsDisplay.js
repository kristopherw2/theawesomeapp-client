import React from "react";
import "./ResultsDisplay.css";
import {Redirect} from "react-router-dom";
import {Component} from "react";
import UserContext from "../../UserContext";

class ResultsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      workoutsArray: [],
    };
  }

  static contextType = UserContext;

  handleRedirect = () => {
    this.setState({
      redirect: "/excerciselist",
    })
  };

  handleDelete = workoutid => {
    let newWorkoutsArray = [];
    const getWorkoutsArray = this.context.workoutsArray;
    const getWorkoutId = getWorkoutsArray.filter(item => {
      return item.workoutid !== workoutid ? newWorkoutsArray.push(item) : null;
    });

    /* console.log(`getWorkoutId:${getWorkoutId}`);
    console.log(`newWorkoutsArray:${newWorkoutsArray}`); */

    const url = `http://localhost:8000/api/workouts/${workoutid}`;
    /* const url = `http://localhost:8000/api/workouts/`; */
    const options = {
      method: "DELETE",
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, Mamma Mia! There seems to be a problem.");
        }
        return res;
      })
      .then(data => {
        /* console.log(newWorkoutsArray) */
        this.context.handleWorkoutsArrayUpdate(newWorkoutsArray);
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    /* console.log(this.context.workoutsArray); */
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const newDisplay = this.context.workoutsArray;

    const thisNewVariable = newDisplay.map(item => {
      return (
        <div className={`resultsList ${item.workoutid}`}>
          <span onClick={this.handleRedirect}> {item.workoutname} workoutid: {item.workoutid} </span>

          <button onClick={() => this.handleDelete(item.workoutid)}>
            Delete{item.workoutid}
          </button>

          {/* {item.workoutname} */}
        </div>
      );
    });

    return <div className='results-container'>{thisNewVariable}</div>;
  }
}
export default ResultsDisplay;
