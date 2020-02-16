import React from "react";
import styles from "./NavBar.module.scss";
import { useAuth0 } from "../context/authContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          className={`btn ${styles.authButton}`}
          onClick={() => loginWithRedirect({})}
        >
          Log in / Sign up
        </button>
      )}
      {isAuthenticated && (
        <button className={`btn ${styles.authButton}`} onClick={() => logout()}>
          Log out
        </button>
      )}
      {isAuthenticated && (
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/profile">Profile</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
