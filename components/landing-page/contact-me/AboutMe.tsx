import styles from "./AboutMe.module.css";
import LinksContainer from "../../UI/LinkContainer/LinksContainer";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <p>
        Hi, I&apos;m Brandon! I&apos;m a passionate web developer interested in
        learning new technologies and building amazing digital experiences.
        Currently, I&apos;m working on a Three.js portfolio v2 and Three.js
        game.
      </p>
      <p>
        A fun fact about me is that in 2018 I paddled in the Club Crews World
        Championship for my Dragonboat team (not to be confused with
        DragonballZ) in Hungary and our team received eight gold medals.
      </p>
      <p>Let&apos;s connect!</p>
      <LinksContainer className={styles.links} />
    </div>
  );
}
