import React from "react";
import "../App.css";
import {Component} from "react";
import ResultsDisplay from "./ResultsDisplay";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";

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
