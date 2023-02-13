import LoggedInHeaderButtonSet from "./LoggedInHeaderButtonSet";
import LoggedOutHeaderButtonSet from "./LoggedOutHeaderButtonSet";
import Button from "./../matarial/Button";

const Header = ({ loginModel: { isLoggedIn }, loginController: { setIsLoggedIn } }) => {
  return (
    <>
      <Button url="/" text="메인화면" />
      {isLoggedIn ? (
        <LoggedInHeaderButtonSet setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoggedOutHeaderButtonSet />
      )}
    </>
  );
};

export default Header;
