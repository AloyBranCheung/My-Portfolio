import React from "react";
import styles from "./NormalButton.module.css";

type Props = {
  text: string;
  className?: string;
  onClick: () => void;
};

export default function NormalButton({ text, className, onClick }: Props) {
  return (
    <button onClick={onClick} className={`${styles.normalButton} ${className}`}>
      {text}
    </button>
  );
}
