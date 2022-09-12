import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./PageTurner.module.css";

function PageTurner(props) {
  const arrayId = props.currentArticle;
  const articlesAr = props.currentIssue["Articles"];
  const totalArticles = articlesAr.length;

  const getNextArticleName = (
    currentId,
    next = true,
    last = false,
    currentIssue
  ) => {
    if (last) {
      return currentIssue["Articles"][currentId]["title"];
    } else {
      if (next) {
        return currentIssue["Articles"]["title"];
      } else {
        return currentIssue["Articles"]["title"];
      }
    }
  };

  const changeArticle = (id, goForward, setCurrentArticle) => {
    if (goForward) {
      setCurrentArticle(id + 1);
    } else {
      setCurrentArticle(id - 1);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.pageTurnerContainer}>
      <div
        className={`${styles.sideBtn} ${
          arrayId === 0 ? `${styles.btnDisabled}` : ""
        }`}
        onClick={() => changeArticle(props.currentArticle, false)}
      >
        <div className={styles.sideBtnArrow}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{
              fontSize: 36,
              color: "black",
            }}
          />
        </div>

        <div className={styles.sideBtnName}>
          {getNextArticleName(
            arrayId,
            false,
            arrayId === 0 ? true : false,
            props.currentIssue
          )}
        </div>
      </div>
      <div
        className={`${styles.sideBtn} ${
          arrayId === totalArticles - 1 ? `${styles.btnDisabled}` : ""
        }`}
        onClick={() =>
          changeArticle(props.currentArticle, true, props.setCurrentArticle)
        }
      >
        <div className={styles.sideBtnName}>
          {getNextArticleName(
            arrayId,
            true,
            arrayId === totalArticles - 1 ? true : false,
            props.currentIssue
          )}
        </div>
        <div className={styles.sideBtnArrow}>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ fontSize: 36, color: "black" }}
          />
        </div>
      </div>
    </div>
  );
}

export default PageTurner;
