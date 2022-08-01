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
          description="Video chat app made with Twilio API, call, join a meeting and socialize."
          techStack={test}
          githubUrl=""
          deployUrl=""
        />
        <FeaturedProject
          className={styles.project}
          imgSrc={projectDummy}
          heading="Featured Project"
          titleProject="Project 1"
          description="Video chat app made with Twilio API, call, join a meeting and socialize."
          techStack={test}
          githubUrl=""
          deployUrl=""
        />
        <FeaturedProject
          className={styles.project}
          imgSrc={projectDummy}
          heading="Featured Project"
          titleProject="Project 1"
          description="Video chat app made with Twilio API, call, join a meeting and socialize."
          techStack={test}
          githubUrl=""
          deployUrl=""
        />
        <OtherProjects />
      </ul>
    </section>
  );
}
