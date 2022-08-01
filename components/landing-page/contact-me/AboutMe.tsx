import styles from "./AboutMe.module.css";
import LinksContainer from "../../UI/LinkContainer/LinksContainer";

type Props = {
  className: string;
};

export default function AboutMe(props: Props) {
  return (
    <div className={props.className}>
      <h1>About Me</h1>
      <p>
        Born in Toronto, raised in Hong Kong. I believe that to succeed in this
        industry, one must always be learning and adapting quickly. In my spare
        time, I like to lift heavy objects and put them down repetitively in a
        small room with people of similar interests. Oh, I also rollerblade and
        play games. Currently, I am learning to digitally draw.
      </p>
      <br></br>
      <p>
        A fun fact about me is that in 2018 I paddled in the Club Crews World
        Championship for my Dragonboat team (not to be confused with
        DragonballZ) in Hungary and our team received eight gold medals.
      </p>
      <br></br>
      <p>Let&apos;s connect!</p>
      <LinksContainer className={styles.links} />
    </div>
  );
}
