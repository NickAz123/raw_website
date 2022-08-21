import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <div>
          <img src="./Raw-Logo.svg" alt="photo"></img>
        </div>
        <p className={styles.footerCopyright}>©Random Ass Wednesday 2022</p>
      </div>

      <div className={styles.footerMiddle}>
        <div className={styles.footerMiddleArchive}>
          <a href="https://www.randomasswednesday.com/archive"> Archive </a>
        </div>

        <div className={styles.footerMiddleAboutRAW}>
          <a href="https://www.randomasswednesday.com/aboutRAW"> About RAW </a>
        </div>

        <div className={styles.footerSocials}>
          <div className={styles.menuSocialsButtonWhite}>
            <a href="https://www.instagram.com/randomasswednesday">
              <img src="./instagram-logo-white.svg"></img>
            </a>
          </div>

          <div className={styles.menuSocialsButtonWhite}>
            <a href="https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV">
              <img src="./spotify-logo-white.svg"></img>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerRight}>
        <div>STAY RAW WITH US</div>

        <div className={styles.footerRightPlaceholder}>
          <i>randomasswednesday@gmail.com</i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
