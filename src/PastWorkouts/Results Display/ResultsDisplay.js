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
      /* workouts: , */
    };
  }

  static contextType = UserContext;



  /* handleGetWorkoutId() {
    const getWorkoutObject = this.props.newWorkout;
    const getWorkoutId = getWorkoutObject.map(item => {
      return item.workoutid, item.workoutname;
    });
    const obj = getWorkoutId;
    console.log(obj);
  } */

  handleRedirect = () => {
    this.setState({
      redirect: "/excerciselist",
    });
  };

  handleDelete = workoutid => {
    /* const getWorkoutId = workoutid; */
    const url = `http://localhost:8000/api/workouts/`;
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
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    const newDisplay = this.context.workoutsArray;
    console.log(`this is firing from results display ${newDisplay}`)

    

    const thisNewVariable = newDisplay.map(item => {
      return (
        <div className={`resultsList ${item.workoutid}`}>
          <span onClick={this.handleRedirect}>{item.workoutname}</span>

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
