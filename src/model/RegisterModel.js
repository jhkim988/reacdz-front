import { useReducer } from "react";
import RegisterController from "./../controller/RegisterController";

const ACTION = {
    setRegisterForm: (state, action) => ({
        ...state,
        registerForm: { ...state.registerForm, [action.inputType]: action.inputValue }
    }),
};

const reducer = (state, action) =>
  ACTION[action.type] ? ACTION[action.type](state, action) : state;

const RegisterModel = () => {
  const [state, dispatch] = useReducer(reducer, {
    registerForm: {
      userId: "",
      userName: "",
      email: "",
      password: "",
    },
  });
  return [state, RegisterController({ state, dispatch })];
};

export default RegisterModel;
