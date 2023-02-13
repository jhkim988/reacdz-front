import axios from "axios";
import { useNavigate } from "react-router-dom";

const ArticleController = ({ state, dispatch }) => {
  const navigate = useNavigate();
  const clickView = (e) => {
    console.log(e.currentTarget);
    navigate(`/articleView/${e.currentTarget.dataset.id}`);
  };

  const getArticle = (id) => {
    dispatch({ type: "setArticle", article: null });
    axios
      .get(`/article/${id}`)
      .then((response) =>
        dispatch({ type: "setArticle", article: response.data.data })
      );
  };

  const getArticleList = () => {
    axios
      .get(`/article/list`)
      .then((response) =>
        dispatch({ type: "setArticleList", articleList: response.data.data })
      );
  };
  return { clickView, getArticle, getArticleList };
};

export default ArticleController;
