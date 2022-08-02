import React from "react";
import styles from "./Card.module.css";

type Props = {
  className?: string;
  children: JSX.Element;
};

export default function Card({ className, children }: Props) {
  return (
    <div className={`${className} ${styles.cardContainer}`}>{children}</div>
  );
}
