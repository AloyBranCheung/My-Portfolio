import React from "react";
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
  loginHandler: () => void;
};

export default function LoginModal({
  isOpen,
  handleClose,
  loginHandler,
}: Props) {
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
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            className={styles.email}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="text"
            fullWidth
            variant="standard"
            className={styles.password}
          />
        </DialogContent>
        <DialogActions>
          <NormalButton
            className={styles.modalButtons}
            text="Cancel"
            onClick={handleClose}
          />
          <NormalButton
            className={styles.modalButtons}
            text="Login"
            onClick={loginHandler}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
