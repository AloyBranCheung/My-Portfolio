import NavigationIcon from "@mui/icons-material/Navigation";
import styles from "./ButtonScrollTop.module.css";
import Link from "next/link";
import useScrollToggle from "../../../hooks/useScrollToggle";

export default function ButtonScrollTop() {
  // Scroll hook to toggle button visibility
  const { isVisible: isVisible } = useScrollToggle();
  const scrollButton = !isVisible;

  return (
    <Link href="#">
      <NavigationIcon className={scrollButton ? styles.navIcon : styles.none} />
    </Link>
  );
}
