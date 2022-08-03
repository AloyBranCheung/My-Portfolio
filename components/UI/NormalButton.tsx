import React from "react";
import styles from "./NormalButton.module.css";

type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

export default function NormalButton({
  text,
  className,
  onClick,
  type,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.normalButton} ${className}`}
    >
      {text}
    </button>
  );
}
