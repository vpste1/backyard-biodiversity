import React from "react";
import { Route } from "wouter";

import LoginForm from "./auth/LoginForm";
import VerifyForm from "./auth/VerifyForm";
import SignUpForm from "./auth/SignUpForm";
import { useAuth } from "../context/authContext";

function App() {
  const { login, verify, signUp } = useAuth();
  return (
    <div className="App">
      <Route path="/login">
        <LoginForm onSubmit={login} />
      </Route>
      <Route path="/sign-up">
        <SignUpForm onSubmit={signUp} />
      </Route>
      <Route path="/verify">
        <VerifyForm onSubmit={verify} />
      </Route>
    </div>
  );
}

export default App;
