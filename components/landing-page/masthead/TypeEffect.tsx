import Typed from "typed.js";
import { useEffect, useRef } from "react";
import styles from "./TypeEffect.module.css";

type Props = {
  className: string;
};

export default function TypeEffect(props: Props) {
  // Ref for Typed.js
  const el = useRef(null);

  // Typed.js boilerplate
  useEffect(() => {
    const options = {
      strings: [
        "Hi, I'm Brandon.",
        "I'm a web developer.",
        "Welcome to my page.",
      ],
      typeSpeed: 70,
      backSpeed: 40,
    };

    const typed = new Typed(el.current!, options);

    // Clean-up
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={`${styles.textWrapper} ${props.className}`}>
      <span ref={el} />
    </div>
  );
}
