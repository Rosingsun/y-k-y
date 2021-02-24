import HomePage from "@views/HomePage";
import Intro from "@views/Intro";
import Login from "@views/Login";
//顶部引入页面
/*
* @exprot routesConfig 导出页面
*/
const routesConfig = [
  {
    path: "/HomePage",
    component: HomePage
  },
  {
    path: "/Intro",
    component: Intro,
    routes: [
      {
        path: "/Intro/login",
        component: Login
      },
      {
        path: "/Intro/login",
        component: Login
      }
    ]
  }
];
export default routesConfig;