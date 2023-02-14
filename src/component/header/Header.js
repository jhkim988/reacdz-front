import LoggedInHeaderButtonSet from "./LoggedInHeaderButtonSet";
import LoggedOutHeaderButtonSet from "./LoggedOutHeaderButtonSet";
import Button from "./../matarial/Button";

const Header = ({ loginModel, loginController }) => {
  return (
    <>
      <Button url="/" text="메인화면" />
      {loginModel.user != null ? (
        <LoggedInHeaderButtonSet loginModel={loginModel} loginController={loginController} />
      ) : (
        <LoggedOutHeaderButtonSet />
      )}
      <Button url="/help" text="도움말"/>
    </>
  );
};

export default Header;
