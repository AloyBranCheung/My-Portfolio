import styles from "./Masthead.module.css";
import MainButton from "../../UI/MainButton";
import { useRouter } from "next/router";

export default function Masthead() {
  const router = useRouter();
  const projectsClickHandler = () => {
    router.push("/#projects");
  };
  const contactMeClickHandler = () => {
    router.push("/#contactMe");
  };
  return (
    <section className={styles.mastContainer}>
      <div className={styles.mastText}>
        <h1>
          Hi! I&apos;m Brandon. I&apos;m a software developer. I make cool
          things for the web.
        </h1>
      </div>
      <div className={styles.buttonContainer}>
        <MainButton
          className={styles.mainButton}
          text="My Projects"
          clickHandler={projectsClickHandler}
        />
        <MainButton
          className={styles.mainButton}
          text="Contact Me"
          clickHandler={contactMeClickHandler}
        />
      </div>
    </section>
  );
}
