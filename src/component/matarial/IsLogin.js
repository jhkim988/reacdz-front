import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const IsLogin = ({ loginController: { checkLogIn } }) => {
  useEffect(checkLogIn, []);
  return <Outlet/>;
};

export default IsLogin;
