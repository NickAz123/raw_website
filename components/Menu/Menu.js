import React from "react";
import styles from "./Menu.module.css";
import { useState, useRef } from "react";
import { animateBurger } from "../Helpers";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = useRef(null);

  const openBurger = (state, ref) => {
    setIsMenuOpen(!state);
    animateBurger(state, ref);
  };

  const menuStyle = isMenuOpen
    ? `${styles.menuDiv} ${styles.menuDivOpen}`
    : styles.menuDiv;

  return (
    <>
      <div
        className={menuStyle}
        onClick={() => openBurger(isMenuOpen, menu)}
        ref={menu}
      >
        <div className={`${styles.menuBurger} ${styles.burger1}`}></div>
        <div className={`${styles.menuBurger} ${styles.burger2}`}></div>
      </div>

      {isMenuOpen === true && (
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
