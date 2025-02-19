import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PageTitleHandler = ({ children, title }) => {
  const { category } = useParams();

  useEffect(() => {
    document.title = typeof title === "function" ? title({ category }) : title;
  }, [title, category]);

  return children;
};

export default PageTitleHandler;
