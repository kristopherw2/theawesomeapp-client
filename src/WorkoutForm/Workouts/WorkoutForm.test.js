import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import WorkoutForm from "./WorkoutForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <WorkoutForm />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});