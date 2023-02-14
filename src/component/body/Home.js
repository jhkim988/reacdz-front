import { useEffect } from "react";
import ArticleListItem from "./ArticleListItem";
import CustomButton from "./../matarial/CustomButton";
import ArticleListModel from './../../model/ArticleListModel';

const Home = () => {
  const [articleListModel, articleListController] = ArticleListModel();
  const { getArticleList } = articleListController;
  useEffect(getArticleList, []);
  return (
    <>
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
      <CustomButton url="/articleCreateForm" text="글 쓰기" />
    </>
  );
};

export default Home;
