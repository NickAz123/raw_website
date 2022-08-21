import React from "react";
import styles from "./Content.module.css";
import Season1 from "./Season1/Season1";
import Footer from "../Footer/Footer";
import PageTurner from "../PageTurner/PageTurner";

function Content(props) {
  return (
    <div className={styles.contentContainer}>
      {props.season === "season 1" && (
        <Season1 issue={props.issue} articleid={props.currentArticle} />
      )}
      <PageTurner
        currentArticle={props.currentArticle}
        setCurrentArticle={props.setCurrentArticle}
      />
      <Footer />
    </div>
  );
}

export default Content;
