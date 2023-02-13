const LoginForm = ({ loginController: { loginCallback, onChangeLoginForm }}) => {
  return (
    <>
      <form onSubmit={loginCallback}>
        <input
          type="text"
          placeholder="ID"
          name="userId"
          onChange={onChangeLoginForm}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          name="password"
          onChange={onChangeLoginForm}
        />
        <input type="submit" value="로그인" />
        <input type="reset" value="취소" />
      </form>
    </>
  );
};

export default LoginForm;
