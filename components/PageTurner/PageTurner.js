import React from "react";
import styles from "./PageTurner.module.css";
import content from "../Content/Content.json";

function PageTurner(props) {
  const changeArticle = (id, goForward) => {
    console.log(id);
    if (goForward) {
      props.setCurrentArticle(id + 1);
    } else {
      props.setCurrentArticle(id - 1);
    }

    console.log(props.currentArticle);
  };

  return (
    <div className={styles.pageTurnerContainer}>
      <div
        className={styles.sideBtn}
        onClick={() => changeArticle(props.currentArticle, false)}
      >
        Left
      </div>
      <div
        className={styles.sideBtn}
        onClick={() => changeArticle(props.currentArticle, true)}
      >
        Right
      </div>
    </div>
  );
}

export default PageTurner;
