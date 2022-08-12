import styles from "./QuillEditor.module.css";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function QuillReader({ readContents }) {
  const [quillValue, setQuillValue] = useState("");
  useEffect(() => {
    setQuillValue(readContents);
  }, [readContents]);
  return (
    <div className={styles.container}>
      <ReactQuill
        readOnly={true}
        theme="snow"
        value={quillValue}
        modules={{ toolbar: false }}
        style={{
          padding: "2% 0",
          border: "none !important",
          backgroundColor: "var(--secondary-color)",
        }}
        className={styles.reader}
      />
    </div>
  );
}
