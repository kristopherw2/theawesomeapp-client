import React from "react";
import {Component} from "react";
import '../../App.css'

<<<<<<< HEAD
=======
const subTitle = {
  fontFamily: 'Neuton, serif',
  fontSize: 'small',
  marginTop: '-4%'  
}

>>>>>>> static_version
class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <h1>Fitness Pizza</h1>
<<<<<<< HEAD
        <p className='subtag'>(in your mouth)</p>
=======
        <p style={subTitle}>(in your mouth)</p>
>>>>>>> static_version
      </div>
    );
  }
}

export default Nav;
