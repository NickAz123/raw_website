import React from "react";

import Footer from "../Footer/Footer";
import PageTurner from "../PageTurner/PageTurner";
import About from "../About/About";

import Issue1 from "../Content/Issue1/Issue1";

import styles from "./Content.module.css";

function Content(props) {
  return (
    <div className={styles.contentContainer}>
      {props.isAboutOpen === false && props.issue === "issue 1" && (
        <Issue1 articleid={props.currentArticle} />
      )}
      {props.isAboutOpen && <About />}
      <PageTurner
        currentIssue={props.currentIssue}
        currentArticle={props.currentArticle}
        setCurrentArticle={props.setCurrentArticle}
      />
      <Footer
        isAboutOpen={props.isAboutOpen}
        setIsAboutOpen={props.setIsAboutOpen}
      />
    </div>
  );
}

export default Content;
