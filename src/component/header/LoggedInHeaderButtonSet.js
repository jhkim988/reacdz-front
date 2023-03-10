import CustomButton from "./../matarial/CustomButton";

const LoggedInHeaderButtonSet = ({ loginModel: { user }, loginController: { logout } }) => {
  return (
    <>
      <button onClick={logout}>๋ก๊ทธ์์</button>
      <CustomButton url="/userDetail" text={user.userName} />
    </>
  );
};

export default LoggedInHeaderButtonSet;
