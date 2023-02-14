const ArticleListItem = ({ article: { id, title, userId }, articleListController: { clickView } }) => {
  return (
    <>
      <tr data-id={id} onClick={clickView}>
        <td>{title}</td>
        <td>{userId}</td>
      </tr>
    </>
  );
};

export default ArticleListItem;
