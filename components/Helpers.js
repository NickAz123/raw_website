import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      const el = ref?.current;

      if (!el || el.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const animateBurger = (isMenuOpen, ref) => {
  let menuBtn = ref.current;
  console.log(isMenuOpen);
  if (isMenuOpen) {
    menuBtn.classList.add("open");
  } else {
    menuBtn.classList.remove("open");
  }
};

export { animateBurger, useClickOutside };
