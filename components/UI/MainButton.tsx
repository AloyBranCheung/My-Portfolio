import styles from "./MainButton.module.css";

type Props = {
  text: string;
  clickHandler: () => void;
  className: string;
};

export default function MainButton(props: Props) {
  return (
    <button
      className={`${props.className} ${styles.mainButton}`}
      onClick={props.clickHandler}
    >
      {props.text}
    </button>
  );
}
