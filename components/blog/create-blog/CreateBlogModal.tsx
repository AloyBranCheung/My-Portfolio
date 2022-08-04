import React, { SyntheticEvent, useRef } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import NormalButton from "../../UI/NormalButton";
import styles from "./CreateBlogModal.module.css";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  submitHandler: (
    email: string,
    password: string,
    textArea: string,
    date: string
  ) => void;
};

export default function LoginModal({
  isOpen,
  handleClose,
  submitHandler,
}: Props) {
  const titleRef = useRef<HTMLInputElement>();
  const imgUrlRef = useRef<HTMLInputElement>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const formSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const title = titleRef.current!.value;
    const imageUrl = imgUrlRef.current!.value;
    const textArea = textareaRef.current!.value;
    const date = dateRef.current!.value;
    submitHandler(title, imageUrl, textArea, date);
  };

  const date = new Date();
  const todayDate = date.toISOString().substring(0, 10);

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Create a blog</DialogTitle>
        <DialogContent>
          <form onSubmit={formSubmit}>
            <TextField
              inputRef={titleRef}
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              required={true}
            />
            <input ref={dateRef} defaultValue={todayDate} />
            <div className={styles.textareaContainer}>
              <textarea
                className={styles.textArea}
                ref={textareaRef}
                required
              />
            </div>
            <TextField
              inputRef={imgUrlRef}
              type="url"
              margin="dense"
              id="imgUrlRef"
              label="Image URL"
              fullWidth
              variant="standard"
              required={true}
            />
            <DialogActions>
              <NormalButton text="Cancel" onClick={handleClose} />
              <NormalButton text="Submit" type="submit" />
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
