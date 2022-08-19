import React from "react";
import styles from "./Content.module.css";
import Season1 from "./Season1/Season1";
import Footer from "../Footer/Footer";

function Content({ season, issue, articleid }) {
  return (
    <>
      <div className={styles.contentContainer}>
        {
          (season = "season 1" && (
            <Season1 issue={issue} articleid={articleid} />
          ))
        }
        <Footer />
      </div>
    </>
  );
}

export default Content;
