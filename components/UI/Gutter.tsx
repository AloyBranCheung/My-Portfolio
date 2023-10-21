import styles from "./Gutter.module.css";
import React from "react";

interface GutterProps {
  children: React.ReactNode;
}

export default function Gutter({ children }: GutterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.gutter}>{children}</div>
    </div>
  );
}
