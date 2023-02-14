import { useReducer } from "react";
import ArticleController from "./../controller/ArticleController";

const ACTION = Object.freeze({
  setArticle: (state, action) => ({ ...state, article: action.article }),
  setArticleForm: (state, action) => ({
    ...state,
    articleForm: {
      ...state.articleForm,
      [action.inputType]: action.inputValue,
    },
  }),
  setArticleFormAll: (state, action) => ({
    ...state,
    articleForm: action.articleForm,
  }),
});


const reducer = (state, action) =>
  ACTION[action.type] ? ACTION[action.type](state, action) : state;

const ArticleModel = () => {
  const [state, dispatch] = useReducer(reducer, {
    article: null,
    articleForm: { title: "", content: "" },
  });
  return [state, ArticleController({ state, dispatch })];
};

export default ArticleModel;
