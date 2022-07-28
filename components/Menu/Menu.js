import React from "react";
import styles from "./Menu.module.css";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.menuDiv}>
        <button
          className={styles.menuTrigger}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>
      {isMenuOpen && (
        <>
          <div className={styles.menuContainer}>
            <div className={styles.menuButton}>Issue 1</div>
            <div className={styles.menuButton}>Archive</div>
            <div className={styles.menuButton}>About</div>
            <div className={styles.menuSocialsContainer}>
              <div className={styles.menuSocialsButton}>
                <img src="./instagram-logo-red.svg"></img>
              </div>
              <div className={styles.menuSocialsButton}>
                <img src="./spotify-logo-red.svg"></img>
              </div>
              <div className={styles.menuSocialsButton}>
                <img src="./akon-logo.svg"></img>
              </div>
            </div>
          </div>
          <div className={styles.menuBackdrop}></div>
        </>
      )}
    </>
  );
}

export default Menu;
