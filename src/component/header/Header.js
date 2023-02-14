import LoggedInHeaderButtonSet from "./LoggedInHeaderButtonSet";
import LoggedOutHeaderButtonSet from "./LoggedOutHeaderButtonSet";
import CustomButton from "./../matarial/CustomButton";

const Header = ({ loginModel, loginController }) => {
  return (
    <>
      <CustomButton url="/" text="메인화면" />
      {loginModel.user != null ? (
        <LoggedInHeaderButtonSet loginModel={loginModel} loginController={loginController} />
      ) : (
        <LoggedOutHeaderButtonSet />
      )}
      <CustomButton url="/help" text="도움말"/>
    </>
  );
};

export default Header;
