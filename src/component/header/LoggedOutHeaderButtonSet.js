import CustomButton from "./../matarial/CustomButton";

const LoggedOutHeaderButtonSet = () => {
  return (
    <>
      <CustomButton url="/loginForm" text="로그인" />
      <CustomButton url="/registerForm" text="회원가입" />
    </>
  );
};

export default LoggedOutHeaderButtonSet;
