import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Lotus Gamehub`;
  }, [title]);
};

export default useTitle;
