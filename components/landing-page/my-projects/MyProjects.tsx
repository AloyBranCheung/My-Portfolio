import styles from "./MyProjects.module.css";
import FeaturedProject from "./featured-project/FeaturedProject";
import OtherProjects from "./other-projects/OtherProjects";
import gdocSample from "../../../public/assets/images/gdocs sample.gif";
import covidTrackerSample from "../../../public/assets/images/covid19-tracker.gif";
import AltFeaturedProject from "./featured-project/AltFeaturedProject";
import BookingSample from "../../../public/assets/images/BookingSample.gif";

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
  const bookingApp = ["React.js", "Node.js", "Express.js", "MongoDB"];

  return (
    <section id={props.id} className={styles.projectsSection}>
      <h1 className={styles.header}>Some things I&apos;ve built. . .</h1>

      <ul className={styles.listOfProjectsContainer}>
        <FeaturedProject
          className={styles.project}
          imgSrc={BookingSample}
          heading="Featured Project"
          titleProject="Booking Clone App"
          description="Booking Clone App is a clone of booking.com. This app has user authentication using JWT, a search bar function, and a booking function that checks if the dates for a specific room/location are booked. An admin panel is also included for content management. The frontend uses React and Material UI while the admin panel uses React and Sass. The backend uses Node/Express.js and MongoDB to manage the data."
          techStack={bookingApp}
          redirectUrl="https://github.com/AloyBranCheung/booking-clone-app"
          githubUrl="https://github.com/AloyBranCheung/booking-clone-app"
          deployUrl="https://github.com/AloyBranCheung/booking-clone-app"
        />

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
