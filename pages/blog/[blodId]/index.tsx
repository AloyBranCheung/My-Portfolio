import React from "react";
import { motion } from "framer-motion";
import FullBlog from "../../../components/blog/blog-fullpage/FullBlog";
import Head from "next/head";

export default function index() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Brandon&apos;s Blog</title>
      </Head>
      <FullBlog />
    </motion.h1>
  );
}
