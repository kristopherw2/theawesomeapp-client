import React from "react";
import "../App.css";
import {Component} from "react";
import ResultsDisplay from "./ResultsDisplay";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

class PastWorkouts extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ResultsDisplay />
        <ResultsDisplay />
        <ResultsDisplay />
        <ResultsDisplay />
        <ResultsDisplay />
        <Footer />
      </div>
    );
  }
}

export default PastWorkouts;
