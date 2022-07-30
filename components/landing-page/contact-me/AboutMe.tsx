import Link from "next/link";
import styles from "./AboutMe.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {
  className: string;
};

export default function AboutMe(props: Props) {
  return (
    <div className={props.className}>
      <h1>Hi, my name is Brandon.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className={styles.linksContainer}>
        <Link href="https://github.com/AloyBranCheung">
          <a target="_blank">
            <GitHubIcon sx={{ fontSize: 30 }} className={styles.link} />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/aloysiuscheung/">
          <a target="_blank">
            <LinkedInIcon sx={{ fontSize: 30 }} className={styles.link} />
          </a>
        </Link>
        {
          // Link to google drive pdf
        }
        <Link href="">
          <a className={styles.resume}>Resume</a>
        </Link>
      </div>
    </div>
  );
}
