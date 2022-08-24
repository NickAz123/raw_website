import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCell}>
        <div>
          <img
            className={styles.footerImg}
            src="/raw-logo.svg"
            alt="photo"
          ></img>
        </div>
        <p className={styles.footerCopyright}>©Random Ass Wednesday 2022</p>
      </div>

      <div className={`${styles.footerMiddle} ${styles.footerCell}`}>
        <div className={styles.footerMiddleArchive}>
          <a href="https://www.randomasswednesday.com/archive"> Archive </a>
        </div>

        <div className={styles.footerMiddleAboutRAW}>
          <a href="https://www.randomasswednesday.com/aboutRAW"> About RAW </a>
        </div>

        <div className={styles.footerSocials}>
          <div className={styles.menuSocialsButtonWhite}>
            <a href="https://www.instagram.com/randomasswednesday">
              <img
                className={styles.footerSocialImg}
                src="/instagram-logo-white.svg"
              ></img>
            </a>
          </div>

          <div className={styles.menuSocialsButtonWhite}>
            <a href="https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV">
              <img
                className={styles.footerSocialImg}
                src="/spotify-logo-white.svg"
              ></img>
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.footerRight} ${styles.footerCell}`}>
        <div>STAY RAW WITH US</div>

        <div className={styles.footerRightPlaceholder}>
          <i>randomasswednesday@gmail.com</i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
