import React from "react";
import "./App.css";
import {Component} from "react";
import Routes from "./Routes";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
