import styles from "./OtherProjects.module.css";
import OtherProjectCard from "./OtherProjectCard";

export default function OtherProjects() {
  return (
    <li className={styles.otherProjectsContainer}>
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
        title="GOAT Quotes"
        cardStyle={`${styles.card1}`}
        description="A full-stack website that displays quotes generated from APIs like Kanye REST."
        descriptionStyle={styles.description}
        githubUrl="https://github.com/AloyBranCheung/QuotesWebsite"
        deployUrl="https://gentle-brushlands-11763.herokuapp.com/"
        techStack="Techs: HTML/CSS/JS, jQuery, Bootstrap5, Node/Express.js"
      ></OtherProjectCard>
      <OtherProjectCard
        title="Typescript To-do List"
        cardStyle={`${styles.card1}`}
        description="A to-do list made with typescript react."
        descriptionStyle={styles.description}
        githubUrl="https://github.com/AloyBranCheung/TypescriptTodoList"
        deployUrl="https://merry-torte-9f438a.netlify.app/"
        techStack="Techs: React.js, Typescript"
      ></OtherProjectCard>
      <OtherProjectCard
        title="ReactMeals"
        cardStyle={`${styles.card1}`}
        description="ReactMeals is a food ordering web app"
        descriptionStyle={styles.description}
        githubUrl="https://github.com/AloyBranCheung/ReactMeals"
        deployUrl="https://aquamarine-capybara-5f358f.netlify.app/"
        techStack="Techs: React.js, Styled-components, Firebase"
      ></OtherProjectCard>
    </li>
  );
}
