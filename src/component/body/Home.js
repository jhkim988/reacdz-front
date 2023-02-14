import { useEffect } from "react";
import ArticleListItem from "./ArticleListItem";
import Button from "./../matarial/Button";
import ArticleListModel from './../../model/ArticleListModel';

const Home = () => {
  const [articleListModel, articleListController] = ArticleListModel();
  const { getArticleList } = articleListController;
  useEffect(getArticleList, []);
  return (
    <>
      <p>게시글 목록</p>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {articleListModel.map((article) => (
            <ArticleListItem
              key={`articleListItem#${article.id}`}
              article={article}
              articleListController={articleListController}
            />
          ))}
        </tbody>
      </table>
      <Button url="/articleCreateForm" text="글 쓰기" />
    </>
  );
};

export default Home;
