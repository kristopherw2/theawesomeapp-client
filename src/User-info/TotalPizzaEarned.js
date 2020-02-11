import React from "react";
import "./TotalPizzaEarned.css";

const slices = (
  <span role='img' aria-label='A slice of pizza'>
    🍕
  </span>
);

function TotalPizzaEarned() {
  return (
    <div className='pizza_dudes_got_30_seconds'>
      <span>Lifetime Slices Earned:</span>
      <p className='grab_some'># {slices}'s</p>
    </div>
  );
}

export default TotalPizzaEarned;
