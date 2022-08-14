import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import styles from "./BlogSection.module.css";
import Paginate from "../paginate/Paginate";

export default function BlogSection() {
  const [blogs, setBlogs] = useState<
    {
      firebaseKey: string;
      date: string;
      description: string;
      imgUrl: string;
      title: string;
      _id: string;
    }[]
  >([]);

  // display blogs posted, set to state and sent to <Paginate /> component
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
      setBlogs(loadedBlogs);
    };
    fetchData().catch((err) => console.error(err));
  }, []);

  return (
    <section className={styles.blogSection}>
      <Card className={styles.blogsContainer}>
        <h5>Blogs</h5>
        <div className={styles.paginateContainer}>
          <Paginate blogs={blogs} />
        </div>
      </Card>
    </section>
  );
}
