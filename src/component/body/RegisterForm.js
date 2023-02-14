import React from "react";
import RegisterModel from './../../model/RegisterModel';

const RegisterForm = () => {
  const [registerModel, registerController] = RegisterModel();

  return <>
    <form onSubmit={ registerController.submit }>
      <input type="text" name="userId" placeholder="ID" onChange={registerController.changeRegisterForm} value={registerModel.id} />
      <input type="text" name="userName" placeholder="NAME" onChange={registerController.changeRegisterForm} value={registerModel.name}/>
      <input type="email" name="email" placeholder="EMAIL" onChange={registerController.changeRegisterForm} value={registerModel.email}/>
      <input type="password" name="password" placeholder="PASSWORD" onChange={registerController.changeRegisterForm} value={registerModel.password}/>
      <input type="submit" value="회원가입"/>
      <input type="reset" value="취소" />
    </form>
  </>;
};

export default RegisterForm;
