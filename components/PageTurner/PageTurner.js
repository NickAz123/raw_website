import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./PageTurner.module.css";
import content from "../Content/Content.json";
import { StarPurple500Sharp } from "@mui/icons-material";

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
        <div className={styles.sideBtnArrow}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{
              fontSize: 35,
              color: "black",
            }}
          />
        </div>

        <div className={styles.sideBtnName}>Previous</div>
      </div>
      <div
        className={styles.sideBtn}
        onClick={() => changeArticle(props.currentArticle, true)}
      >
        <div className={styles.sideBtnName}>Next</div>
        <div className={styles.sideBtnArrow}>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ fontSize: 35, color: "black" }}
          />
        </div>
      </div>
    </div>
  );
}

export default PageTurner;
