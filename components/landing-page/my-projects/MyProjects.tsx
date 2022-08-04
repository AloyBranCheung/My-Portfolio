import styles from "./MyProjects.module.css";
import FeaturedProject from "./featured-project/FeaturedProject";
import OtherProjects from "./other-projects/OtherProjects";
import gdocSample from "../../../public/assets/images/gdocs sample.gif";
import covidTrackerSample from "../../../public/assets/images/covid19-tracker.gif";
import AltFeaturedProject from "./featured-project/AltFeaturedProject";

type Props = {
  id: string;
};

export default function MyProjects(props: Props) {
  const gdocFeaturedProjects = ["React.js", "MongoDB", "SocketIO", "Quill"];
  const covTrackFeaturedProjects = [
    "React.js",
    "API",
    "Material UI",
    "Chart.js",
  ];

  return (
    <section id={props.id} className={styles.projectsSection}>
      <h1 className={styles.header}>Some things I&apos;ve built. . .</h1>

      <ul className={styles.listOfProjectsContainer}>
        <AltFeaturedProject
          className={styles.project}
          imgSrc={covidTrackerSample}
          heading="Featured Project"
          titleProject="COVID-19 Tracker App"
          description="This is a Covid-19 tracker app using the API provided by COVID19 API with data for this API sourced by Johns Hopkins CSSE. Data is visualized using Chart.js."
          techStack={covTrackFeaturedProjects}
          redirectUrl="https://eclectic-speculoos-2d9b2b.netlify.app/"
          githubUrl="https://github.com/AloyBranCheung/Covid19-Tracker-App"
          deployUrl="https://eclectic-speculoos-2d9b2b.netlify.app/"
        />
        <FeaturedProject
          className={styles.project}
          imgSrc={gdocSample}
          heading="Featured Project"
          titleProject="Live Text Editor"
          description="A google docs clone. This full-stack web application was built around Quill, which is an API driven rich text editor. The live editing between multiple users was enabled with SocketIO."
          techStack={gdocFeaturedProjects}
          redirectUrl="https://github.com/AloyBranCheung/GoogleDocs-Clone"
          githubUrl="https://github.com/AloyBranCheung/GoogleDocs-Clone"
          deployUrl="https://github.com/AloyBranCheung/GoogleDocs-Clone"
        />
        <OtherProjects />
      </ul>
    </section>
  );
}
