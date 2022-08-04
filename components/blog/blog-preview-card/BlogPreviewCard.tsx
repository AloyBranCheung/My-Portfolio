import React, { SyntheticEvent } from "react";
import Image from "next/image";
import styles from "./BlogPreviewCard.module.css";

type Props = {
  className?: string;
  title: string;
  description: string;
  timeStamp: string;
  imgSrc: string;
  id: string;
  imageClickHandler: (event: SyntheticEvent) => void;
};

export default function BlogPreviewCard({
  className,
  title,
  description,
  timeStamp,
  imgSrc,
  id,
  imageClickHandler,
}: Props) {
  return (
    <article
      id={id}
      onClick={imageClickHandler}
      className={`${styles.gridContainer} ${className}`}
    >
      <h1 onClick={imageClickHandler} className={styles.title}>
        {title.toLowerCase()}
      </h1>
      <p onClick={imageClickHandler} className={styles.description}>
        {description}
      </p>
      <time onClick={imageClickHandler} className={styles.timeStamp}>
        {timeStamp}
      </time>
      <div
        id={id}
        onClick={imageClickHandler}
        className={styles.imageContainer}
      >
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
