import React from "react";
import styles from "../Content.module.css";
import Image from "next/image";

import headerPhoto from "../../../public/issue1/about_us_img.png";
import mobilePhoto from "../../../public/issue1/about_us_mobile_img.JPG";

function Article1() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}>
        <div className={styles.img}>
          <Image src={headerPhoto} alt="RANDOM-ASS WEDNESDAYS" priority />
        </div>
        <div className={styles.mobileImg}>
          <Image src={mobilePhoto} alt="RANDOM-ASS WEDNESDAYS" priority />
        </div>
      </div>
      <div className={styles.articleContent}>
        <h3>PHOTO BY KURT SERRANO</h3>
        <div className={styles.articleCredits}>
          <h4>Rico Reyes</h4>
          <h5>AUG-27-2022</h5>
        </div>
        <h1>Random-Ass Wednesday</h1>
        <div className={styles.articleText}>
          <p>Except that we&apos;re trying to get serious.</p>
          <p>
            <a
              href="https://open.spotify.com/track/41vSsnP46DpUZC0YoNyk3U?si=1e73fc5d0d1a4454"
              target="_blank"
              rel="noreferrer"
            >
              <b>
                <i>LISTEN</i>
              </b>
            </a>
          </p>
          <p>
            An update since the last newsletter, what you're looking at is an
            entirely different version of how you first saw us. Observing from a
            different outlook, it only felt natural to think of Random-Ass
            Wednesday, aka RAW, as something with promise, intention, and more
            excellent value.
          </p>
          <p>So allow us to introduce ourselves.</p>
          <h2>What’s RAW?</h2>
          <p>
            <b>We’re an outlet; we’re a break from our full-time jobs,</b>
            focusing mostly on graphic design and writing. The reason why RAW is
            the way it is now is that we believe in collaboration and that our
            interests and crafts always need to be conditioned and worked on. So
            everything coming out of this project is because someone needed an
            outlet to express their craft.
          </p>
          <h2>Why RAW?</h2>
          <p>
            It’s not that deep so I’ll try to keep this short and sweet. Months
            leading up to my birthday, I thought it was going to be on a
            Wednesday, a{" "}
            <b>
              <i>random-ass Wednesday</i>
            </b>
            , only to find out a week before that it landed on a Thursday. So I
            just stuck with it, it sounded cool.
          </p>
          <h2>What’s next?</h2>
          <p>
            <b>
              We haven’t decided yet. And that’s why this season is the most
              exciting part for us.
            </b>
            The possibilities are endless and the last thing we want for us to
            happen is to feel limited as to what we can do and as to what this
            could be. We want to try our best to be non-pretentious. Playful,
            but not grown up; not necessarily mature. So stay tuned to see
            what’s next, because we honestly don’t know what’s coming.
          </p>
          <p>To those who got this far, thank you.</p>
          <p>This is Season 1.</p>
          <br />
          <p>With respect, </p>
          <p>Random Ass Wednesday</p>
        </div>
      </div>
    </div>
  );
}

export default Article1;
