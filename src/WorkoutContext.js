import React from "react";

const WorkoutContext = React.createContext({
  workoutid: "",
  userid: "",
  workoutname: "",
  handleCreateWorkout: () => {},
});

export default WorkoutContext;
