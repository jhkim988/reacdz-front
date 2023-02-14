import { Route, Routes } from "react-router-dom";
import Home from "./component/body/Home";
import LoginForm from "./component/body/LoginForm";
import ArticleUpdateForm from "./component/body/ArticleUpdateForm";
import ArticleView from "./component/body/ArticleView";
import UserDetail from "./component/body/UserDetail";
import Help from "./component/body/Help";
import Header from "./component/header/Header";
import ArticleCreateForm from "./component/body/ArticleCreateForm";
import RegisterForm from "./component/body/RegisterForm";
import LoginModel from "./model/LoginModel";
import ArticleModel from './model/ArticleModel';
import Forbidden from './component/matarial/Forbidden';
import IsLogin from './component/matarial/IsLogin';

const App = () => {
  const [loginModel, loginController] = LoginModel();
  const [articleModel, articleController] = ArticleModel();
  return (
    <>
      <Header loginModel={loginModel} loginController={loginController}/>
      <Routes>
        <Route path="/" element={<Home articleController={articleController} articleModel={articleModel} />} />
        <Route
          path="/loginForm"
          element={<LoginForm loginController={loginController} />}
        />
        <Route path="/registerForm" element={<RegisterForm />} />
        <Route
          path="/articleView/:id"
          element={<ArticleView articleModel={articleModel} articleController={articleController} />}
        />
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<IsLogin loginController={loginController}/>}>
          <Route path="/userDetail" element={<UserDetail loginModel={loginModel} loginController={loginController}/>} />
          <Route path="/articleCreateForm" element={<ArticleCreateForm articleController={articleController}/>} />
          <Route path="/articleUpdateForm/:id" element={<ArticleUpdateForm articleModel={articleModel} articleController={articleController} />} />
        </Route>

        <Route path="/forbidden" element={<Forbidden/>}/>
      </Routes>
    </>
  );
};

export default App;
