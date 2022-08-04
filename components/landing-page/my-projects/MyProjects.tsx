import styles from "./MyProjects.module.css";
import FeaturedProject from "./featured-project/FeaturedProject";
import OtherProjects from "./other-projects/OtherProjects";
import gdocSample from "../../../public/assets/images/gdocs sample.gif";

type Props = {
  id: string;
};

export default function MyProjects(props: Props) {
  const featuredProjects = ["React.js", "MongoDB", "SocketIO", "Quill"];

  return (
    <section id={props.id} className={styles.projectsSection}>
      <h1 className={styles.header}>Some things I&apos;ve built. . .</h1>

      <ul className={styles.listOfProjectsContainer}>
        <FeaturedProject
          className={styles.project}
          imgSrc={gdocSample}
          heading="Featured Project"
          titleProject="Live Text Editor"
          description="A google docs clone. This full-stack web application was built around Quill, which is an API driven rich text editor. The live editing between multiple users was enabled with SocketIO."
          techStack={featuredProjects}
          redirectUrl="https://github.com/AloyBranCheung/GoogleDocs-Clone"
          githubUrl="https://github.com/AloyBranCheung/GoogleDocs-Clone"
          deployUrl="https://github.com/AloyBranCheung/GoogleDocs-Clone"
        />
        <OtherProjects />
      </ul>
    </section>
  );
}
