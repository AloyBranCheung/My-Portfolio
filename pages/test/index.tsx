import styles from "./index.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

export default function Test() {
  const nameRef = useRef<any>("");
  const name = nameRef.current!.value;

  const data: any = {
    name: name,
    subject: "this is a test",
  };

  const [state, handleSubmit] = useForm("mqkjzzyg", data);

  return (
    <div className={styles.test}>
      <h1>Hello World</h1>
    </div>
  );
}
