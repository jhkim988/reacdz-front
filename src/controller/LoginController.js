import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginController = ({ state, dispatch }) => {
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios.post("/user/login", state.loginFormState).then((response) => {
      if (response.data) {
        dispatch({ type: "setIsLoggedIn", isLoggedIn: true });
        dispatch({ type: "setUser", user: response.data.data })
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

  const logout = e => {
    axios.delete('/user/logout')
      .then(response => {
        dispatch({ type: 'setIsLoggedIn', isLoggedIn: false })
        dispatch({ type: "setUser", user: null })
      });
  }

  const getUserDetail = () => {
    axios.get(`/user/${state.user.userId}`)
      .then(response => {
        dispatch({ type: 'setUserDetail', userDetail: response.data.data });
      });
  }

  const checkLogIn = () => {
    if (!state.isLoggedIn) {
      navigate("/forbidden")
    }
  }

  return { loginCallback, onChangeLoginForm, logout, getUserDetail, checkLogIn };
};

export default LoginController;
