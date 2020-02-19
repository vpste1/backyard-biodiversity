import React from "react";
import styles from "./Home.module.scss";

import { ReactComponent as Hero } from "../assets/images/hero.svg";
import { ReactComponent as ColourGrid } from "../assets/images/colourGrid.svg";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.heroBar}>
        <h1>Backyard Biodiversity</h1>
        <Hero />
        <p className={styles.centeredText}>
          Biodiversity is the word used to describe the Earth’s various numbers
          of species, including plants, animals, and microorganisms.
        </p>
      </div>
      <div className={styles.body}>
        <ColourGrid />
        <div className="inner-wrapper">
          <div className={`${styles.textBox} ${styles.left}`}>
            <h2>Why it's important</h2>
            <p>
              Biodiversity facilitates healthy ecosystems, and healthy
              ecosystems increase many of the natural services we rely on;
              including clean water, air, healthy soil and diversity of food
              sources.
              <br />
              <br />
              As city landscapes grow, available green spaces are decreasing -
              biodiversity levels are dropping and many plant and animal species
              that we rely on are losing their homes.
            </p>
          </div>
          <div className={`${styles.textBox} ${styles.right}`}>
            <h2>Backyard biodiversity</h2>
            <p>
              Biodiversity can do great things in your backyard!
              <br />
              <br />
              Urban backyards large or small can help increase levels of
              biodiversity, wildlife species and support healthy ecosystems with
              just a few select garden choices.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
