import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import PastWorkouts from "./PastWorkouts";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <PastWorkouts />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});