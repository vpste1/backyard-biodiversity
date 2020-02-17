import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
import Header from "./Header";
import history from "../utils/history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <div className="content">
          <div className="inner-wrapper">
            <Switch>
              <Route path="/" exact />
              <PrivateRoute path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
