import React from "react";
import config from "../config/auth.json";
import { Auth0Provider } from "./authContext";
import history from "../utils/history";

// Routes the user after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

function AppProviders({ children }) {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default AppProviders;
