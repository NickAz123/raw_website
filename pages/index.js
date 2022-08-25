import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import seasonStyles from "../components/Content/Content.module.css";
import content from "../components/Content/Content.json";
import Menu from "../components/Menu/Menu";

export default function Home() {
  const [currentSeason, setCurrentSeason] = useState(content["Season1"]);
  const [currentIssue, setCurrentIssue] = useState(
    currentSeason["Issues"]["Issue1"]
  );
  const [currentArticle, setCurrentArticle] = useState();

  useEffect(() => {
    setCurrentArticle(0);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Random Ass Wednesday</title>
        <meta
          name="description"
          content="A break away from our full-time jobs."
        />
        <link rel="icon" href="/raw-browser-icon.svg" />
      </Head>
      <div
        className={`${styles.mainContainer} ${
          seasonStyles[currentSeason.styles]
        }`}
      >
        <Navbar
          articles={currentIssue.Articles}
          setCurrentArticle={setCurrentArticle}
          season={currentSeason["season"]}
          issue={currentIssue["issue"]}
          currentArticle={currentArticle}
        />
        <Content
          currentIssue={currentIssue}
          season={currentSeason["season"]}
          issue={currentIssue["issue"]}
          currentArticle={currentArticle}
          setCurrentArticle={setCurrentArticle}
        />
        <Menu />
      </div>
    </div>
  );
}
