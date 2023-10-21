import React, { useContext, useEffect } from "react";
import styles from "./index.module.css";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import CreateBlog from "../../components/blog/create-blog/CreateBlog";

export default function CreateBlogPage() {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  // protect route
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/");
    }
  });

  if (!isLoggedIn) {
    return (
      <div className={styles.unauthorizedContainer}>
        <div className={styles.unauthorized}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.testContainer}>
      <CreateBlog />
    </div>
  );
}
