import React from "react";

const UserContext = React.createContext({
  id: "",
  username: "",
  age: "",
  height: "",
  weight: "",
  workoutid: "",
  userid: "",
  workoutname: "",
  showWorkoutForm: "",
  workoutsArray: [],
  exercisename: '',
  sets: '',
  repetitions: '',
  weight: '',
  time: '', 
  caloriesburned: '',
  handleWorkoutsArrayUpdate: () => {},
  handleCreateWorkout: () => {},
  handleUserLogin: () => {},
  handleUserStatsUpdate: () => {},
});

export default UserContext;
