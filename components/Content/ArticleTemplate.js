import React from "react";
import styles from "../../Content.module.css";

function ArticleTemplate() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}>
        <img src="/Season1/Issue1/issue_1_article_1_img.png"></img>
      </div>
      <div className={styles.articleContent}>
        <div className={styles.photoCredits}>PHOTO BY KURT SERRANO</div>
        <div className={styles.articleCredits}>
          <div className={styles.articleAuthor}></div>
          <div className={styles.articleDate}></div>
        </div>
        <div className={styles.articleTitle}></div>
        <div className={styles.articleText}></div>
      </div>
    </div>
  );
}
