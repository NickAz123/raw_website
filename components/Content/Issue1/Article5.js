import React from "react";
import styles from "../Content.module.css";

function Article5() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}>
        <img src="/Season1/Issue1/issue_1_article_1_img.png"></img>
      </div>
      <div className={styles.articleContent}>
        <div className={styles.photoCredits}>PHOTO BY KURT SERRANO</div>
        <div className={styles.articleCredits}>
          <div className={styles.articleAuthor}>Rico Reyes</div>
          <div className={styles.articleDate}>JUL-27-2022</div>
        </div>
        <div className={styles.articleTitle}>A Reminder About Seasons</div>
        <div className={styles.articleText}>
          <p>
            <a
              href="https://open.spotify.com/track/0HOPZn0IFpZS142x0uClQ0?si=f63195ba1f044687"
              target="_blank"
              rel="noreferrer"
            >
              <b>
                <i>LISTEN</i>
              </b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Article5;
