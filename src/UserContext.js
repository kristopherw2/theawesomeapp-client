import React from "react";

const UserContext = React.createContext({
  id: "",
  username: "",
  age: "",
  height: "",
  weight: "",
  handleUserLogin: () => {},
  handleUserStatsUpdate: () => {},
  workoutid: "",
  userid: "",
  workoutname: "",
  handleCreateWorkout: () => {},
});

export default UserContext;

