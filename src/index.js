import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import App from "./components/App";

ReactDOM.render(
  <CssBaseline>
    <App />
  </CssBaseline>,
  document.querySelector("#root")
);
