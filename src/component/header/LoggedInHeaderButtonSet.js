import CustomButton from "./../matarial/CustomButton";

const LoggedInHeaderButtonSet = ({ loginModel: { user }, loginController: { logout } }) => {
  return (
    <>
      <button onClick={logout}>로그아웃</button>
      <CustomButton url="/userDetail" text={user.userName} />
    </>
  );
};

export default LoggedInHeaderButtonSet;
