import React from "react";
import Image from "next/image";
import styles from "../Content.module.css";

import headerPhoto from "../../../public/issue1/about_us_img.png";
import mobilePhoto from "../../../public/issue1/about_us_mobile_img.JPG";

function Article2() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}>
        <div className={styles.img}>
          <Image src={headerPhoto} alt="Cigarette Courtesy" priority />
        </div>
        <div className={styles.mobileImg}>
          <Image src={mobilePhoto} alt="RANDOM-ASS WEDNESDAYS" priority />
        </div>
        <div className={styles.mobileImg}></div>
      </div>
      <div className={styles.articleContent}>
        <h3>PHOTO BY KURT SERRANO</h3>
        <div className={styles.articleCredits}>
          <h4>Rico Reyes</h4>
          <h5>SEP-30-2022</h5>
        </div>
        <h1>Cigarette Courtesy</h1>
        <div className={styles.articleText}>
          <p>
            <a
              href="https://open.spotify.com/track/0HOPZn0IFpZS142x0uClQ0?si=f63195ba1f044687"
              target="_blank"
              rel="noreferrer"
            >
              <b
                className={styles.boldedListen}
                style={{
                  textDecoration: "underline",
                  fontFamily: "HelveticaTitle",
                  fontWeight: 200,
                }}
              >
                To listen to while reading
              </b>
            </a>
          </p>
          <p>Hey you,</p>

          <p>
            Hope all is well with everything going on in your life. I’m
            currently sitting at a local coffee shop after riding my bike mostly
            suffering from the steep incline and decline just to satisfy my
            breakfast sandwich cravings. Though the one I had I’d say was almost
            really good. Like it was good, but it needed acid. Something about a
            milk bun, mayo and a fried egg screams the need for ketchup. On a
            side note, my relationship with ketchup has been a lot better ever
            since I started buying the French’s Ketchup instead of the Heinz
            brand.
          </p>

          <p>
            Anyway, I want to talk about something I’ve realized over the past
            couple weeks. I’ve always been surrounded by people who smoke, vape,
            and everything within its similarities. Maybe it’s the industry that
            I’m in that I’ve seen this more evidently.
          </p>

          <p>
            During dinner service I went out to what we call the{" "}
            <b>“butthole”</b> of the restaurant for my daily protein shake
            intake at around 8PM and met a couple of my colleagues there.
          </p>

          <p className="quote" style={{ marginLeft: 0 }}>
            <i>“Could I bum a stick off you? I left mine inside.”</i>
          </p>

          <p className="quote" style={{ marginLeft: 0 }}>
            <i>“Don’t you owe me, like 15? Anyway, here.”</i>
          </p>

          <p className="quote" style={{ marginLeft: 0 }}>
            <i>“Could I also borrow a light?”</i>
          </p>

          <p>
            I wondered if they sort of had a system of <i>“borrowing”</i>{" "}
            cigarettes since 15 of anything seems like a big ask. Is there some
            sort of unspoken rule that I’m not aware about? Again, I don’t smoke
            or anything so I don’t really know how expensive or inexpensive
            cigarettes could be. I just know that Canada doesn’t sell any
            Marlboro Reds and that it&apos;s a <b>HOT</b> commodity around here.
          </p>

          <p>
            But what was interesting to me is that the people I know that smoke
            are one of the most <i>genuine</i> and <i>generous</i> people that I
            know. I had to ask if they keep tabs on each other regarding how
            many they’ve bummed off or how many were bummed off of them and
            based on this conversation alone, they really don’t. My friend at
            work says that whenever he buys himself a pack, he usually buys an
            extra one just because he knows that people are bound to ask each
            other for a dart. Another friend mentioned that if he feels like
            he’s bummed a couple of darts that equate to a pack, he’ll just buy
            an extra pack to give him. This entire exchange, as mentioned
            earlier, speaks of immense levels of genuineness, comradery,
            community as well as generosity. There’s trust that’s built.
          </p>

          <p>
            I was talking to one of my best friends about this topic of a
            newsletter that I’m currently writing and he seems excited to read
            about it. He mentioned that whenever he smokes in front of someone,
            out of courtesy, he’d immediately offer a cigarette to them unless
            he fully knows that the person he’s with doesn’t smoke. Or if you’re
            his homie, you could take a hit from his last cigarette. Speaking of
            last cigarettes, I learned to <b>NEVER</b> ask for the last
            cigarette since the last one always <i>hits differently.</i>
          </p>

          <p>
            Circling back to the topic of Marlboro Reds, my good friend, Jules,
            asked me to get him some since I was about to fly back home to
            Manila for a quick trip. Without fail, this guy texts me every day
            greeting me with a “Good morning.”{" "}
            <b>
              This was the closest thing I got to remembering what it feels like
              to have a girlfriend.
            </b>{" "}
            I did give him a reel of Reds and in exchange he gave me four
            joints. I never understood why he wanted it so badly until I
            remembered that they don’t sell Marlboro Reds here for reasons I
            thought I knew. I thought it was for the same reason Canada stopped
            selling menthols which was to reduce the number of smokers but it’s
            purely a trademarking issue. I won’t go too crazy into detail, I
            just thought they stopped selling Reds here purely to prevent the
            increase of smokers but really it’s a trademark issue. In summary,
            they still sell Reds, just under the name “Rooftop” which apparently
            still feels like your smoking lights. Think Coca-Cola vs the
            Coca-Cola you’d get in Mexico or in Asia.{" "}
            <b>It hits, but the latter hits slightly better.</b>
          </p>

          <p>
            All I’m trying to say is that we could learn a couple of things from
            those who smoke. From the conversations deriving from it, to
            learning how to be genuine as well as being generous.
          </p>

          <p>Anyway, we’re glad you tuned in.</p>

          <p>With respect,</p>

          <p>Rico, Random-Ass Wednesday</p>
        </div>
      </div>
    </div>
  );
}

export default Article2;
