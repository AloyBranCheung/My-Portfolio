import styles from "./OtherProjects.module.css";
import OtherProjectCard from "./OtherProjectCard";
import { OtherProjects as OtherProjectsType } from "../../../../types/project-types";

interface OtherProjectsProps {
  otherProjects: OtherProjectsType[];
}

export default function OtherProjects({ otherProjects }: OtherProjectsProps) {
  const otherProjectsCards = otherProjects.map((otherProjectsObj) => (
    <OtherProjectCard
      key={`${otherProjectsObj.order}-${otherProjectsObj.projectTitle}`}
      cardStyle={`${styles.card1}`}
      descriptionStyle={styles.description}
      title={otherProjectsObj.projectTitle}
      description={otherProjectsObj.projectDescription}
      githubUrl={otherProjectsObj.githubUrl}
      deployUrl={otherProjectsObj.deployUrl}
      techStack={otherProjectsObj.techStack}
    />
  ));

  return (
    <li className={styles.otherProjectsContainer}>
      {otherProjectsCards.length > 0 ? (
        otherProjectsCards
      ) : (
        <>
          <OtherProjectCard
            title="Workout App (WIP)"
            cardStyle={`${styles.card1}`}
            description="A web app clone of the Alpha Progression Android app."
            descriptionStyle={styles.description}
            githubUrl="https://github.com/AloyBranCheung/workout-app"
            deployUrl="https://workout-app-iota-nine.vercel.app/"
            techStack="Techs: Next.js, Postgres/Prisma,Firebase, tRPC, TailwindCSS"
          ></OtherProjectCard>
          <OtherProjectCard
            title="Live Text Editor"
            cardStyle={`${styles.card1}`}
            description="A google docs clone. This full-stack web application was built around Quill, which is an API driven rich text editor. The live editing between multiple users was enabled with SocketIO."
            descriptionStyle={styles.description}
            githubUrl="https://github.com/AloyBranCheung/GoogleDocs-Clone"
            deployUrl="https://github.com/AloyBranCheung/GoogleDocs-Clone"
            techStack="Techs: React, MongoDB, SocketIO, Quill"
          ></OtherProjectCard>
          <OtherProjectCard
            title="COVID-19 API"
            cardStyle={`${styles.card1}`}
            description="This is a Covid-19 tracker app using the API provided by COVID19 API with data for this API sourced by Johns Hopkins CSSE. Data is visualized using Chart.js."
            descriptionStyle={styles.description}
            githubUrl="https://github.com/AloyBranCheung/Covid19-Tracker-App"
            deployUrl="https://eclectic-speculoos-2d9b2b.netlify.app/"
            techStack="Techs: React, MaterialUI, Chart.js"
          ></OtherProjectCard>
          <OtherProjectCard
            title="Simon Game"
            cardStyle={`${styles.card1}`}
            description="Remember Hasbro's Simon game? Now online."
            descriptionStyle={styles.description}
            githubUrl="https://github.com/AloyBranCheung/Simon-Game-"
            deployUrl="https://aloybrancheung.github.io/Simon-Game-/"
            techStack="Techs: HTML, CSS, Javascript"
          ></OtherProjectCard>
          <OtherProjectCard
            title="GOAT Quotes"
            cardStyle={`${styles.card1}`}
            description="A full-stack website that displays quotes generated from APIs like Kanye REST."
            descriptionStyle={styles.description}
            githubUrl="https://github.com/AloyBranCheung/QuotesWebsite"
            deployUrl="https://gentle-brushlands-11763.herokuapp.com/"
            techStack="Techs: HTML/CSS/JS, jQuery, Bootstrap5, Node/Express.js"
          ></OtherProjectCard>
          <OtherProjectCard
            title="More to come..."
            cardStyle={`${styles.card1}`}
            description="Check my Github for updates :)"
            descriptionStyle={styles.description}
            githubUrl="https://github.com/AloyBranCheung/"
            deployUrl="https://github.com/AloyBranCheung/"
            techStack=""
          ></OtherProjectCard>
        </>
      )}
    </li>
  );
}
