import styles from "./SecondaryCard.module.css";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function SecondaryCard(props: Props) {
  return (
    <div className={`${styles.cardContainer} ${styles.className}`}>
      {props.children}
    </div>
  );
}
