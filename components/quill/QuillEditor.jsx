import styles from "./QuillEditor.module.css";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

export default function QuillEditor({ editorContentsDelta }) {
  const [quillValue, setQuillValue] = useState();

  const handleChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
    editorContentsDelta(editor.getContents());
  };

  return (
    <div className={styles.container}>
      <ReactQuill
        className={styles.editor}
        theme="snow"
        value={quillValue}
        onChange={handleChange}
        modules={{
          toolbar: toolbarOptions,
        }}
        style={{ backgroundColor: "white", height: "100%" }}
      />
    </div>
  );
}
