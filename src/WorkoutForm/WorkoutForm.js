import React from "react";
import "../App.css";
import {Link} from "react-router-dom";

function WorkoutForm() {
  return (
    <div>
      <h3>Enter Workout Info</h3>
      <form>
        <p>Exercise</p>
        <input type='text' />
        <p>Sets</p>
        <input type='text' />
        <p>Reps</p>
        <input type='text' />
        <p>Weight</p>
        <input type='text' />
        <p>Time</p>
        <input type='text' />

        <Link to={"/homepage"}>
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default WorkoutForm;
