import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../matarial/Button";

const ArticleView = ({ articleModel, articleController }) => {
  const params = useParams();
  useEffect(() => articleController.getArticle(params.id), []);
  return (
    <>
      {articleModel.article == null ? (
        <>
          <p>로딩중</p>
        </>
      ) : (
        <>
          <h3>{articleModel.article.title}</h3>
          <p>{articleModel.article.content}</p>
          <Button
            url={`/articleUpdateForm/${articleModel.article.id}`}
            text="수정"
          />
          <Button text="삭제" args={params.id} callback={articleController.articleDelete}/>
        </>
      )}
    </>
  );
};

export default ArticleView;
