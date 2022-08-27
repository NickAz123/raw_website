import React from "react";
import Image from "next/image";

import headerPhoto from "../../public/issue1/about_us_img.png";
import mobilePhoto from "../../public/issue1/about_us_mobile_img.JPG";

import aboutStyles from "./About.module.css";
import styles from "../Content/Content.module.css";

function About() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}>
        <div className={styles.img}>
          <Image src={headerPhoto} alt="RANDOM ASS WEDNESDAYS" priority></Image>
        </div>
        <div className={styles.mobileImg}>
          <Image src={mobilePhoto} alt="RANDOM ASS WEDNESDAYS" priority />
        </div>
      </div>
      <div className={styles.articleContent}>
        <h1>About Us</h1>
        <p>
          <b>We&apos;re a break from our full-time jobs.</b>
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
