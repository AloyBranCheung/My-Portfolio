import styles from "./QuillEditor.module.css";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function QuillReader({ readContents }) {
  const [quillValue, setQuillValue] = useState("");
  useEffect(() => {
    setQuillValue(readContents);
  }, [readContents]);
  return (
    <div className={styles.container}>
      <ReactQuill
        readOnly={true}
        value={quillValue}
        modules={{ toolbar: false }}
        style={{ padding: "5% 0", lineHeight: "3rem" }}
      />
    </div>
  );
}
