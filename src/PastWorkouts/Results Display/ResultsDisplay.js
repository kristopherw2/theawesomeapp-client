import React from "react"
import "./ResultsDisplay.css"

function ResultsDisplay(props) {

  //console.log(props)
  const newDisplay = props.newWorkout
  //console.log(newDisplay);
  const thisNewVariable = newDisplay.map((item, index) => {
  console.log(item.date)
    return (  <ul className="resultsList">
              <li key={index}>Date: {item.date}</li>
              <li key={index+1}>Name: {item.name}</li>
              <li key={index+2} >Sets: {item.sets}</li>
              <li key={index+3}>Reps: {item.reps}</li>
              <li key={index+4}>Time: {item.time}</li>
              <li key={index+5}>Calories: {item.calories}</li>
              </ul>
              )
    })

    return (
      <div>
        {thisNewVariable}
      </div>
    )
}
export default ResultsDisplay;