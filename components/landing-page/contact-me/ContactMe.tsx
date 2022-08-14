import styles from "./ContactMe.module.css";
import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";
import { Parallax } from "react-scroll-parallax";

type Props = {
  id: string;
};

export default function ContactMe(props: Props) {
  return (
    <section id={props.id} className={styles.contactSection}>
      <div className={styles.contactFormContainer}>
        <AboutMe />
        <ContactForm />
      </div>
    </section>
  );
}
