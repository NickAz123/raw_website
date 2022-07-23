import React from "react";
import { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";
import useClickOutside from "../Helpers";

function Navbar({ articles }) {
  const [navDisplay, setNavDisplay] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setNavDisplay(false));

  return (
    <div className={styles.navbar}>
      <div ref={ref} className={styles.issueDiv}>
        <button
          className={
            navDisplay
              ? `${styles.dropdownButton} ${styles.open}`
              : `${styles.dropdownButton} ${styles.closed}`
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
            {articles.map((article) => {
              return (
                <button className={styles.dropdownItemsButton} key={article.id}>
                  {article.title}
                </button>
              );
            })}
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
