import React from "react";
import Image from "next/image";
import testImage from "../../../public/assets/images/blogMastHead.jpg";
import styles from "./BlogPreviewCard.module.css";

type Props = {
  className?: string;
};

export default function BlogPreviewCard({ className }: Props) {
  return (
    <article className={`${styles.gridContainer} ${className}`}>
      <h1 className={styles.title}>Title of Blog</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <time className={styles.timeStamp}>Time Published 0000-00-00</time>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={testImage} alt="test-img" />
      </div>
    </article>
  );
}
