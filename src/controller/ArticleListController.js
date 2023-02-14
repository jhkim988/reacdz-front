import { useNavigate } from "react-router-dom";
import axios from "axios";

const ArticleListController = ({ state, dispatch }) => {
    const navigate = useNavigate();
    const clickView = (e) => {
        navigate(`/articleView/${e.currentTarget.dataset.id}`);
    };

    const getArticleList = () => {
        axios
          .get(`/article/list`)
          .then((response) =>
            dispatch({ type: "setArticleList", articleList: response.data.data })
          );
      };

    return { clickView, getArticleList }
}

export default ArticleListController;