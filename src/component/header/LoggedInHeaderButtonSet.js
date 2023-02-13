import Button from "./../matarial/Button";

const LoggedInHeaderButtonSet = ({ setIsLoggedIn }) => {
  return (
    <>
      <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
      <Button url="/userDetail" text={"상세정보"} />
    </>
  );
};

export default LoggedInHeaderButtonSet;
