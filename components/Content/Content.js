import React from "react";

import Season1 from "./Season1/Season1";
import Footer from "../Footer/Footer";
import PageTurner from "../PageTurner/PageTurner";
import About from "../About/About";

import styles from "./Content.module.css";

function Content(props) {
  return (
    <div className={styles.contentContainer}>
      {props.season === "season 1" && props.isAboutOpen === false && (
        <Season1 issue={props.issue} articleid={props.currentArticle} />
      )}
      {props.isAboutOpen && <About />}
      {/* <PageTurner
        currentIssue={props.currentIssue}
        currentArticle={props.currentArticle}
        setCurrentArticle={props.setCurrentArticle}
      /> */}
      <Footer />
    </div>
  );
}

export default Content;
