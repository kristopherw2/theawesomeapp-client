import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import CreatedExercises from "./CreatedExercises";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <CreatedExercises />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});