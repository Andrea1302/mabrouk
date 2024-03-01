// animationUtils.js
export const handleScrollAnimation = (ref, animationClass) => {
  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const isPartiallyVisibleVertically =
        rect.top < windowHeight && rect.bottom >= 0;

      if (isPartiallyVisibleVertically) {
        ref.current.classList.add(animationClass);
      } else {
        ref.current.classList.remove(animationClass);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
