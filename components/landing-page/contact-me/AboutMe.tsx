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
      {/* <h1>About Me</h1>
      <p>
        Hi, I&apos;m Brandon! I&apos;m a passionate web developer interested in
        learning new technologies and building amazing digital experiences.
        Currently, I&apos;m working on a Three.js portfolio v2 and Three.js
        game.
      </p>
      <p>
        I have professional experience in React/Next.js, Strapi, MUI Components,
        Auth0, as well as some experience in the backend with Python/FastAPI,
        Postgres/SQL, AWS/Terraform. You can find my professional experience if
        you click my resume below :&#41;.
      </p>
      <p>
        A fun fact about me is that in 2018 I paddled in the Club Crews World
        Championship for my Dragonboat team (not to be confused with
        DragonballZ) in Hungary and our team received eight gold medals.
      </p>
      <p>Let&apos;s connect!</p> */}
      <LinksContainer className={styles.links} />
    </div>
  );
}
