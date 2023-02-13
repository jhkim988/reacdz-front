const ArticleListItem = ({ articleId, title, articleController }) => {
  return (
    <>
      <tr data-id={articleId} onClick={articleController.clickView}>
        <td>{title}</td>
        <td>작성자</td>
      </tr>
    </>
  );
};

export default ArticleListItem;
