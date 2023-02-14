import React from "react";

const ArticleCreateForm = ({ articleController: { articleCreateSubmit, changeArticleForm }}) => {
  return (
    <>
      <form onSubmit={articleCreateSubmit}>
        <input type="text" placeholder="TITLE" name='title' onChange={changeArticleForm}/>
        <textarea placeholder="CONTENT" name='content' onChange={changeArticleForm}/>
        <input type="submit" value="등록"/>
        <input type="reset" value="초기화"/>
      </form>
    </>
  );
};

export default ArticleCreateForm;
