import React from "react";

const UserContext = React.createContext({
  id: "",
  userweight: "",
  workoutid: "",
  userid: "",
  workoutname: "",
  showWorkoutForm: "",
  workoutsArray: [],
  exercisesArray: [],
  workoutIdArray: [],
  exercisename: "",
  sets: "",
  repetitions: "",
  exerciseweight: "",
  time: "",
  caloriesburned: "",
  handleWorkoutsArrayUpdate: () => {},
  handleCreateWorkout: () => {},
  handleUserLogin: () => {},
  handleUserStatsUpdate: () => {},
  handleExercisesArrayUpdate: () => {},
  handDeleteExercise: () => {},
  handleResetWorkoutForm: () => {},
  handleUserWeightUpdate: () => {},
  handleWorkoutIdArrayUpdate: () => {},
  handleLogOut: () => {}
});

export default UserContext;
