import React from "react";
import "./Landing.css";
import {Component} from "react";
import {Link} from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className='Landing'>
        <section className='body'>
          <p>
            Since the dawn of time pizza and fitness have been at odds. Pizza,
            with its heavy amount of grease, bread, cheese, and fat. While
            fitness on the other hand...well honestly if we have to explain it’s
            benefits then it may be time to go back to grade school gym class.
            No matter your education level Fitness Pizza aims to join these now
            former adversaries together to help you slide your way into better
            health. It’s simple, really! Tell Fitness pizza how hard, or soft,
            you trained that day. It then bakes all that data into a tangible,
            understandable, result:
          </p>

          <p id='cowabunga'>Slices of delicious pizza</p>

          <p>
            Ok, not actually real pizza, but it will tell you, based off your
            calories burned, how many slices you burned off that body of yours.
            Giving you the power to know, for sure, if you really did earn that
            coveted cheat meal.
          </p>

          <p>
            Because, c’mon, isn’t that really all you want to know from a
            fitness tracker?
          </p>
          <h3>Demo Login:</h3>
          <h4>Username: <p>demoUser</p></h4>
          <h4>Password: <p>demo1234</p></h4>
        </section>

        <section>
          
        </section>

        <section className='btn-ctn'>
          <Link to={"/login"}>
            <button className='btn' id='login'>
              Login
            </button>
          </Link>

          <Link to={"/createuser"}>
            <button className='btn' id='createuser'>
              Create User
            </button>
          </Link>
        </section>
      </div>
    );
  }
}

export default Landing;
