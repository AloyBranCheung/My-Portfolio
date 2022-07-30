import styles from "./LinksContainer.module.css";
import Link from "next/link";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {
  className: string;
};

export default function LinksContainer(props: Props) {
  return (
    <div className={`${styles.linkContainer} ${props.className}`}>
      <Link href="https://github.com/AloyBranCheung">
        <a target="_blank">
          <GitHubIcon className={styles.icon} sx={{ fontSize: 30 }} />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/aloysiuscheung/">
        <a target="_blank">
          <LinkedInIcon className={styles.icon} sx={{ fontSize: 30 }} />
        </a>
      </Link>
      <Link href="https://1drv.ms/b/s!Al5ugnacF4jkqMoAeZrLmoJZ1rT1lQ">
        <a target="_blank">
          <ArticleIcon className={styles.icon} sx={{ fontSize: 30 }} />
        </a>
      </Link>
    </div>
  );
}
