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
      workoutIdArray: [],
    };
  }

  static contextType = UserContext;

  handleRedirect = workoutid => {
    let workoutIdArray = [];
    this.context.workoutsArray.filter(item => {
      return item.workoutid === workoutid ? workoutIdArray.push(item) : null;
    });
    /* console.log(workoutIdArray); */
    this.setState({
      redirect: "/excerciselist",
      workoutIdArray: workoutIdArray,
    });
  };

  handleDelete = workoutid => {
    let newWorkoutsArray = [];
    this.context.workoutsArray.filter(item => {
      return item.workoutid !== workoutid ? newWorkoutsArray.push(item) : null;
    });
    const url = `http://localhost:8000/api/workouts/${workoutid}`;
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
        this.context.handleWorkoutsArrayUpdate(newWorkoutsArray);
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirect,
            state: this.state.workoutIdArray,
          }}
        />
      );
    }

    const newDisplay = this.context.workoutsArray;

    const thisNewVariable = newDisplay.map((item, index) => {
      return (
        <div key={index} className={`resultsList ${item.workoutid}`}>
          <span onClick={() => this.handleRedirect(item.workoutid)}>
            {item.workoutname} workoutid: {item.workoutid}
          </span>

          <button onClick={() => this.handleDelete(item.workoutid)}>
            Delete{item.workoutid}
          </button>
        </div>
      );
    });

    return <div className='results-container'>{thisNewVariable}</div>;
  }
}
export default ResultsDisplay;
