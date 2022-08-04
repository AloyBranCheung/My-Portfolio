import styles from "./FullBlog.module.css";
import React, { useEffect, useState } from "react";
import NormalButton from "../../UI/NormalButton";
import { useRouter } from "next/router";
import Image from "next/image";

export default function FullBlog() {
  const [currBlog, setCurrBlog] = useState<{
    firebaseKey: string;
    date: string;
    description: string;
    imgUrl: string;
    title: string;
    _id: string;
  }>({
    firebaseKey: "",
    date: "",
    description: "",
    imgUrl: "",
    title: "",
    _id: "",
  });
  const router = useRouter();
  const thisPage = router.query.blogId;

  // back button
  const backClickHandler = () => {
    router.back();
  };

  // fetch blogs
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-portfolio-5ff59-default-rtdb.firebaseio.com/blogs.json"
      );
      const resData = await response.json();
      const loadedBlogs = [];
      for (const key in resData) {
        const blog = resData[key];
        loadedBlogs.push({
          firebaseKey: key,
          date: blog.date,
          description: blog.description,
          imgUrl: blog.imgUrl,
          title: blog.title,
          _id: blog._id,
        });
      }
      const currBlog = loadedBlogs.filter((blogObj) => {
        return blogObj._id === thisPage;
      });

      const finalObj = Object.assign(currBlog[0]);

      setCurrBlog(finalObj);
    };
    fetchData().catch((err) => console.error(err));
  }, [thisPage]);

  return (
    <div id={currBlog._id} className={styles.blogContainer}>
      <NormalButton
        text="Back"
        onClick={backClickHandler}
        className={styles.backButton}
      />
      <div className={styles.blogContent}>
        <Image
          src={currBlog.imgUrl}
          alt="cover-photo"
          layout="responsive"
          height="1080px"
          width="1920px"
        />
        <h1 className={styles.blogTitle}>{currBlog.title}</h1>
        <p className={styles.paragraph}>{currBlog.description}</p>
        <p className={styles.timeStamp}>{currBlog.date}</p>
      </div>
    </div>
  );
}
