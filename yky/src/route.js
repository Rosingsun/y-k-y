// import Home from "@views/Home";
// import Intro from "@views/Intro";
// import Login from "@views/Login";
import * as page from "@views/index.js"
//顶部引入页面
/*
* @exprot routesConfig 导出页面
*/
const routesConfig = [
  {
    path: "/Login",//登录注册
    component: page.Login
  },
  {
    path: "/Home",
    component: page.Home
  },
  {
    path: "/Intro",
    component: page.Intro,
    routes: [
      {
        path: "/Intro/login",
        component: page.Login
      },
      {
        path: "/Intro/login",
        component: page.Login
      }
    ]
  }
];
export default routesConfig;