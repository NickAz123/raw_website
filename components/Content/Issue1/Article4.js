import React from "react";
import Image from "next/image";

import headerPhoto from "../../../public/issue1/issue_1_article_4_img.JPG";
import mobilePhoto from "../../../public/issue1/issue_1_article_4_mobile_img.JPG";

import styles from "../Content.module.css";

function Article4() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleImgContainer}>
        <div className={styles.img}>
          <Image src={headerPhoto} alt="I Hate Orange" priority />
        </div>
        <div className={styles.mobileImg}>
          <Image src={mobilePhoto} alt="I Hate Orange" priority />
        </div>
      </div>
      <div className={styles.articleContent}>
        <h3>PHOTO BY KURT SERRANO</h3>
        <div className={styles.articleCredits}>
          <h4>Cassidy Fresnoza</h4>
          <h5>SEP-30-2022</h5>
        </div>
        <h1>I Hate Orange</h1>
        <div className={styles.articleText}>
          <p>
            <a
              href="https://open.spotify.com/track/4ydabrob4581SkaRuuN9YT"
              target="_blank"
              rel="noreferrer"
            >
              <b className="listen" style={{ color: "#FF7A00" }}>
                <i>LISTEN</i>
              </b>
            </a>
          </p>
          <p>Hi there,</p>
          <p>
            My name is Cassidy, but almost everyone that knows me will call me
            Cass.
          </p>

          <p>
            The difference in the way I feel when someone calls me by either
            name is extremely stark. I’ve noticed that they carry a tone of
            their own that somehow shapes the atmosphere between us and what
            direction our conversation is going to go.
          </p>

          <p>
            Hearing “Cassidy” makes me sit a little straighter, clench my teeth,
            and blink less. While hearing “Cass” on the other hand, it instantly
            connects me to the person. It’s like they’re tapping into a space
            not everyone knows about. I settle into a place of comfort and
            quietly exhale, then I become more of an open book.
          </p>

          <p>
            To be honest with you, writing this was a struggle for me in the
            beginning. But today I am sitting outside under trees with the
            breeze grazing my face, all while sipping on a matcha latte (my
            fave). It’s crazy to me how quick a fresh atmosphere can change you.
            It’s such a beautiful feeling that is able to produce some of the
            healthiest human responses. This very feeling happens to be one of
            the reasons I took up Interior Design.
          </p>

          <p>
            Just a couple things to note about me while reading this is that I
            absolutely{" "}
            <span style={{ color: "#FF7A00" }}> hate the color orange.</span>{" "}
            Also, that I put lots of weight on the environment I constantly find
            myself in (which might explain why I love hearing my nickname so
            much more), not only because of what it looks and feels like, but
            because of the effects it has on me and those around me.
          </p>

          <p>
            For example, Have you ever noticed that when someone is in a well
            lit room, they tend to lean towards the better decision? Or when
            you’re outside in the blazing 104 degree thick of the summer, you
            start to become more irritated? You all of the sudden get
            uncomfortable and want to change your environment. You start to get
            annoyed and start to look for shade and a cooler place to go to.
            Have you ever felt this? If your answer is yes, I feel you. And if
            your answer is a no, then this means you like being put in
            uncomfortable situations, potentially a weirdo, or maybe you’re just
            patient. Ever since I could remember, the correlation between one’s
            response and their tangible environment has been a consistent
            observation of mine.
          </p>

          <p>
            Many may think about pretty picture frames or rugs upon hearing
            “Interior Design”, but let me tell you, It is WAY more than that.
            One thing I hope to clear up while you read this is the extreme
            contrast between what <i>Interior Decoration</i> and{" "}
            <i>Interior Designing </i>
            really is. A definition that I came across from the NCIDQ (The
            Council for Interior Design Qualification) put it perfectly.
          </p>

          <p className={styles.articleQuote}>
            “Interior design is the art and science of understanding people’s
            behavior to create functional spaces within a building. The
            decoration is the furnishing or adorning of a space with fashionable
            or beautiful things*. In short, interior designers may decorate, but
            decorators do not design”.
          </p>

          <p>
            When I tell you my brain blew up when I first read that, it blew.
            up. I was never able to articulate the right words to capture how
            different they were from each other. I began to think that these
            differences were things that I only saw myself. I began to believe
            that maybe I was too opinionated and too stubborn to want to admit
            that maybe they were just the same. It made me realize that your
            experiences and thoughts can become valid through only one encounter
            with something that makes sense to you. TBH, in a sense, that’s also
            what interior design is to me.{" "}
            <b>
              An encounter, or even multiple encounters with a space that makes
              sense to YOU.
            </b>
          </p>

          <p>
            One of my favorite things I love about Interior designing (how many
            times can I say interior design in one article?) is that it isn’t
            just about the look of a place. It’s about the people, their
            conversations, personality type, what their favorite food is, and
            the list goes on. It makes sense to them. I’ve observed that one’s
            space could just be a reflection of who they are and who (and what)
            they love. Whether or not they prefer the designs from Living Spaces
            over Eames is just a bi-product of how they choose to express
            themselves from the inside out.
          </p>

          <p>
            I could ramble on and on about how much I love the concept of
            designing as a whole but let me just leave you with something I’ve
            learned overtime;{" "}
          </p>

          <p>
            <b>Don’t be afraid to create a space that is meaningful to you.</b>{" "}
            Clean your kitchen, play your favorite songs (or just leave it
            quiet), rearrange your room or go for a nice walk, it’s all up to
            you. These tasks are so fun and bring waves of refreshment, but the
            real weight of creating space for a life that is meaningful to you
            all comes down to <b>your very own consumption</b>; who and what you
            listen to, surround yourself with, and invest in.{" "}
            <b>Be intentional</b> with the things you let in your home and in
            your mind. It all starts from there.{" "}
          </p>

          <p>
            Again, I could keep going and I hope this doesn’t end here. I love
            and value conversing with others to the point that most days, that’s
            all I really do. So if you’re reading this, thank you so much. If
            you need design advice, another mind to merge with, or just a
            friend, you now have me.
          </p>

          <p>
            Oh and one more thing, if you actually like the color{" "}
            <span style={{ color: "#FF7A00" }}>orange</span>, we absolutely NEED
            to have a conversation. But also please don’t forget,{" "}
            <b>you can just call me Cass.</b>
          </p>

          <p>With love,</p>
          <p>Cass, Random-Ass Wednesday</p>
        </div>
      </div>
    </div>
  );
}

export default Article4;
