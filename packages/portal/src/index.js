import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/_index.scss";
import App from "./components/App";
import AppProviders from "./context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

// To work offline and load faster, change unregister() to register()
// https://bit.ly/CRA-PWA
serviceWorker.unregister();
