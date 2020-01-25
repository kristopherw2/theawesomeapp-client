import React from "react";
import "./App.css";
import {Component} from "react";
import Landing from "./Landing/Landing";
import PastWorkouts from "./PastWorkouts/PastWorkouts";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <PastWorkouts />
      </div>
    );
  }
}

export default App;
