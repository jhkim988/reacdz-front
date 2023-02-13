import { useReducer } from "react";
import ArticleController from './../controller/ArticleController';

const ACTION = {
  setArticle: (state, action) => ({ ...state, article: action.article }),
  setArticleList: (state, action) => ({
    ...state,
    articleList: action.articleList,
  }),
};

Object.freeze(ACTION);

const reducer = (state, action) =>
  ACTION[action.type] ? ACTION[action.type](state, action) : state;

const ArticleModel = () => {
  const [state, dispatch] = useReducer(reducer, {
    article: null,
    articleList: [],
  });
  return [state, ArticleController({ state, dispatch })];
};

export default ArticleModel;
