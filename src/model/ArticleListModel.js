import { useReducer } from "react";
import ArticleListController from './../controller/ArticleListController';

const ACTION = Object.freeze({
    setArticleList: (state, action) => action.articleList,
})

const reducer = (state, action) => ACTION[action.type] ? ACTION[action.type](state, action) : state;

const ArticleListModel = () => {
    const [state, dispatch] = useReducer(reducer, []);
    return [state, ArticleListController({ state, dispatch })];
}

export default ArticleListModel;