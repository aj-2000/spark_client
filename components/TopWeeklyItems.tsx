import { ReactNode } from "react";
const styles = {
  container: "m-4",
  contentContainer: "bg-gray-200 rounded-xl",
  childrenContainer: "p-4",
  heading: "mb-8 text-3xl font-thin",
};

type Props = {
  children: ReactNode;
};

const TopWeeklyItems = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Top Weekly Items</p>
      <div className={styles.contentContainer}>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </div>
  );
};

export default TopWeeklyItems;
