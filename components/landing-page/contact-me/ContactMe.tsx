import styles from "./ContactMe.module.css";
import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";
import { Parallax } from "react-scroll-parallax";

type Props = {
  id: string;
  pageMeta: string;
};

export default function ContactMe({ id, pageMeta }: Props) {
  return (
    <section id={id} className={styles.contactSection}>
      <div className={styles.contactFormContainer}>
        <AboutMe pageMeta={pageMeta} />
        <ContactForm />
      </div>
    </section>
  );
}
