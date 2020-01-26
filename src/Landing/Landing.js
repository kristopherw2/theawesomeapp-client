import React from "react";
import "./Landing.css";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import {Component} from "react";
import {Link} from "react-router-dom";

class Landing extends Component {
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return (
      <div className='Landing'>
        <Nav />
        <section>
          <p>
            Since the dawn of time pizza and fitness have been at odds. Pizza
            with its heavy amounts of grease, bread, cheese, and fat. While
            fitness on the other hand...well honestly if we have to explain it’s
            benefits then it may be time to go back to grade school gym class.
            No matter your education level Fitness Pizza aims to join these now
            former adversaries together to help you slide your way into better
            health. It’s simple, really! Tell Fitness pizza how hard, or soft,
            you trained that day. It then bakes all that data into a tangible,
            understandable, result:
          </p>

          <p>
            <b>Slices of delicious pizza</b>.
          </p>

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

          <Link to={"/login"}>
            <button onClick={e => this.handleClick(e)}>Login</button>
          </Link>

          <Link to={"/createuser"}>
            <button onClick={e => this.handleClick(e)}>Create User</button>
          </Link>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Landing;
