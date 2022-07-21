import React from "react";
import { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import useClickOutside from "../Helpers";

function Navbar() {
  const [navDisplay, setNavDisplay] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setNavDisplay(false));

  return (
    <div className={styles.navbar}>
      <div ref={ref} className={styles.issueDiv}>
        <button
          className={
            navDisplay ? styles.dropdownButtonOpen : styles.dropdownButton
          }
          onClick={() => setNavDisplay(!navDisplay)}
        >
          <span>SEASON 1 - </span>
          <span>
            <b>ISSUE 1</b>
          </span>
        </button>
        {navDisplay === true && (
          <div className={styles.dropdownItems}>
            <button className={styles.dropdownItemsButton}>Example 1</button>
            <button className={styles.dropdownItemsButton}>Example 2</button>
            <button className={styles.dropdownItemsButton}>Example 3</button>
          </div>
        )}
      </div>
      <div className={styles.logoDiv}>
        {/* <img src="../public/raw-logo.svg" /> */}
      </div>
      <div className={styles.menuDiv}>
        <button className={styles.menuButton} type="button">
          <MenuIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
