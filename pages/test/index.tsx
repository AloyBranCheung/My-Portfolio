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
      {!state.succeeded && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email Address</label>
          <input id="email" name="email" type="email" />
          <ValidationError
            prefix="Your email"
            field="email"
            errors={state.errors}
          />
          <label htmlFor="name">Your name</label>
          <input ref={nameRef} id="name" name="name" type="text" />
          <ValidationError
            prefix="Your name"
            field="name"
            errors={state.errors}
          />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      )}

      {state.succeeded && <p>Thank you for your submission.</p>}
    </div>
  );
}
