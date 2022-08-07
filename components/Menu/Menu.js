import React from "react";
import styles from "./Menu.module.css";
import { useState, useRef } from "react";
import { animateBurger } from "../Helpers";
import Link from "next/link";

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

      <div
        className={`${styles.menuContainer} ${
          isMenuOpen ? styles.open : styles.closed
        }`}
      >
        <Link href="/">
          <button className={styles.menuButton}>Issue 1</button>
        </Link>
        <Link href="/archive">
          <button className={styles.menuButton}>Archive</button>
        </Link>
        <Link href="/about">
          <button className={styles.menuButton}>About</button>
        </Link>
        <div className={styles.menuSocialsContainer}>
          <Link href="https://www.instagram.com/randomasswednesday/">
            <button className={styles.menuSocialsButton}>
              <img src="./instagram-logo-red.svg"></img>
            </button>
          </Link>

          <Link href="">
            <button className={styles.menuSocialsButton}>
              <img src="./spotify-logo-red.svg"></img>
            </button>
          </Link>

          <Link href="">
            <button className={styles.menuSocialsButton}>
              <img src="./akon-logo.svg"></img>
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.menuBackdrop} ${
          isMenuOpen ? styles.backdropVisible : styles.backdropInvisible
        }`}
      ></div>
    </>
  );
}

export default Menu;
