import { useReducer } from "react";
import LoginController from './../controller/LoginController';

const ACTION = {
  setIsLoggedIn: (state, action) => ({
    ...state,
    isLoggedIn: action.isLoggedIn,
  }),
  setLoginFormState: (state, action) => ({
    ...state,
    loginFormState: { ...state.loginFormState, [action.name]: action.value },
  }),
};

const reducer = (state, action) =>
  ACTION[action.type] ? ACTION[action.type](state, action) : state;

const LoginModel = () => {
  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: false,
    loginFormState: { userId: "", password: "" },
  });
  return [state, LoginController({state, dispatch})];
};

export default LoginModel;
