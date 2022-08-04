import React, { SyntheticEvent, useRef } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./LoginModal.module.css";
import NormalButton from "../../UI/NormalButton";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  submitHandler: (email: string, password: string) => void;
};

export default function LoginModal({
  isOpen,
  handleClose,
  submitHandler,
}: Props) {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const formSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    submitHandler(email, password);
  };

  return (
    <div>
      <Dialog
        className={styles.modalContainer}
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle className={styles.title}>Login</DialogTitle>
        <DialogContent>
          <DialogContentText className={styles.subTitle}>
            My blog content management system.
          </DialogContentText>
          <form onSubmit={formSubmit}>
            <TextField
              inputRef={emailRef}
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              className={styles.email}
              required={true}
            />
            <TextField
              inputRef={passwordRef}
              type="password"
              margin="dense"
              id="password"
              label="Password"
              fullWidth
              variant="standard"
              className={styles.password}
              required={true}
            />
            <DialogActions>
              <NormalButton
                className={styles.modalButtons}
                text="Cancel"
                onClick={handleClose}
              />
              <NormalButton
                className={styles.modalButtons}
                text="Login"
                type="submit"
              />
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
