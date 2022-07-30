import Head from "next/head";
import ContactMe from "../components/landing-page/contact-me/ContactMe";
import Masthead from "../components/landing-page/masthead/Masthead";
import MyProjects from "../components/landing-page/my-projects/MyProjects";
import Footer from "../components/layouts/footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 50 } }}
    >
      <Head>
        <title>Brandon Cheung</title>
      </Head>
      <Masthead />
      <MyProjects id="projects" />
      <ContactMe id="contactMe" />
    </motion.section>
  );
}
