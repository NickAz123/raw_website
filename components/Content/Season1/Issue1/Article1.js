import React from "react";
import styles from "../../Content.module.css";

function Article1() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}></div>
      <div className={styles.articleContent}>
        <div className={styles.photoCredits}>PHOTO BY KURT SERRANO</div>
        <div className={styles.articleCredits}>
          <div className={styles.articleAuthor}>Rico Reyes</div>
          <div className={styles.articleDate}>JUN-27-2022</div>
        </div>
      </div>
    </div>
  );
}

export default Article1;
