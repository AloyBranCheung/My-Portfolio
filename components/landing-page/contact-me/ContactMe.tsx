import styles from "./ContactMe.module.css";
import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";
import { Parallax } from "react-scroll-parallax";
import { useState } from "react";

type Props = {
  id: string;
};

export default function ContactMe(props: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const revealFormHandler = () => {
    setIsVisible(true);
  };

  return (
    <section id={props.id} className={styles.contactSection}>
      {!isVisible && (
        <div className={styles.buttonContainer}>
          <Parallax speed={-10}>
            <button
              onClick={revealFormHandler}
              className={styles.contactButton}
            >
              Contact Me
            </button>
          </Parallax>
        </div>
      )}
      {isVisible && (
        <div className={styles.contactFormContainer}>
          <Parallax className={styles.parallaxContainer} speed={-10}>
            <AboutMe className={styles.aboutMe} />
            <ContactForm className={styles.contactForm} />
          </Parallax>
        </div>
      )}
    </section>
  );
}
