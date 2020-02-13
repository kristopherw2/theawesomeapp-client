import React from "react";

const UserContext = React.createContext({
  id: "",
  username: "",
  age: "",
  height: "",
  userweight: "",
  workoutid: "",
  userid: "",
  workoutname: "",
  showWorkoutForm: "",
  workoutsArray: [],
  exercisesArray: [],
  exercisename: '',
  sets: '',
  repetitions: '',
  exerciseweight: '',
  time: '', 
  caloriesburned: '',
  handleWorkoutsArrayUpdate: () => {},
  handleCreateWorkout: () => {},
  handleUserLogin: () => {},
  handleUserStatsUpdate: () => {},
  handleExercisesArrayUpdate: () => {}
});

export default UserContext;
