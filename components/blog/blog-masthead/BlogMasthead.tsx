import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import styles from "./BlogMasthead.module.css";
import NormalButton from "../../UI/NormalButton";
import { Parallax } from "react-scroll-parallax";
import LoginModal from "../login-modal/LoginModal";
import useFirebaseAuth from "../../../hooks/useFirebaseAuth";
import CreateBlogModal from "../create-blog/CreateBlogModal";
import { v4 as uuidv4 } from "uuid";

export default function BlogMasthead() {
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

  // login with firebase
  const submitLoginHandler = (email: string, password: string) => {
    login(email, password);
    handleClose();
  };

  // logout of firebase
  const logoutHandler = () => {
    logout();
  };

  // create a blog
  const createBlogSubmitHandler = (
    title: string,
    imageUrl: string,
    textArea: string,
    date: string
  ) => {
    const _id = uuidv4();
    writeBlogData(title, textArea, imageUrl, date, _id);
    handleClose();
  };

  return (
    <section className={styles.blogMasthead}>
      {authCtx.isLoggedIn ? (
        <CreateBlogModal
          isOpen={isOpen}
          handleClose={handleClose}
          submitHandler={createBlogSubmitHandler}
        />
      ) : (
        <LoginModal
          isOpen={isOpen}
          handleClose={handleClose}
          submitHandler={submitLoginHandler}
        />
      )}

      <div>
        <Parallax speed={-10}>
          <h1>My Personal Blog</h1>
          <p>a little something for me to share whatever I want</p>
          <div className={styles.buttonContainer}>
            {authCtx.isLoggedIn ? (
              <>
                <NormalButton
                  className={styles.loginButton}
                  onClick={openLoginModal}
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
        </Parallax>
      </div>
    </section>
  );
}
