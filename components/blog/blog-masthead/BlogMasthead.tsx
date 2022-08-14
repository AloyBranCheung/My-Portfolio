import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import styles from "./BlogMasthead.module.css";
import NormalButton from "../../UI/NormalButton";
import { Parallax } from "react-scroll-parallax";
import LoginModal from "../login-modal/LoginModal";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function BlogMasthead() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { login, logout, writeBlogData } = useFirebaseAuth();
  const authCtx = useContext(AuthContext);

  // close login modal
  const handleClose = () => {
    setIsOpen(false);
  };

  // open login modal
  const openLoginModal = () => {
    setIsOpen(true);
  };

  // navigate to createBlog page
  const createBlog = () => {
    router.push("/createBlog");
  };

  // login with firebase
  const submitLoginHandler = (email: string, password: string) => {
    login(email, password);
    handleClose();
  };

  // logout of firebase
  const logoutHandler = () => {
    logout();
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.blogMasthead}>
        {!authCtx.isLoggedIn && (
          <LoginModal
            isOpen={isOpen}
            handleClose={handleClose}
            submitHandler={submitLoginHandler}
          />
        )}

        <div className={styles.blogText}>
          <h1>My Personal Blog</h1>
          <p>a little something for me to share whatever I want</p>
          <div className={styles.buttonContainer}>
            {authCtx.isLoggedIn ? (
              <>
                <NormalButton
                  className={styles.loginButton}
                  onClick={createBlog}
                  text="Create a blog"
                />
                <NormalButton
                  className={styles.loginButton}
                  onClick={logoutHandler}
                  text="Logout"
                />
              </>
            ) : (
              <NormalButton
                className={styles.loginButton}
                onClick={openLoginModal}
                text="Login"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
