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
      workoutid: "",
    };
  }

  static contextType = UserContext;

  newDisplay = () => this.props.newWorkout;

  handleRedirect = () => {
    this.setState({
      redirect: "/excerciselist",
    });
  };

  handleDelete = () => {
    const url = `http://localhost:8000/api/workouts/${this.context.workoutid}`;
    const options = {
      method: "DELETE",
      body: JSON.stringify({
        workoutid: this.context.workoutid,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, Mamma Mia! There seems to be a problem.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          workoutid: data,
        });
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    console.log(this.state);
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    const newDisplay = this.props.newWorkout;
    const thisNewVariable = newDisplay.map(item => {
      return (
        <div className={`resultsList`}>
          <span onClick={this.handleRedirect}>{item.workoutname}</span>

          <button onClick={() => this.handleDelete()}>Delete</button>

          {/* {item.workoutname} */}
        </div>
      );
    });

    return <div className='results-container'>{thisNewVariable}</div>;
  }
}
export default ResultsDisplay;
