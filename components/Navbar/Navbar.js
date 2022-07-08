import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.issueDiv}>
        <div className={styles.issueText}>
          <span>S1</span>:<span>I1</span>
        </div>
        <div className={styles.issueTitle}>"RAW"</div>
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
