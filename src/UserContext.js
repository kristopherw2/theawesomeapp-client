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
});

export default UserContext;

/*
TODO:
/api/users/:user_id

Pull the ID from context

Use component did mount

manipulate the json data */
