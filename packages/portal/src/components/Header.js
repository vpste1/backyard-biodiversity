import React from "react";
import styles from "./Header.module.scss";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="inner-wrapper">
        <div className={styles.container}>
          <Link to="/">
            <img
              alt="backyard-bio-logo"
              className={styles.logo}
              src={require("../assets/images/logo_128.png")}
            />
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
