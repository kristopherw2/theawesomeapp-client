import React, { Component } from "react";
import "./TotalPizzaEarned.css";
import UserContext from "../UserContext";



class TotalPizzaEarned extends Component {
    constructor(){
      super()
      this.state = {
        pizzaslices: ""
      }
    }



  static contextType = UserContext

  componentDidMount() {
    const url = `http://localhost:8000/api/exercises/user/${this.context.id}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Oh, Mamma Mia! There seems to be a problem.");
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        if(data.length === 0) {
          this.setState({
            pizzaslices: `You haven't earned any slices better go to the gym and knead that dough!`
          })
        } else {
        let pizzaSlices = Math.floor(data.map(item => item.caloriesburned).reduce((a, b) => a + b)/250)
        this.setState({
          pizzaslices: pizzaSlices
        })
        }
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    const slices = (
      <span id='grab-some' role='img' aria-label='A slice of pizza'>
        🍕
      </span>
    );



  
  return (
    <div className='pizza_dudes_got_30_seconds'>
      <h3>Lifetime Slices Earned:</h3>
      <p >{this.state.pizzaslices} {slices}'s</p>
    </div>
  );
  }
}

export default TotalPizzaEarned;
