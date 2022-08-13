import styles from "./MyProjects.module.css";
import FeaturedProject from "./featured-project/FeaturedProject";
import OtherProjects from "./other-projects/OtherProjects";
import covidTrackerSample from "../../../public/assets/images/covid19-tracker.gif";
import AltFeaturedProject from "./featured-project/AltFeaturedProject";
import BookingSample from "../../../public/assets/images/BookingSample.gif";
import chatDemo from "../../../public/assets/images/chat demo.gif";

type Props = {
  id: string;
};

export default function MyProjects(props: Props) {
  const chatdemo = ["React.js", "MongoDB", "SocketIO", "Node/Express.js"];
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
        <AltFeaturedProject
          className={styles.project}
          imgSrc={chatDemo}
          heading="Featured Project"
          titleProject="Neobrutalistic Chat App"
          description="To learn more about neobrutalism web design, I made a fullstack chat app based around neobrutalistic design. Through SocketIO, users can join a room and live chat with other users. I loved using Tailwind CSS here."
          techStack={chatdemo}
          redirectUrl="https://silly-narwhal-3281d0.netlify.app/"
          githubUrl="https://github.com/AloyBranCheung/neobrutalistic-chat-app"
          deployUrl="https://silly-narwhal-3281d0.netlify.app/"
        />
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
        <OtherProjects />
      </ul>
    </section>
  );
}
