import React from "react";
import Image from "next/image";

import rawLogo from "../../public/logos/raw-logo.svg";
import instagramWhiteLogo from "../../public/social/instagram-logo-white.svg";
import spotifyWhiteLogo from "../../public/social/spotify-logo-white.svg";

import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.footerCell}>
        <div className={styles.footerImg}>
          <Image src={rawLogo} alt="RAW Logo" />
        </div>
        <p className={styles.footerCopyright}>©Random Ass Wednesday 2022</p>
      </div>

      <div className={`${styles.footerMiddle} ${styles.footerCell}`}>
        {/* <div className={styles.footerMiddleArchive}>
          <a href="https://www.randomasswednesday.com/archive"> Archive </a>
        </div> */}

        <div className={styles.footerMiddleAboutRAW}>
          <a href="#" onClick={() => props.setIsAboutOpen(true)}>
            About RAW
          </a>
        </div>

        <div className={styles.footerSocials}>
          <div className={styles.menuSocialsButtonWhite}>
            <a href="https://www.instagram.com/randomasswednesday">
              <div className={styles.footerSocialImg}>
                <Image src={instagramWhiteLogo} alt="Instagram" />
              </div>
            </a>
          </div>

          <div className={styles.menuSocialsButtonWhite}>
            <a href="https://open.spotify.com/playlist/5qhIkYo7CoWi3aRlU8OWgs">
              <div className={styles.footerSocialImg}>
                <Image src={spotifyWhiteLogo} alt="Spotify" />
              </div>
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
