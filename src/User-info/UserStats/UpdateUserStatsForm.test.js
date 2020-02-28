import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import UpdateUserStatsForm from "./UpdateUserStatsForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <UpdateUserStatsForm />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});