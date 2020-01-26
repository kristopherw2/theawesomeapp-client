import React from 'react'
import '../App.css'
import CompareWorkoutDisplay from './CompareWorkoutDisplay'

function CompareWorkouts() {
  return (
    <div>
      <h3>Previous Two Workouts</h3>
      <CompareWorkoutDisplay />
      <CompareWorkoutDisplay />
    </div>
  )
}

export default CompareWorkouts;