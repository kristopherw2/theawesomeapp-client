import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import ResultsDisplay from "./ResultsDisplay";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ResultsDisplay />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});