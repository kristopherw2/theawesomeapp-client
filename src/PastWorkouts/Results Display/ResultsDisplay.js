import React from "react";
import "./ResultsDisplay.css";
import {Redirect, withRouter} from "react-router-dom";
import {Component} from "react";
import UserContext from "../../UserContext";
import TokenService from "../../services/token-service";

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
    this.props.history.push("/exerciselist");
    this.context.handleWorkoutIdArrayUpdate(workoutIdArray);
  };

  handleDelete = workoutid => {
    let newWorkoutsArray = [];
    this.context.workoutsArray.filter(item => {
      return item.workoutid !== workoutid ? newWorkoutsArray.push(item) : null;
    });
    const url = `http://localhost:8000/api/workouts/${workoutid}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
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

    const thisNewVariable = newDisplay
      .map((item, index) => {
        return (
          <div key={index} className={`results-list ${item.workoutid}`}>
            <span
              className='workout-name'
              onClick={() => this.handleRedirect(item.workoutid)}
            >
              {item.workoutname}
            </span>

            <button
              className='delete-btn btn'
              onClick={() => this.handleDelete(item.workoutid)}
            >
              Delete
            </button>
          </div>
        );
      })
      .reverse();

    return <div className='results-ctn'>{thisNewVariable}</div>;
  }
}
export default withRouter(ResultsDisplay);
