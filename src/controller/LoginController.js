import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginController = ({ state, dispatch }) => {
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    axios.post("/user/login", state.loginFormState).then((response) => {
      if (response.data.data) {
        dispatch({ type: "setIsLoggedIn", isLoggedIn: true });
        navigate("/");
      }
    });
  };

  const onChangeLoginForm = (e) => {
    dispatch({
      type: "setLoginFormState",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const loginCallback = useCallback(login, [state.loginFormState]);

  return { loginCallback, onChangeLoginForm };
};

export default LoginController;
