import React from "react";
import styles from "../../Content.module.css";

function Article2() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}>
        <img src="/Season1/Issue1/issue_1_article_1_img.png"></img>
      </div>
      <div className={styles.articleContent}>
        <div className={styles.photoCredits}>PHOTO BY KURT SERRANO</div>
        <div className={styles.articleCredits}>
          <div className={styles.articleAuthor}>Cassidy Fresnoza</div>
          <div className={styles.articleDate}>AUGUST-15-2022</div>
        </div>
        <div className={styles.articleTitle}>I Hate Orange</div>
        <div className={styles.articleText}>
          <p>Hi there</p>
        </div>
      </div>
    </div>
  );
}

export default Article2;
