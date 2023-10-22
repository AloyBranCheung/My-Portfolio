import styles from "./index.module.css";
// next
import Head from "next/head";
// axios
import cms from "../utils/axios";
// framer-motion
import { motion } from "framer-motion";
// components
import ContactMe from "../components/landing-page/contact-me/ContactMe";
// import Masthead from "../components/landing-page/masthead/Masthead";
import MyProjects from "../components/landing-page/my-projects/MyProjects";
import Gutter from "../components/UI/Gutter";
// types
import { OtherProjects } from "../types/project-types";
import { useEffect } from "react";

interface HomePageProps {
  otherProjects: OtherProjects[];
}

export default function HomePage({ otherProjects }: HomePageProps) {
  console.log({ otherProjects });
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 50 } }}
      style={{ display: "flex", width: "100%" }}
    >
      <Gutter>
        <Head>
          <title>Brandon Cheung</title>
        </Head>
        <section className={styles.section}>
          {/* <Masthead /> */}
          <MyProjects id="projects" />
          <ContactMe id="contactMe" />
        </section>
      </Gutter>
    </motion.section>
  );
}

export async function getStaticProps() {
  let otherProjects = [];

  try {
    const otherProjectsRes = await cms.get("other-projects");
    otherProjects = otherProjectsRes?.data?.data || [];
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      otherProjects,
    },
  };
}
