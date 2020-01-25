import React from "react";
import "./App.css";
import {Component} from "react";
import Landing from "./Landing/Landing";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Landing />
      </div>
    );
  }
}

export default App;
