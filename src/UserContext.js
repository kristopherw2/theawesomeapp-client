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
});

export default UserContext;
