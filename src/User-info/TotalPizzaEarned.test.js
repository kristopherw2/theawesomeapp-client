import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import TotalPizzaEarned from "./TotalPizzaEarned";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <TotalPizzaEarned />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});