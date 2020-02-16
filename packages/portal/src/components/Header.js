import React from "react";
import styles from "./Header.module.scss";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="inner-wrapper">
        <div className={styles.container}>
          <img
            alt="backyard-bio-logo"
            className={styles.logo}
            src={require("../assets/images/logo_128.png")}
          />
          <h1>Backyard Biodiversity</h1>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
