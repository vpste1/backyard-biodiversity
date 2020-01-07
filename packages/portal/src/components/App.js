import React from "react";

import LoginForm from "./LoginForm";
import { useAuth } from "../context/authContext";

function App() {
  const { login } = useAuth();
  return (
    <div className="App">
      <LoginForm onSubmit={login} />
    </div>
  );
}

export default App;
