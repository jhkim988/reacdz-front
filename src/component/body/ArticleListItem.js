const ArticleListItem = ({ article: { id, title, userId }, articleListController: { clickView } }) => {
  return (
    <>
      <tr data-id={id} onClick={clickView}>
        <td style={{ width: '80%', height: 50, textAlign: 'center', borderBottom: '1px solid black'}}>{title}</td>
        <td style={{ width: '20%', height: 50, textAlign: 'center', borderBottom: '1px solid black' }}>{userId}</td>
      </tr>
      <tr>
      </tr>
    </>
  );
};

export default ArticleListItem;
