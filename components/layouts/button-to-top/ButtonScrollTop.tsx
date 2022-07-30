import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import styles from "./ButtonScrollTop.module.css";
import Link from "next/link";
import useScrollToggle from "../../../hooks/useScrollToggle";
import { useEffect } from "react";

export default function ButtonScrollTop() {
  // Scroll hook to toggle button visibility
  const { isVisible: isVisible } = useScrollToggle();
  const scrollButton = !isVisible;

  return (
    <Link href="#">
      <ExpandCircleDownIcon
        className={scrollButton ? styles.navIcon : styles.none}
        fontSize="large"
      />
    </Link>
  );
}
