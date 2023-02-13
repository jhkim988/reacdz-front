import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ url, text }) => {
  const navigate = useNavigate();
  const move = useCallback(() => {
    navigate(url);
  }, []);
  return <button onClick={move}>{text}</button>;
};

export default Button;
