import React from "react";
import "./Landing.css";
import "../Components/Footer/Footer.css";
import {Component} from "react";
import {Link} from "react-router-dom";
import TokenService from "../services/token-service";

class Landing extends Component {
  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.props.history.push("/homepage");
    }
  }
  render() {
    return (
      <div className='landing'>
        <section className='body-ctn body'>
          <span className='body-sct-one body'>
            Since the dawn of time pizza and fitness have been at odds. Pizza:
            with its heavy amount of grease, bread, cheese, and fat. While
            fitness on the other hand...well honestly if we have to explain it’s
            benefits then it's time to go back to grade school gym class.
          </span>

          <span className='body-sct-two body'>
            No matter your education level Fitness Pizza aims to join these now
            former adversaries together to help you slice your way into better
            health.
          </span>

          <span className='body-sct-three body'>
            It’s simple, really! Tell Fitness pizza how hard, or soft, you
            trained that day. It then bakes all that data into a tangible,
            understandable, result:
          </span>

          <span className='body-sct-four body' id='cowabunga'>
            Slices of delicious pizza!
          </span>

          <span className='body-sct-five body'>
            Ok, not actually real pizza, but it will tell you, based off your
            calories burned, how many slices you burned off that beautiful body
            of yours. Giving you the power to know, for sure, if you really did
            earn that coveted cheat meal.
          </span>

          <span className='body-sct-six body'>
            Because, c’mon, isn’t that really all you want to know from a
            fitness tracker?
          </span>
        </section>

        <section className='demo-sct-ctn dmo'>
          <h2 className='demo-sct-title'>Demo Login</h2>
          <h3 id='usr-pwd' className='demo-sct-username'>
            Username:
          </h3>
          <span className='demo-sct-username-usr'>demoUser</span>

          <h3 id='usr-pwd1' className='demo-sct-password'>
            Password:
          </h3>
          <span className='demo-sct-password-pwd'>demo1234</span>
        </section>

        <section className='landing-btn-ctn'>
          <Link to={"/login"} className='landing-btn-ctn-login'>
            <button className='landing-btn-ctn-login btn'>Login</button>
          </Link>

          <Link to={"/createuser"} className='landing-btn-ctn-create'>
            <button className='landing-btn-ctn-create btn'>Register</button>
          </Link>
        </section>
      </div>
    );
  }
}

export default Landing;
