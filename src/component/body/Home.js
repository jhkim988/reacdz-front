import { useEffect } from "react";
import ArticleListItem from "./ArticleListItem";

const Home = ({ articleController, articleModel }) => {
  useEffect(articleController.getArticleList, []);
  return (
    <>
      <p>게시글 목록</p>
      <table>
        <thead>
          <th>제목</th>
          <th>작성자</th>
        </thead>
        <tbody>
          {articleModel.articleList.map((article) => (
            <ArticleListItem
              key={`articleListItem#${article.id}`}
              articleId={article.id}
              title={article.title}
              articleController={articleController}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
