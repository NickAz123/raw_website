import React from "react";
import { useRef, useState } from "react";
import { useClickOutside } from "../Helpers.js";
import Image from "next/image";

import rawLogo from "../../public/logos/raw-logo.svg";

import styles from "./Navbar.module.css";

function Navbar({
  articles,
  currentArticle,
  setCurrentArticle,
  season,
  issue,
}) {
  const [navDisplay, setNavDisplay] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setNavDisplay(false));

  return (
    <div className={styles.navbar}>
      <div ref={ref} className={styles.issueDiv}>
        {currentArticle !== null && (
          <>
            <button
              className={
                navDisplay
                  ? `${styles.dropdownButton} ${styles.open}`
                  : `${styles.dropdownButton} ${styles.closed}`
              }
              onClick={() => setNavDisplay(!navDisplay)}
            >
              <span>{season.toUpperCase()} - </span>
              <span>
                <b>{issue.toUpperCase()}</b>
              </span>
            </button>
            {navDisplay === true && (
              <div className={styles.dropdownItems}>
                {articles.map((article) => {
                  return (
                    <button
                      className={`${styles.dropdownItemsButton} ${
                        currentArticle === article.id ? styles.bold : ""
                      }`}
                      onClick={() => setCurrentArticle(article.id)}
                      key={article.id}
                    >
                      {article.title}
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
      <div className={styles.logoDiv}>
        <div className={styles.navImg}>
          <Image src={rawLogo} alt="RAW Logo" />
        </div>
      </div>
      <div className={styles.menuFiller}></div>
    </div>
  );
}

export default Navbar;
