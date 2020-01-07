import React from "react";
import { AuthProvider } from "./authContext";

function AppProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProviders;
