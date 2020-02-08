import React from "react";
import "./ResultsDisplay.css";
import {Redirect} from "react-router-dom";
import {Component} from "react";

class ResultsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
    };
  }

  newDisplay = () => this.props.newWorkout;

  handleRedirect = () => {
    this.setState({
      redirect: "/excerciselist",
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    const newDisplay = this.props.newWorkout;
    const thisNewVariable = newDisplay.map(item => {
      return (
        <div className={`resultsList`}>
          <span onClick={this.handleRedirect}>{item.workoutname}</span>

          {/* {item.workoutname} */}
        </div>
      );
    });

    return <div className='results-container'>{thisNewVariable}</div>;
  }
}
export default ResultsDisplay;

//  /excerciselist
