import { useReducer } from "react";
import LoginController from "./../controller/LoginController";

const ACTION = {
  setIsLoggedIn: (state, action) => ({
    ...state,
    isLoggedIn: action.isLoggedIn,
  }),
  setLoginFormState: (state, action) => ({
    ...state,
    loginFormState: { ...state.loginFormState, [action.name]: action.value },
  }),
  setUser: (state, action) => ({
    ...state,
    user: action.user
  }),
  setUserDetail: (state, action) => ({
    ...state,
    userDetail: action.userDetail
  })
};

const reducer = (state, action) =>
  ACTION[action.type] ? ACTION[action.type](state, action) : state;

const LoginModel = () => {
  const [state, dispatch] = useReducer(reducer, {
    isLoggedIn: false,
    loginFormState: { userId: "", password: "" },
    user: null,
    userDetail: null
  });
  return [state, LoginController({ state, dispatch })];
};

export default LoginModel;
