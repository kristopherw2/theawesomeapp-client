import React from "react";

const UserContext = React.createContext({
  username: "",
  id: "",
  age: "",
  height: "",
  weight: "",
  handleUserLogin: () => {},
});

export default UserContext
