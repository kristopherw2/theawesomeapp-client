import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import UserStats from "./UserStats";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <UserStats />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});