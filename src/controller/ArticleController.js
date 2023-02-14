import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ArticleController = ({ state, dispatch }) => {
  const navigate = useNavigate();

  const getArticle = (id) => {
    dispatch({ type: "setArticle", article: null });
    axios
      .get(`/article/${id}`)
      .then((response) =>
        dispatch({ type: "setArticle", article: response.data.data })
      );
  };

  const articleCreateSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios.post("/article", state.articleForm).then((response) => {
        if (response.data.data) {
          if (response.data.data) {
            alert("글이 등록됐습니다.");
            navigate("/");  
          }
        } else {
          alert("네트워크 오류");
        }
      });
    },
    [state.articleForm]
  );

  const changeArticleForm = useCallback((e) => {
    dispatch({
      type: "setArticleForm",
      inputType: e.currentTarget.name,
      inputValue: e.currentTarget.value,
    });
  }, []);

  const articleDelete = useCallback((id) => {
    axios
      .delete(`/article/${id}`)
      .then((response) => {
        alert("삭제되었습니다.");
        navigate("/");
      })
      .catch(() => {
        alert("실패");
      });
  }, []);

  const articleUpdateInit = (id) => {
    axios.get(`/article/${id}`).then((response) => {
      dispatch({ type: "setArticleFormAll", articleForm: response.data.data });
    });
  };

  const articleUpdateSubmit = (e) => {
    e.preventDefault();
    const { id } = e.currentTarget.dataset;
    console.log(id);
    axios.put(`/article/${id}`, state.articleForm).then((response) => {
      if (response.data.data) {
        alert("수정되었습니다.");
        navigate(`/articleView/${id}`);
      } else {
        alert("네트워크 오류");
      }
    });
  };

  return {
    getArticle,
    articleUpdateInit,
    articleDelete,
    changeArticleForm,
    articleCreateSubmit,
    articleUpdateSubmit,
  };
};

export default ArticleController;
