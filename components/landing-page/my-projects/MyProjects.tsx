import styles from "./MyProjects.module.css";
import FeaturedProject from "./featured-project/FeaturedProject";
import OtherProjects from "./other-projects/OtherProjects";
import simpleOrange from "../../../public/assets/images/sample1.gif";
import AltFeaturedProject from "./featured-project/AltFeaturedProject";
import BookingSample from "../../../public/assets/images/BookingSample.gif";
import chatDemo from "../../../public/assets/images/chat demo.gif";

type Props = {
  id: string;
};

export default function MyProjects(props: Props) {
  const chatdemo = ["React.js", "MongoDB", "SocketIO", "Node/Express.js"];
  const simpleOrangeTech = [
    "React/Typescript",
    "Material UI",
    "Highchart",
    "MongoDB/Node/Express",
  ];
  const bookingApp = ["React.js", "Node.js", "Express.js", "MongoDB"];

  return (
    <section id={props.id} className={styles.projectsSection}>
      <h1 className={styles.header}>Some things I&apos;ve built. . .</h1>

      <ul className={styles.listOfProjectsContainer}>
        <AltFeaturedProject
          className={styles.project}
          imgSrc={simpleOrange}
          heading="Featured Project"
          titleProject="Simply Orange"
          description="Why? Because I can. Because every time I shop at Loblaws the prices change from as low as $3.99 to as high at $8.99. Conspiracy? I think not. Time to track the prices I buy my OJ at and graph them up. Because I'm here to save the world."
          techStack={simpleOrangeTech}
          redirectUrl="https://resonant-jelly-b98e11.netlify.app/"
          githubUrl="https://github.com/AloyBranCheung/simply-orange"
          deployUrl="https://resonant-jelly-b98e11.netlify.app/"
        />
        <FeaturedProject
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
        <AltFeaturedProject
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

        <div className={styles.otherProjectsContainer}>
          <OtherProjects />
        </div>
      </ul>
    </section>
  );
}
