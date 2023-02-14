import Button from "./../matarial/Button";

const LoggedInHeaderButtonSet = ({ loginModel: { user }, loginController: { logout } }) => {
  return (
    <>
      <button onClick={logout}>로그아웃</button>
      <Button url="/userDetail" text={user.userName} />
    </>
  );
};

export default LoggedInHeaderButtonSet;
