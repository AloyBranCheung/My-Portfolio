import styles from "./MyProjects.module.css";
// components
import FeaturedProject from "./featured-project/FeaturedProject";
import OtherProjects from "./other-projects/OtherProjects";
import AltFeaturedProject from "./featured-project/AltFeaturedProject";
import {
  FeaturedProjects,
  OtherProjects as OtherProjectsType,
} from "../../../types/project-types";

type MyProjectsProps = {
  id: string;
  featuredProjects: FeaturedProjects[];
  otherProjects: OtherProjectsType[];
};

export default function MyProjects({
  id,
  featuredProjects,
  otherProjects,
}: MyProjectsProps) {
  const myProjects = featuredProjects.map((projectObj) => {
    const isEven = (order: number) => order % 2 === 0; // isEven then AltFeaturedProject
    const imgUrl = projectObj.imgSrc.data.attributes.url;

    if (isEven(Number(projectObj.order))) {
      return (
        <AltFeaturedProject
          key={`${projectObj.order}-${projectObj.projectTitle}`}
          className={styles.project}
          imgSrc={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${imgUrl}`}
          titleProject={projectObj.projectTitle}
          description={projectObj.projectDescription}
          techStack={projectObj.techStack.split(",")}
          githubUrl={projectObj.githubUrl}
          deployUrl={projectObj.deployUrl}
        />
      );
    } else {
      return (
        <FeaturedProject
          key={`${projectObj.order}-${projectObj.projectTitle}`}
          className={styles.project}
          imgSrc={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${imgUrl}`}
          titleProject={projectObj.projectTitle}
          description={projectObj.projectDescription}
          techStack={projectObj.techStack.split(",")}
          githubUrl={projectObj.githubUrl}
          deployUrl={projectObj.deployUrl}
        />
      );
    }
  });

  return (
    <section id={id} className={styles.projectsSection}>
      <h1 className={styles.header}>Some things I&apos;ve built. . .</h1>

      <ul className={styles.listOfProjectsContainer}>
        {myProjects}
        <div className={styles.otherProjectsContainer}>
          <OtherProjects otherProjects={otherProjects} />
        </div>
      </ul>
    </section>
  );
}
