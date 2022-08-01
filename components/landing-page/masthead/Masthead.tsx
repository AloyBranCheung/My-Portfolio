import TypeEffect from "./TypeEffect";
import styles from "./Masthead.module.css";
import MainButton from "../../UI/MainButton";
import { Parallax } from "react-scroll-parallax";
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
      <Parallax speed={-10}>
        <div className={styles.typewriterContainer}>
          <TypeEffect className={styles.textEffect} />
        </div>
      </Parallax>
      <Parallax speed={-10}>
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
      </Parallax>
    </section>
  );
}
