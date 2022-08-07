import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Menu from "../components/Menu/Menu";

import styles from "../styles/Home.module.css";
import seasonStyles from "../components/Content/Content.module.css";

function Archive() {
  return (
    <div className="container">
      <Head>
        <title>RAW</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.mainContainer} ${seasonStyles.season1}`}>
        <Navbar currentArticle={null} />
        <Menu />
      </div>
    </div>
  );
}

export default Archive;
