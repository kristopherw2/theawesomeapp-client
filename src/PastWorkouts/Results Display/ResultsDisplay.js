import React from "react";
import "./ResultsDisplay.css";

function ResultsDisplay(props) {
  const newDisplay = props.newWorkout;

  const thisNewVariable = newDisplay.map((item, index) => {
    return (
      <ul className={`resultsList resultsList-${index}`}>
        <li key={index}>Date: {item.date}</li>
        <li key={index + 1}>Name: {item.name}</li>
        <li key={index + 2}>Sets: {item.sets}</li>
        <li key={index + 3}>Reps: {item.reps}</li>
        <li key={index + 4}>Time: {item.time}</li>
        <li key={index + 5}>Calories: {item.calories}</li>
      </ul>
    );
  });

  return <div className='results-container'>{thisNewVariable}</div>;
}
export default ResultsDisplay;
