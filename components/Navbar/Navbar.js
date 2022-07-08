import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.issueDiv}>
        <div className={styles.issueText}>S1:I1</div>
        <div className={styles.issueTitle}>"RAW"</div>
      </div>
      <div className={styles.logoDiv}>RAW LOGO</div>
      <div className={styles.menuDiv}>RAW MENU</div>
    </div>
  );
}

export default Navbar;
