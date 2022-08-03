import React from "react";
import Image from "next/image";
import styles from "./BlogPreviewCard.module.css";
import { useRouter } from "next/router";

type Props = {
  className?: string;
  title: string;
  description: string;
  timeStamp: string;
  imgSrc: string;
  id: string;
};

export default function BlogPreviewCard({
  className,
  title,
  description,
  timeStamp,
  imgSrc,
  id,
}: Props) {
  const router = useRouter();
  const imageClickHandler = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <article
      onClick={imageClickHandler}
      className={`${styles.gridContainer} ${className}`}
    >
      <h1 onClick={imageClickHandler} className={styles.title}>
        {title}
      </h1>
      <p onClick={imageClickHandler} className={styles.description}>
        {description}
      </p>
      <time onClick={imageClickHandler} className={styles.timeStamp}>
        {timeStamp}
      </time>
      <div onClick={imageClickHandler} className={styles.imageContainer}>
        <Image
          className={styles.image}
          height="1080px"
          width="1920px"
          src={imgSrc}
          alt="blogPreview-img"
        />
      </div>
    </article>
  );
}
