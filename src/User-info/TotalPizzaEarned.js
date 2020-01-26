import React from "react";


const slices = (
  <span role='img' aria-label='A slice of pizza'>
    🍕
  </span>
);

function TotalPizzaEarned() {
  return (
    <div>
      <>
        <h3>Lifetime Slices Earned:</h3>
        <p>#  {slices}'s</p>
      </>
    </div>
  );
}

export default TotalPizzaEarned;
