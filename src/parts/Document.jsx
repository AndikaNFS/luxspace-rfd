import useScrollToTop from "../helpers/hooks/useScrollToTop";
import useModalDOM from "../helpers/hooks/useModalDOM";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";

function Document({ children }) {
  useScrollToTop();
  useModalDOM();
  useScrollAnchor();
  return children;
}

export default Document;
