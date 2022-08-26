import React from "react";

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.infoContainer}>
        <h1>About Us</h1>
        <p>
          <b>We're a break from our full-time jobs.</b>
        </p>
        <p>
          Random-Ass Wednesday is a newsletter outlet founded by Rico Reyes and
          Kurt Serrano in collaboration with Nick Azurin, Cassidy Fresnoza and
          Prince Requino.
        </p>
        <p>
          RAW believes that our interests and crafts are always in need of
          conditioning and improvement. Everything you read and see is a result
          of our expressions through this outlet.
        </p>
      </div>
    </div>
  );
}

export default About;
