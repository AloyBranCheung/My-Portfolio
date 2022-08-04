import Image from "next/image";
import styles from "./FeaturedProject.module.css";
import { v4 as uuidv4 } from "uuid";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";
import SecondaryCard from "../../../UI/SecondaryCard";

type Props = {
  className: string;
  imgSrc: any;
  heading: string;
  titleProject: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  deployUrl: string;
  redirectUrl: string;
};

export default function FeaturedProject(props: Props) {
  return (
    <li className={`${styles.gridContainer} ${props.className}`}>
      <Link href={props.redirectUrl} className={styles.imageWrapper}>
        <a target="_blank" className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={props.imgSrc}
            alt="alt-picture"
          />
        </a>
      </Link>

      <div className={styles.projectContent}>
        <div className={styles.title}>
          <h2>{props.heading}</h2>
          <h1>{props.titleProject}</h1>
        </div>

        <div className={styles.projectDescription}>
          <SecondaryCard className={styles.descriptionCard}>
            {props.description}
          </SecondaryCard>
        </div>

        <ul className={styles.techStack}>
          {props.techStack.map((el) => {
            return (
              <li className={styles.techs} key={uuidv4()}>
                {el}
              </li>
            );
          })}
        </ul>

        <div className={styles.links}>
          <Link href={props.githubUrl}>
            <a target="_blank" className={styles.githubIcon}>
              <GitHubIcon sx={{ fontSize: "3rem" }} />
            </a>
          </Link>
          <Link href={props.deployUrl}>
            <a target="_blank" className={styles.launchIcon}>
              <LaunchIcon sx={{ fontSize: "3rem" }} />
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
}
