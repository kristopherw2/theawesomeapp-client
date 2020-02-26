import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import ExercisesList from "./ExercisesList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ExercisesList />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});