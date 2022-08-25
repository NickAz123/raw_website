import React from "react";
import { useState, useRef } from "react";
import { animateBurger } from "../Helpers";
import Link from "next/link";
import Image from "next/image";

import instagramRedLogo from "../../public/social/instagram-logo-red.svg";
import spotifyRedLogo from "../../public/social/spotify-logo-red.svg";
import akonImg from "../../public/akon-logo.svg";

import styles from "./Menu.module.css";

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
          <button
            className={`${styles.menuButton} ${styles.disabled}`}
            disabled
          >
            Archive
          </button>
        </Link>
        <Link href="/about">
          <button className={styles.menuButton}>About</button>
        </Link>
        <div className={styles.menuSocialsContainer}>
          <a
            href="https://www.instagram.com/randomasswednesday/"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.menuSocialsButton}>
              <div className={styles.img}>
                <Image src={instagramRedLogo} alt="Instagram" />
              </div>
            </button>
          </a>

          <a href="">
            <button className={styles.menuSocialsButton}>
              <div className={styles.img}>
                <Image src={spotifyRedLogo} alt="Spotify" />
              </div>
            </button>
          </a>

          <a
            href="https://www.youtube.com/watch?v=XkKsSsTtMYU"
            target="_blank"
            rel="noreferrer"
          >
            <button className={styles.menuSocialsButton}>
              <div className={styles.img}>
                <Image src={akonImg} alt="KONVICT MUZIK" />
              </div>
            </button>
          </a>
        </div>
      </div>
      <div
        className={`${styles.menuBackdrop} ${
          isMenuOpen ? styles.backdropVisible : styles.backdropInvisible
        }`}
        onClick={() => openBurger(isMenuOpen, menu)}
      ></div>
    </>
  );
}

export default Menu;
