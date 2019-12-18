import React from "react";

import LoginForm from "./LoginForm";

import logo from "../assets/images/logo_128.png";

function App() {
  return (
    <div className="App">
      <img src={logo} />
      <LoginForm />
    </div>
  );
}

export default App;
