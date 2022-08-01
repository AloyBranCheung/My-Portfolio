import styles from "./OtherProjects.module.css";
import OtherProjectCard from "./OtherProjectCard";

export default function OtherProjects() {
  return (
    <li className={styles.otherProjectsContainer}>
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
      <OtherProjectCard
        title="Redux Cart"
        cardStyle={`${styles.card1}`}
        description="Add/remove items to a cart, connected to firebase for cart persistence"
        descriptionStyle={styles.description}
        githubUrl="https://github.com/AloyBranCheung/ReduxCart"
        deployUrl="https://incredible-torrone-9191df.netlify.app/"
        techStack="Techs: React/Next.js, React Redux, Firebase"
      ></OtherProjectCard>
    </li>
  );
}
