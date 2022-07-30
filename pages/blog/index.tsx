import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      Oops. Page is under construction.
    </motion.h1>
  );
}
