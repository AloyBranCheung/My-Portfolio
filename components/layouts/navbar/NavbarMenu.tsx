import Link from "next/link";
import styles from "./NavbarMenu.module.css";

type Props = {
  menuState: boolean;
  onMenuClick: () => void;
};

export default function NavbarMenu({ menuState, onMenuClick }: Props) {
  return (
    <div className={`${styles.menuList} ${menuState && styles.menuListActive}`}>
      <ul>
        <li className={styles.bounceEffect}>
          <Link href="/#projects">
            <a onClick={onMenuClick}>Projects</a>
          </Link>
        </li>
        <li className={styles.bounceEffect1}>
          <Link href="/#contactMe">
            <a onClick={onMenuClick}>About Me</a>
          </Link>
        </li>
        <li className={styles.bounceEffect2}>
          <Link href="/#contactMe">
            <a onClick={onMenuClick}>Contact Me</a>
          </Link>
        </li>
        {/* <li className={styles.bounceEffect2}>
          <Link href="/blog">
            <a onClick={onMenuClick}>Blog</a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
