import React from "react";

const UserContext = React.createContext({
  username: "",
  userweight: "",
  workoutid: "",
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
  handleLogOut: () => {},
});

export default UserContext;
