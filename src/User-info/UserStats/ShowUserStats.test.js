import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import ShowerUserStats from "./ShowUserStats";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <ShowerUserStats />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});