import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import WorkoutName from "./WorkoutName";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <WorkoutName />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});