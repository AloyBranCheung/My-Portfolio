import styles from "./MyProjects.module.css";
import FeaturedProject from "./featured-project/FeaturedProject";
import OtherProjects from "./other-projects/OtherProjects";
import projectDummy from "../../../public/assets/images/test2.jpg";

type Props = {
  id: string;
};

export default function MyProjects(props: Props) {
  const test = ["Node.js", "Express.js", "Next.js", "React.js", "Python"];

  return (
    <section id={props.id} className={styles.projectsSection}>
      <h1 className={styles.header}>Some things I&apos;ve built. . .</h1>

      <ul className={styles.listOfProjectsContainer}>
        <FeaturedProject
          className={styles.project}
          imgSrc={projectDummy}
          heading="Featured Project"
          titleProject="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          techStack={test}
          githubUrl=""
          deployUrl=""
        />
        <OtherProjects />
      </ul>
    </section>
  );
}
