import styles from "./CreateBlog.module.css";
import React, { useState, useRef, useEffect } from "react";
import QuillEditor from "../../quill/QuillEditor";
import NormalButton from "../../UI/NormalButton";
import QuillReader from "../../quill/QuillReader";
import { useRouter } from "next/router";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";
import { v4 as uuidv4 } from "uuid";

export default function CreateBlog() {
  const router = useRouter();
  const [editorContents, setEditorContents] = useState();
  const { writeBlogData } = useFirebaseAuth();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState(
    `https://picsum.photos/200/300?random=${uuidv4()}`
  );
  const [date, setDate] = useState("");
  const dateRef = useRef();

  // pass editor contents to state to pass to reader and send to db
  const editorContentsDelta = (editorContents) => {
    setEditorContents(editorContents);
  };

  // onChange set input values
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleImgUrlChange = (e) => {
    setImgUrl(e.target.value);
  };

  useEffect(() => {
    setDate(dateRef.current.value);
  }, []);

  // submit new blog post
  const handleSubmit = () => {
    writeBlogData(title, desc, imgUrl, date, uuidv4(), editorContents);
    router.replace("/blog");
  };

  // navigate back -1
  const goBack = () => {
    router.replace("/blog");
  };

  return (
    <div className={styles.container}>
      <div className={styles.previewWrapper}>
        <label htmlFor="title" className={styles.titleLabel}>
          Title:
        </label>
        <input
          onChange={handleTitleChange}
          id="title"
          name="title"
          type="text"
          className={styles.title}
        />

        <label htmlFor="description" className={styles.descriptionLabel}>
          Description:
        </label>
        <input
          onChange={handleDescChange}
          id="description"
          name="description"
          type="text"
          className={styles.description}
        />

        <label htmlFor="imgurl" className={styles.imgurlLabel}>
          ImgUrl (default is already generated, can skip if no img):
        </label>
        <input
          onChange={handleImgUrlChange}
          id="imgurl"
          name="imgurl"
          type="text"
          className={styles.imgurl}
        />

        <label htmlFor="date" className={styles.dateLabel}>
          Date:
        </label>
        <input
          ref={dateRef}
          id="date"
          name="date"
          type="text"
          className={styles.title}
          value={`${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}`}
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.quillContainer}>
          <QuillEditor editorContentsDelta={editorContentsDelta} />
        </div>
        <div className={styles.quillContainer}>
          <QuillReader readContents={editorContents} />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <NormalButton
          onClick={handleSubmit}
          text="Submit"
          className={styles.btn}
        />
        <NormalButton onClick={goBack} text="Back" className={styles.btn} />
      </div>
    </div>
  );
}
