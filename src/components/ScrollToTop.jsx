import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the window scroll position across route changes;
// reset to the top whenever the path changes. In-page anchors (featured
// properties, gallery) use scrollIntoView directly and are unaffected.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
