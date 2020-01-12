import React from "react";
import AmplifyService from "../services/amplifyService";
const amplifyService = AmplifyService.getInstance();
const AuthContext = React.createContext();

function AuthProvider(props) {
  const login = form => amplifyService.signIn(form);
  const signUp = form =>
    amplifyService.signUp({
      username: form.username,
      password: form.password,
      attributes: { given_name: form.givenName, family_name: form.familyName }
    });
  const verify = (username, code) =>
    amplifyService.confirmSignUp(username, code);

  const logout = () => amplifyService.signOut();

  return (
    <AuthContext.Provider
      value={{ login, signUp, logout, verify }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
