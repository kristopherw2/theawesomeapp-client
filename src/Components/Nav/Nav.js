import React from "react";
import {Component} from "react";
/* import '../../App.css' */
import "./Nav.css";

const slices = (
  <span role='img' aria-label='A slice of pizza'>
    🍕
  </span>
);

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <h1 id='title'>Fitness {slices}Pizza</h1>
        <span className='subtag'>(in your mouth)</span>
      </div>
    );
  }
}

export default Nav;
