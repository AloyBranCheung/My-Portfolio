import { useState, useCallback, useEffect } from "react";
const _ = require("lodash");

// This hook returns a boolean, true: if scrolling down, false: if scrolling up
export default function useScrollToggle() {
  // Scroll detection and sticky navbar states
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // wrap callback with debounce so doesn't trigger every scroll
  const onScrollHandler = _.debounce(
    useCallback(() => {
      // current scroll pos
      const currentScrollPos = window.pageYOffset;
      console.log(currentScrollPos);
      console.log(prevScrollPos);

      // Boolean reveal navbar on scroll-up (true) or false
      setIsVisible(
        (prevScrollPos > currentScrollPos &&
          // how many pixels needed to scroll up to trigger effect
          prevScrollPos - currentScrollPos > 70) ||
          // ensures that navbar always shows whenever we are at least 10px of top
          // of page
          currentScrollPos < 10
      );

      // set state to new scroll position
      setPrevScrollPos(currentScrollPos);
    }, [prevScrollPos]),
    100
  );

  useEffect(() => {
    // trigger onScrollHandler when scrolling
    window.addEventListener("wheel", onScrollHandler);

    // clean-up
    return () => window.removeEventListener("wheel", onScrollHandler);
  }, [prevScrollPos, isVisible, onScrollHandler]);

  useEffect(() => {
    // trigger onScrollHandler when scrolling
    window.addEventListener("touchmove", onScrollHandler);

    // clean-up
    return () => window.removeEventListener("touchmove", onScrollHandler);
  }, [prevScrollPos, isVisible, onScrollHandler]);

  return { isVisible, setIsVisible };
}
