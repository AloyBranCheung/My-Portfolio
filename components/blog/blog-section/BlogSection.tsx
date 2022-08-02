import React from "react";
import Card from "../../UI/Card";
import styles from "./BlogSection.module.css";
import BlogPreviewCard from "../blog-preview-card/BlogPreviewCard";

export default function BlogSection() {
  return (
    <section className={styles.blogSection}>
      <Card className={styles.blogsContainer}>
        <h5>Latest</h5>
        <BlogPreviewCard className={styles.gridCard} />
        <BlogPreviewCard className={styles.gridCard} />
        <BlogPreviewCard className={styles.gridCard} />
      </Card>
    </section>
  );
}
