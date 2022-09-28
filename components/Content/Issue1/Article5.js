import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import Image from "next/image";

import headerPhoto from "../../../public/issue1/issue_1_article_5_img.JPG";

import styles from "../Content.module.css";

function Article5() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}>
        <div className={styles.img}>
          <Image
            src={headerPhoto}
            alt="A Reminder About The Seasons"
            priority
          />
        </div>
      </div>
      <div className={styles.articleContent}>
        <h3>PHOTO BY KURT SERRANO</h3>
        <div className={styles.articleCredits}>
          <h4>Rico Reyes</h4>
          <h5>SEP-30-2022</h5>
        </div>
        <h1>A Reminder About The Seasons</h1>
        <div className={styles.articleText}>
          <p>
            <i>
              “I had a dream last night where I left my car in the middle of an
              empty intersection to drop some food at a friend’s place. I got
              distracted, stayed a bit longer at their place doing some other
              random shit just trying to get most of the things I needed to do
              done until a truck was about to hit my car.{" "}
              <b>
                Reminder: don’t get distracted, don’t forget the reason why I
                stopped there in the first place.”
              </b>
            </i>
          </p>
          <p>
            <b>Taken from my notes dated August 3, 2022</b>
          </p>
          <p>
            Reading it now, it’s not that deep. But reading it then, I remember
            having a slight scare. Overcomplicating things, catastrophizing at
            the slightest inconvenience and maybe accepting that where I’m at
            right now is the be-all-end-all.
          </p>
          <p>
            I’m at a part of my life where I’ve been craving for something slow,
            for softer moments. Nothing too harsh on my body,{" "}
            <b>something gentle.</b>
            Some space to take a moment,{" "}
            <b>breathe everything in and exhale everything out.</b> Moments that
            would meet me with care. <b>Quiet, but not silent.</b>
          </p>
          <p>
            And if you’re still reading this, feel free to stay.{" "}
            <b>This one’s for us.</b>
          </p>
          <p>
            I try to constantly remind myself that it’s okay to slow down and
            enjoy the season that I’m currently in. I’m right where I need to be
            at this moment.
          </p>
          <p>
            And while there’s an obvious line between being passive and
            proactive, I don’t think that being passive is a bad thing entirely.
            Sometimes you’ve got to let life run its course. Like anything, we
            grow as we learn. So with the highest of highs comes the lowest of
            lows, and I’m just trying to anticipate the drop a little bit more.
            You know, just in case.
          </p>
          <p>
            The point is,{" "}
            <b>anticipate the change and embrace it when it comes.</b>
            But look forward to the best that is yet to come, whatever that may
            be. Seasons may change, yes. Just like our interests, passions, or
            ambitions. But purpose and happiness can be found even in the
            unknown, and that’s the exciting part.
          </p>
          <p>Wishing you joy and a peaceful mind.</p>
          <p>
            <b>We love you.</b>
          </p>
          <p>Rico, Random-Ass Wednesday</p>
        </div>
      </div>
    </div>
  );
}

export default Article5;
