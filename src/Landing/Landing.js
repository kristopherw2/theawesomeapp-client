import React from "react";
import "./Landing.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className='Landing'>
        <section className='body body-ctn'>
          <span className='body txt-sct-one'>
            Since the dawn of time pizza and fitness have been at odds. Pizza:
            with its heavy amount of grease, bread, cheese, and fat. While
            fitness on the other hand...well honestly if we have to explain it’s
            benefits then it's time to go back to grade school gym class.
          </span>

          <span className='body txt-sct-two'>
            No matter your education level Fitness Pizza aims to join these now
            former adversaries together to help you slide your way into better
            health. 
          </span>

          <span className='body txt-sct-three'>
            It’s simple, really! Tell Fitness pizza how hard, or soft,
            you trained that day. It then bakes all that data into a tangible,
            understandable, result:
          </span>

          <span className='body txt-sct-four' id='cowabunga'>Slices of delicious pizza!</span>

          <span className='body txt-sct-five'>
            Ok, not actually real pizza, but it will tell you, based off your
            calories burned, how many slices you burned off that beautiful body of yours.
            Giving you the power to know, for sure, if you really did earn that
            coveted cheat meal.
          </span>

          <span className='body txt-sct-six'>
            Because, c’mon, isn’t that really all you want to know from a
            fitness tracker?
          </span>


          
        </section>

        <section className='demo-sct-ctn'>
            <h2 className='demo-sct-title'>Demo Login</h2>
            <h3 id='usr-pwd' className='demo-sct-username'>Username: <span className='demo-sct-username-usr'><p>demoUser</p></span></h3>
            <h3 id='usr-pwd'className='demo-sct-password'>Password: <span className="demo-sct-password-pwd"><p>demo1234</p></span></h3>
        </section>

        <section className='btn-ctn-landing'>
          <Link to={"/login"}>
            <button className='login-btn-landing btn'>Login</button>
          </Link>

          <Link to={"/createuser"}>
            <button className='create-btn-landing btn'>Create Account</button>
          </Link>
        </section>
      </div>
    );
  }
}

export default Landing;
