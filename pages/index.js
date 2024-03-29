import { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import content from "../components/Content/Content.json";
import Menu from "../components/Menu/Menu";

import seasonStyles from "../components/Content/Content.module.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [currentIssue, setCurrentIssue] = useState(content["Issue1"]);
  const [currentArticle, setCurrentArticle] = useState(1);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Random Ass Wednesday</title>
        <meta
          name="description"
          content="A break away from our full-time jobs."
        />
        <link rel="icon" href="/raw-favicon.svg" />
      </Head>
      <div className={`${styles.mainContainer} ${seasonStyles.seasonStyles}`}>
        <Navbar
          articles={currentIssue.Articles}
          setCurrentArticle={setCurrentArticle}
          currentArticle={currentArticle}
          setIsAboutOpen={setIsAboutOpen}
          isAboutOpen={isAboutOpen}
        />
        <Content
          currentIssue={currentIssue}
          issue={currentIssue["issue"]}
          currentArticle={currentArticle}
          setCurrentArticle={setCurrentArticle}
          isAboutOpen={isAboutOpen}
          setIsAboutOpen={setIsAboutOpen}
        />
        <Menu setIsAboutOpen={setIsAboutOpen} />
      </div>
    </div>
  );
}
