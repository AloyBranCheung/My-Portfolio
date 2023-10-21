import styles from "./ContactForm.module.css";
// zod
import { z } from "zod";
// formspree
import { useForm as useFormspree, ValidationError } from "@formspree/react";
// mui
import { ButtonBase } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
// react-hook-form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// validator
import contactFormValidationSchema from "../../../validators/contact-form-validator";

export default function ContactForm() {
  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const [state, handleSubmit] = useFormspree("mqkjzzyg");

  return (
    <div className={styles.container}>
      {state.succeeded && (
        <div className={styles.thanks}>
          <h1>Thank you for your submission :D.</h1>
        </div>
      )}
      {!state.succeeded && (
        <div className={styles.formWrapper}>
          <form
            onSubmit={handleSubmitForm(handleSubmit)}
            className={styles.formContainer}
          >
            <div className={styles.nameContainer}>
              <label htmlFor="name">Name</label>
              <input className={styles.inputArea} {...register("name")} />
              {errors.name && (
                <p className={styles.errorMsg}>{errors.name.message}</p>
              )}
            </div>

            <div className={styles.emailContainer}>
              <label htmlFor="email">Email</label>
              <input className={styles.inputArea} {...register("email")} />
              {errors.email && (
                <p className={styles.errorMsg}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.subjectContainer}>
              <label htmlFor="subject">Subject </label>
              <input className={styles.inputArea} {...register("subject")} />
              {errors.subject && (
                <p className={styles.errorMsg}>{errors.subject.message}</p>
              )}
            </div>

            <div className={styles.messageContainer}>
              <label htmlFor="message">Message</label>
              <textarea className={styles.inputArea} {...register("message")} />
              {errors.message && (
                <p className={styles.errorMsg}>{errors.message.message}</p>
              )}
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
