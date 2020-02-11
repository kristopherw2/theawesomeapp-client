import React from "react";

const UserContext = React.createContext({
  id: "",
  username: "",
  age: "",
  height: "",
  weight: "",
  handleUserLogin: () => {},
});

export default UserContext;

