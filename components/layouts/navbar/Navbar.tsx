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

  // True/false scroll toggle custom hook
  const { isVisible: navIsVisible } = useScrollToggle();

  const menuClickHandler = () => {
    setMenuToggle((prevState) => !prevState);
  };

  // Brand Title navigate home
  const brandTitleClick = () => {
    menuClickHandler();
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
      <div className={styles.navIcon}>
        <MenuIcon sx={{ fontSize: "2rem" }} onClick={menuClickHandler} />
      </div>
    </nav>
  );
}
