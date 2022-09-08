import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamMember from "@/components/TeamMember";
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
  teamMembersBox: "flex flex-wrap justify-center gap-x-4",
  teamMemberBox: "pt-24",
  mainImageContainer:"overflow-hidden h-[50vh]"
};

const OurStory = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainImageContainer}>
<img src="https://images.hindustantimes.com/img/2022/04/25/1600x900/0b602fd4-8f22-11ec-b0bf-65e18a89e7b6_1645337696483_1650844899820.jpg" />
      </div>
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
      <div className={styles.teamMembersBox}>
        <div className={styles.teamMemberBox}>
          <TeamMember />
        </div>
        <div className={styles.teamMemberBox}>
          <TeamMember />
        </div>
        <div className={styles.teamMemberBox}>
          <TeamMember />
        </div>
        <div className={styles.teamMemberBox}>
          <TeamMember />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurStory;
