import styles from "./Footer.module.css";
import Link from "next/link";
import LinksContainer from "../../UI/LinkContainer/LinksContainer";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <Link href="https://github.com/AloyBranCheung/My-Portfolio">
        <a target="_blank" className={styles.header}>
          <h3>Made with love by Brandon Cheung 🐢</h3>
        </a>
      </Link>
      <LinksContainer className={styles.links} />
    </footer>
  );
}