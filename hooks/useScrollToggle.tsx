import { useState, useCallback, useEffect } from "react";
const _ = require("lodash");

// This hook returns a boolean, true: if scrolling down, false: if scrolling up
export default function useScrollToggle() {
  // Scroll detection and sticky navbar states
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const navVisible = _.debounce(
    useCallback(() => {
      const currentPos = window.pageYOffset;

      if (prevScrollPos > currentPos) {
        setIsVisible(true);
      } else if (prevScrollPos < currentPos) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollPos(currentPos);
    }, [prevScrollPos]),
    100
  );

  useEffect(() => {
    window.addEventListener("scroll", navVisible);
    return () => {
      window.removeEventListener("scroll", navVisible);
    };
  });

  return { isVisible };
}
