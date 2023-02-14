import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticleUpdateForm = ({ articleModel: { articleForm }, articleController: { articleUpdateSubmit, changeArticleForm, articleUpdateInit }}) => {
  const { id } = useParams();
  useEffect(() => articleUpdateInit(id), [])
  return (
    <>
      <form data-id={id} onSubmit={articleUpdateSubmit}>
        <input
          type="text"
          placeholder="TITLE"
          name="title"
          onChange={changeArticleForm}
          value={articleForm.title}
        />
        <textarea
          placeholder="CONTENT"
          name="content"
          onChange={changeArticleForm}
          value={articleForm.content}
        />
        <input type="submit" value="등록" />
        <input type="reset" value="초기화" />
      </form>
    </>
  );
};

export default ArticleUpdateForm;
