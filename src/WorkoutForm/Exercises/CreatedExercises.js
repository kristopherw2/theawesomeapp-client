import React from "react";
import {Component} from "react";
import UserContext from "../../UserContext";

class CreatedExercises extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercisesArray: [],
    };
  }

  static contextType = UserContext;

  handleDelete = exerciseid => {
    let newExercisesArray = [];
    this.context.exercisesArray.filter(item => {
      return item.exerciseid !== exerciseid
        ? newExercisesArray.push(item)
        : null;
    });
    const url = `http://localhost:8000/api/exercises/${exerciseid}`;
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
        this.context.handleDeleteExercise(newExercisesArray);
        this.setState({
          workoutsArray: data,
        });
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    const newExerciseDisplay = this.context.exercisesArray;

    const exercisesArray = newExerciseDisplay.map((item, index) => {
      return (
        <ul className='exercise-list'>
          <li key={index}> <span className='exercise-list-label'>Name:</span> {item.exercisename}</li>
          <li key={index + 1}><span className='exercise-list-label'>Sets:</span> {item.sets}</li>
          <li key={index + 2}><span className='exercise-list-label'>Weight lbs:</span> {item.exerciseweight} total</li>
          <li key={index + 3}><span className='exercise-list-label'>Time:</span> {item.time} seconds</li>
          <li key={index + 4}><span className='exercise-list-label'>Calories:</span> {item.caloriesburned}</li>
          <button className="delete-btn btn" key={index + 5} onClick={() => this.handleDelete(item.exerciseid)}>
            Delete
          </button>
        </ul>
      );
    });

    return <div className='create-exercise-results-container'>{exercisesArray}</div>;
  }
}

export default CreatedExercises;
