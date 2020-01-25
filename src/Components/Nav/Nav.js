import React from "react";
import {Component} from "react";
import '../../App.css'

const subTitle = {
  fontFamily: 'Neuton, serif',
  fontSize: 'small',
  marginTop: '-4%'  
}

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <h1>Fitness Pizza</h1>
        <p style={subTitle}>(in your mouth)</p>
      </div>
    );
  }
}

export default Nav;
