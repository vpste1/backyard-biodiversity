import React from "react";
import NavBar from "./NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
import history from "../utils/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
