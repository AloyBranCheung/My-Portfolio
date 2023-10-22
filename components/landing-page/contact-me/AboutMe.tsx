import styles from "./AboutMe.module.css";
import LinksContainer from "../../UI/LinkContainer/LinksContainer";
import Markdown from "react-markdown";

interface AboutMeProps {
  pageMeta: string;
}

export default function AboutMe({ pageMeta }: AboutMeProps) {
  return (
    <div className={styles.container}>
      <Markdown>{pageMeta}</Markdown>
      <LinksContainer className={styles.links} />
    </div>
  );
}
