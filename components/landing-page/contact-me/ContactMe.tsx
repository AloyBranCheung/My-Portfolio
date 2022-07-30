import { Parallax } from "react-scroll-parallax";
import styles from "./ContactMe.module.css";
import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";

type Props = {
  id: string;
};

export default function ContactMe(props: Props) {
  return (
    <section id={props.id} className={styles.contactSection}>
      <div className={styles.contactFormContainer}>
        <AboutMe className={styles.aboutMe} />
        <ContactForm className={styles.contactForm} />
      </div>
    </section>
  );
}
