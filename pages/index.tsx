import Head from "next/head";
import ContactMe from "../components/landing-page/contact-me/ContactMe";
import Masthead from "../components/landing-page/masthead/Masthead";
import MyProjects from "../components/landing-page/my-projects/MyProjects";
import { motion } from "framer-motion";
import styles from "./index.module.css";

export default function HomePage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 50 } }}
      style={{ display: "flex", width: "100%" }}
    >
      <Head>
        <title>Brandon Cheung</title>
      </Head>
      <section className={styles.section}>
        <Masthead />
        <MyProjects id="projects" />
        <ContactMe id="contactMe" />
      </section>
    </motion.section>
  );
}
