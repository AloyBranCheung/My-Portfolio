import styles from "./FullBlog.module.css";
import React from "react";
import NormalButton from "../../UI/NormalButton";
import { useRouter } from "next/router";
import Image from "next/image";

export default function FullBlog() {
  const router = useRouter();
  const backClickHandler = () => {
    router.back();
  };
  console.log(router.query);

  return (
    <div className={styles.blogContainer}>
      <NormalButton
        className={styles.backButton}
        text="Back"
        onClick={backClickHandler}
      />
      <div className={styles.blogContent}></div>
      <Image
        src="https://images.unsplash.com/photo-1606228281437-dc226988dc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="cover-photo"
        layout="responsive"
        height="1080px"
        width="1920px"
      />
      <h1 className={styles.blogTitle}>blog title</h1>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className={styles.timeStamp}>0000-00-00</p>
    </div>
  );
}
