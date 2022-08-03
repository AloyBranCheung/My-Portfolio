import { motion } from "framer-motion";
import BlogMasthead from "../../components/blog/blog-masthead/BlogMasthead";
import BlogSection from "../../components/blog/blog-section/BlogSection";
import Head from "next/head";

export default function Blog() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Brandon&apos;s Blog</title>
      </Head>
      <BlogMasthead />
      <BlogSection />
    </motion.h1>
  );
}
