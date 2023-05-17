import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
function useScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.key]);
}

export default useScrollToTop;
