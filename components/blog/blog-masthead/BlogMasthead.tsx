import React, { useState } from "react";
import styles from "./BlogMasthead.module.css";
import NormalButton from "../../UI/NormalButton";
import { Parallax } from "react-scroll-parallax";
import LoginModal from "../login-modal/LoginModal";

export default function BlogMasthead() {
  const [isOpen, setIsOpen] = useState(false);

  // close login modal
  const handleClose = () => {
    setIsOpen(false);
  };

  // open login modal
  const openLoginModal = () => {
    setIsOpen(true);
  };

  // login with firebase
  const loginHandler = () => {};

  return (
    <section className={styles.blogMasthead}>
      <LoginModal
        isOpen={isOpen}
        handleClose={handleClose}
        loginHandler={loginHandler}
      />
      <div>
        <Parallax speed={-10}>
          <h1>My Personal Blog</h1>
          <p>A little something for me to rant</p>
          <div className={styles.buttonContainer}>
            <NormalButton
              className={styles.loginButton}
              onClick={openLoginModal}
              text="Login"
            />
          </div>
        </Parallax>
      </div>
    </section>
  );
}
