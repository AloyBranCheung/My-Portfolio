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
import {
  CmsResponse,
  FeaturedProjects,
  OtherProjects,
} from "../types/project-types";

interface HomePageProps {
  otherProjects: OtherProjects[];
  featuredProjects: FeaturedProjects[];
  pageMeta: string;
}

export default function HomePage({
  otherProjects,
  featuredProjects,
  pageMeta,
}: HomePageProps) {
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
          <MyProjects
            id="projects"
            featuredProjects={featuredProjects}
            otherProjects={otherProjects}
          />
          <ContactMe id="contactMe" pageMeta={pageMeta} />
        </section>
      </Gutter>
    </motion.section>
  );
}

export async function getStaticProps() {
  let featuredProjects: FeaturedProjects[] = [];
  let otherProjects: OtherProjects[] = [];
  let pageMeta: string = "";

  // other projects
  try {
    const otherProjectsRes = await cms.get("other-projects");
    otherProjects =
      otherProjectsRes?.data?.data
        .map((cmsObj: { id: number; attributes: OtherProjects }) => {
          const { attributes } = cmsObj;
          return { ...attributes };
        })
        .sort(
          (a: OtherProjects, b: OtherProjects) =>
            Number(a.order) - Number(b.order)
        ) || [];
  } catch (error) {
    console.error(error);
  }

  // featured projects
  try {
    const featuredProjectsRes = await cms.get("featured-projects", {
      params: {
        populate: {
          imgSrc: true,
        },
      },
    });
    featuredProjects =
      featuredProjectsRes?.data?.data
        .map((cmsObj: CmsResponse<FeaturedProjects>) => {
          const { attributes } = cmsObj;
          return { ...attributes };
        })
        .sort(
          (a: OtherProjects, b: OtherProjects) =>
            Number(a.order) - Number(b.order)
        ) || [];
  } catch (error) {
    console.error(error);
  }

  // pageMeta
  try {
    const pageMetaRes = await cms.get("page-metas");
    pageMeta = pageMetaRes?.data?.data[0].attributes.pageMeta || "";
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      otherProjects,
      featuredProjects,
      pageMeta,
    },
    revalidate: 10,
  };
}
