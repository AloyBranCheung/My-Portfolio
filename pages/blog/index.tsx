import { motion } from "framer-motion";
import BlogMasthead from "../../components/blog/blog-masthead/BlogMasthead";
import BlogSection from "../../components/blog/blog-section/BlogSection";

export default function Blog() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BlogMasthead />
      <BlogSection />
    </motion.h1>
  );
}
