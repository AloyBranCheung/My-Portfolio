import styles from "./ContactForm.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";

type Props = {
  className: string;
};

export default function ContactForm(props: Props) {
  const nameRef = useRef<any>("");
  const subjectRef = useRef<any>("");
  const data: any = {
    name: nameRef.current!.value,
    subject: subjectRef.current!.value,
  };

  const [state, handleSubmit] = useForm("mqkjzzyg", data);

  return (
    <>
      {state.succeeded && (
        <>
          <h1>Thank you for your submission :D.</h1>
        </>
      )}
      {!state.succeeded && (
        <div className={props.className}>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.nameContainer}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" />
              <ValidationError
                prefix="Your name"
                field="name"
                errors={state.errors}
              />
            </div>

            <div className={styles.emailContainer}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
              <ValidationError
                prefix="Your email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className={styles.subjectContainer}>
              <label htmlFor="subject">Subject </label>
              <input id="subject" name="subject" type="text" />
            </div>

            <div className={styles.messageContainer}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" />
              <ValidationError
                prefix="Your message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
