import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterController = ({ state, dispatch }) => {
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    axios.post(`/user`, state.registerForm).then((response) => {
      if (response.data.data) {
        alert(`회원가입 성공`);
        navigate(`/loginForm`);
      } else {
        alert(`네트워크 오류`);
      }
    });
  };
  const changeRegisterForm = (e) => {
    dispatch({
      type: "setRegisterForm",
      inputType: e.currentTarget.name,
      inputValue: e.currentTarget.value,
    });
  };
  return { submit, changeRegisterForm };
};

export default RegisterController;
