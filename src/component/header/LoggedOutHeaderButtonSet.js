import Button from "./../matarial/Button";

const LoggedOutHeaderButtonSet = () => {
  return (
    <>
      <Button url="/loginForm" text="로그인" />
      <Button url="/registerForm" text="회원가입" />
    </>
  );
};

export default LoggedOutHeaderButtonSet;
