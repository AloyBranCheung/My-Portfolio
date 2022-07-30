import styles from "./Navbar.module.css";
import NavbarMenu from "./NavbarMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/router";
import useScrollToggle from "../../../hooks/useScrollToggle";

export default function Navbar() {
  const router = useRouter();

  // Responsive drop-down menu for mobile
  const [menuToggle, setMenuToggle] = useState(false);

  const menuClickHandler = () => {
    setMenuToggle((prevState) => !prevState);
  };

  // True/false scroll toggle custom hook
  const { isVisible: navIsVisible } = useScrollToggle();

  // Brand Title navigate home
  const brandTitleClick = () => {
    router.push("/");
  };

  // ***************************************************************************
  return (
    <nav
      className={`${styles.navbar} ${!navIsVisible && styles.navbarScrolling}`}
    >
      <div onClick={brandTitleClick} className={styles.brandTitle}>
        Brandon Cheung
      </div>
      <NavbarMenu menuState={menuToggle} onMenuClick={menuClickHandler} />
      <MenuIcon onClick={menuClickHandler} className={styles.navIcon} />
    </nav>
  );
}
