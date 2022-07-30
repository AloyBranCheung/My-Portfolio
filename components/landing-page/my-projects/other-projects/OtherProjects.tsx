import styles from "./OtherProjects.module.css";
import OtherProjectCard from "./OtherProjectCard";

export default function OtherProjects() {
  return (
    <li className={styles.otherProjectsContainer}>
      <OtherProjectCard
        title="Project Title"
        cardStyle={`${styles.card1}`}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        descriptionStyle={styles.description}
        githubUrl=""
        deployUrl=""
      ></OtherProjectCard>
      <OtherProjectCard
        title="Project Title"
        cardStyle={`${styles.card2}`}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        descriptionStyle={styles.description}
        githubUrl=""
        deployUrl=""
      ></OtherProjectCard>
      <OtherProjectCard
        title="Project Title"
        cardStyle={`${styles.card3}`}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        descriptionStyle={styles.description}
        githubUrl=""
        deployUrl=""
      ></OtherProjectCard>
      <OtherProjectCard
        title="Project Title"
        cardStyle={`${styles.card4}`}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        descriptionStyle={styles.description}
        githubUrl=""
        deployUrl=""
      ></OtherProjectCard>
    </li>
  );
}
