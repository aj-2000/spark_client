import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { storyTextContent } from "consts/storyTextContent";
import React from "react";

const styles = {
  container: "",
  headingContainer: "mt-8 mx-4 text-center",
  heading: "font-thin text-6xl",
  subHeadingContainer: "mt-4 mx-4 text-center",
  subHeading: "font-thin text-4xl",
  contentContainer: "my-8 bg-gray-100 rounded-lg mx-4",
  teamBox: "",
  storyBox: "flex",
  storyImage: "w-full rounded-lg shadow-lg",
  storyImageBox: "flex-1 p-16",
  storyContent:
    " font-mono italic text-lg antialiased font-semibold tracking-wide leading-6	text-center",
  storyContentBox: "rounded-r-lg shadow-lg bg-gray-200 flex-1 p-16",
};

const OurStory = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Our Story</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.storyBox}>
          <div className={styles.storyImageBox}>
            <img
              src="https://www.westend61.de/images/0000618885pw/group-of-four-friends-having-fun-TAM000089.jpg"
              width="400px"
              className={styles.storyImage}
            />
          </div>
          <div className={styles.storyContentBox}>
            <p className={styles.storyContent}>{storyTextContent}</p>
          </div>
        </div>
      </div>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Our Team</p>
      </div>
      <div className={styles.subHeadingContainer}>
        <p className={styles.subHeading}>Meet The Best Team In The World</p>
      </div>
      <Footer />
    </div>
  );
};

export default OurStory;
