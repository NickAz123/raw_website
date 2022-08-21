import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./PageTurner.module.css";

import content from "../Content/Content.json";
import { CollectionsOutlined } from "@mui/icons-material";

function PageTurner(props) {
  const arrayId = props.currentArticle - 1;

  const getNextArticleName = (currentId, next = true, last = false) => {
    if (last) {
      return props.currentIssue["Articles"][currentId]["title"];
    } else {
      if (next) {
        return props.currentIssue["Articles"][currentId + 1]["title"];
      } else {
        return props.currentIssue["Articles"][currentId - 1]["title"];
      }
    }
  };

  const changeArticle = (id, goForward) => {
    if (goForward) {
      props.setCurrentArticle(id + 1);
    } else {
      props.setCurrentArticle(id - 1);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.pageTurnerContainer}>
      <div
        className={`${styles.sideBtn} ${
          props.currentArticle === 1 ? `${styles.btnDisabled}` : ""
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
          {getNextArticleName(arrayId, false, arrayId === 0 ? true : false)}
        </div>
      </div>
      <div
        className={styles.sideBtn}
        onClick={() => changeArticle(props.currentArticle, true)}
      >
        <div className={styles.sideBtnName}>
          {getNextArticleName(arrayId, true)}
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
