import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import seasonStyles from "../components/Content/Content.module.css";
import content from "../components/Content/Content.json";

export default function Home() {
  const [currentSeason, setCurrentSeason] = useState(content["Season1"]);
  const [currentIssue, setCurrentIssue] = useState(
    currentSeason["Issues"]["Issue1"]
  );
  const [currentArticle, setCurrentArticle] = useState();

  useEffect(() => {
    setCurrentArticle(1);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>RAW</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
        />
        <Content
          season={currentSeason["season"]}
          issue={currentIssue["issue"]}
          articleid={currentArticle}
        />
      </div>
    </div>
  );
}
