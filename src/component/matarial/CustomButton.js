import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ url, text, args, callback }) => {
  const navigate = useNavigate();
  const move = useCallback(() => {
    callback && callback(args);
    url && navigate(url);
  }, []);
  return <button onClick={move}>{text}</button>;
};

export default CustomButton;
