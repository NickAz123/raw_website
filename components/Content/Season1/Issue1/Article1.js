import React from "react";
import styles from "../../Content.module.css";

function Article1() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}>
        <img src="/Season1/Issue1/issue_1_article_1_img.png"></img>
      </div>
      <div className={styles.articleContent}>
        <div className={styles.photoCredits}>PHOTO BY KURT SERRANO</div>
        <div className={styles.articleCredits}>
          <div className={styles.articleAuthor}>Rico Reyes</div>
          <div className={styles.articleDate}>JUN-27-2022</div>
        </div>
        <div className={styles.articleTitle}>Random Ass Wednesday</div>
        <div className={styles.articleText}>
          <p>Except that we're trying to get serious.</p>
          <p>
            <a
              href="https://open.spotify.com/track/41vSsnP46DpUZC0YoNyk3U?si=1e73fc5d0d1a4454"
              target="_blank"
            >
              <b>
                <i>LISTEN</i>
              </b>
            </a>
          </p>
          <p>
            An update since the last newsletter, what you’re looking at is an
            entirely different version of how you first saw us. Observing from a
            different outlook, it only felt natural to think of Random Ass
            Wednesday, aka RAW, as something with promise, intention, and more
            excellent value.
          </p>
          <p>So allow us to introduce ourselves.</p>
          <p className={styles.articleSubtitle}>Why RAW?</p>
          <p>
            It’s not that deep so I’ll try to keep this short and sweet. Months
            leading up to my birthday, I thought it was going to be on a
            Wednesday, a
            <b>
              <i> random-ass Wednesday</i>
            </b>
            , only to find out a week before that it landed on a Thursday. So I
            just stuck with it, it sounded cool.
          </p>
          <p className={styles.articleSubtitle}>What’s RAW?</p>
          <p>
            <b>We’re an outlet; we’re a break from our full-time jobs,</b>
            focusing mostly on graphic design and writing. The reason why RAW is
            the way it is now is that we believe in collaboration and that our
            interests and crafts always need to be conditioned and worked on. So
            everything coming out of this project is because someone needed an
            outlet to express their craft.
          </p>
          <p className={styles.articleSubtitle}>What’s next?</p>
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
          <p>With respect, </p>
          <p>Random Ass Wednesday</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <div>
          <div>
            <img src="./Raw-Logo.svg" alt="photo"></img>
          </div>
          <p className={styles.footerCopyright}>©Random Ass Wednesday 2022</p>
        </div>

        <div className={styles.footerMiddle}>
          <div className={styles.footerMiddleArchive}>
            <a href="https://www.randomasswednesday.com/archive"> Archive </a>
          </div>

          <div className={styles.footerMiddleAboutRAW}>
            <a href="https://www.randomasswednesday.com/aboutRAW">
              {" "}
              About RAW{" "}
            </a>
          </div>

        <div className={styles.footerSocials}>
          <div className={styles.menuSocialsButtonWhite}>
            <a href="https://www.instagram.com/randomasswednesday">
                <img src="./instagram-logo-white.svg"></img></a>
              </div>

              <div className={styles.menuSocialsButtonWhite}>
                <a href="https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV">
                <img src="./spotify-logo-white.svg"></img></a>
              </div>
        </div>
        </div>

        <div className={styles.footerRight}>
          <div>STAY RAW WITH US</div>

          <div className={styles.footerRightPlaceholder} contenteditable="false"><i>randomasswednesday@gmail.com</i></div>


        </div>

      </footer>
    </div>
  );
}

export default Article1;
