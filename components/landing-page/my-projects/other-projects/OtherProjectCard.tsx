import styles from "./OtherProjectCard.module.css";
import SecondaryCard from "../../../UI/SecondaryCard";
import IconLink from "./IconLink";
import OtherProjectDescription from "./OtherProjectDescription";

type Props = {
  cardStyle: string;
  title: string;
  description: string;
  descriptionStyle: string;
  githubUrl: string;
  deployUrl: string;
  techStack: string;
};
export default function OtherProjectCard(props: Props) {
  return (
    <div className={`${props.cardStyle} ${styles.card}`}>
      <IconLink githubUrl={props.githubUrl} deployUrl={props.deployUrl} />
      <h1 className={styles.title}>{props.title}</h1>
      <OtherProjectDescription
        text={props.description}
        className={`${props.descriptionStyle} ${styles.description}`}
      />
      <p className={styles.techStack}>{props.techStack}</p>
    </div>
  );
}
