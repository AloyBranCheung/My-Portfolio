// icon folder and link to deployment/github
import Link from "next/link";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import LaunchIcon from "@mui/icons-material/Launch";
import styles from "./IconLink.module.css";

type Props = {
  githubUrl: string;
  deployUrl: string;
};

export default function IconLink(props: Props) {
  return (
    <div className={styles.linkContainer}>
      <Link href={props.githubUrl}>
        <a target="_blank">
          <FolderCopyIcon className={styles.icon} sx={{ fontSize: 25 }} />
        </a>
      </Link>
      <Link href={props.deployUrl}>
        <a target="_blank">
          <LaunchIcon className={styles.icon} sx={{ fontSize: 25 }} />
        </a>
      </Link>
    </div>
  );
}
