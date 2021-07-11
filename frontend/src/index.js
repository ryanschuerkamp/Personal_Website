import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline>
        <App />
      </CssBaseline>
    </Router>
  </React.StrictMode>,
  document.querySelector("#root")
);
