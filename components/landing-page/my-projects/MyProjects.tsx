import styles from "./MyProjects.module.css";
// components
import FeaturedProject from "./featured-project/FeaturedProject";
import OtherProjects from "./other-projects/OtherProjects";
import AltFeaturedProject from "./featured-project/AltFeaturedProject";
// images
import chatDemo from "../../../public/assets/images/chat demo.gif";
import simplyBudgets from "../../../public/assets/images/simply-budgets.gif";
import boardgameStatsGif from "../../../public/assets/images/boardgame-stats.gif";

type Props = {
  id: string;
};

export default function MyProjects(props: Props) {
  const chatdemo = ["React.js", "MongoDB", "SocketIO", "Node/Express.js"];
  const simplyBudgetsTech = [
    "React/Typescript",
    "Material UI",
    "MongoDB/Mongoose",
    "Node/Express",
  ];
  const boardgameStats = ["Next.js", "SocketIO", "Firebase", "TailwindCSS/MUI"];

  return (
    <section id={props.id} className={styles.projectsSection}>
      <h1 className={styles.header}>Some things I&apos;ve built. . .</h1>

      <ul className={styles.listOfProjectsContainer}>
        <AltFeaturedProject
          className={styles.project}
          imgSrc={simplyBudgets}
          titleProject="SimplyBudgets"
          description="A simple budgeting app based on the 50/30/20 rule. You can add/remove and debit/credit expenses. In addition, a history of expenses is kept for future development purposes (e.g. graphing with Highcharts). Please note first load may take a wild as I am hosting on a free service."
          techStack={simplyBudgetsTech}
          githubUrl="https://github.com/AloyBranCheung/budget-calculator"
          deployUrl="https://precious-torte-3bafcb.netlify.app/"
        />
        <FeaturedProject
          className={styles.project}
          imgSrc={boardgameStatsGif}
          titleProject="Boardgame Dashboard"
          description="I like to play board games with my partner and we're competitive. So we created a stack tracker that also includes an app for a board game we love to play that uses Socket.io so we can chat with each other and track each other's score live. Please note first load may take a wild as I am hosting on a free service."
          techStack={boardgameStats}
          githubUrl="https://github.com/AloyBranCheung/board-game-stats"
          deployUrl="https://board-game-stats.onrender.com/"
        />
        <AltFeaturedProject
          className={styles.project}
          imgSrc={chatDemo}
          titleProject="Neobrutalistic Chat App"
          description="To learn more about neobrutalism web design, I made a fullstack chat app based around neobrutalistic design. Through SocketIO, users can join a room and live chat with other users. I loved using Tailwind CSS here."
          techStack={chatdemo}
          githubUrl="https://github.com/AloyBranCheung/neobrutalistic-chat-app"
          deployUrl="https://silly-narwhal-3281d0.netlify.app/"
        />

        <div className={styles.otherProjectsContainer}>
          <OtherProjects />
        </div>
      </ul>
    </section>
  );
}
