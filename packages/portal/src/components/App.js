import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
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
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
