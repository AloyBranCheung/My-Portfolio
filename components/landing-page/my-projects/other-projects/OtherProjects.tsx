import styles from "./OtherProjects.module.css";
import OtherProjectCard from "./OtherProjectCard";
import { OtherProjects as OtherProjectsType } from "../../../../types/project-types";

interface OtherProjectsProps {
  otherProjects: OtherProjectsType[];
}

export default function OtherProjects({ otherProjects }: OtherProjectsProps) {
  const otherProjectsCards = otherProjects.map((otherProjectsObj) => (
    <OtherProjectCard
      key={`${otherProjectsObj.order}-${otherProjectsObj.projectTitle}`}
      cardStyle={`${styles.card1}`}
      descriptionStyle={styles.description}
      title={otherProjectsObj.projectTitle}
      description={otherProjectsObj.projectDescription}
      githubUrl={otherProjectsObj.githubUrl}
      deployUrl={otherProjectsObj.deployUrl}
      techStack={otherProjectsObj.techStack}
    />
  ));

  return (
    <li className={styles.otherProjectsContainer}>{otherProjectsCards}</li>
  );
}
