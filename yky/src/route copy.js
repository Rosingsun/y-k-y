//路由配置
import HomePage from "./views/HomePage";
import Intro from "./views/Intro";
import Login from "./views/Login";
const routesConfig = [
  {
    path: "./views/HomePage",
    component: HomePage
  },
  {
    path: "./views/Intro",
    component: Intro,
    routes: [
      {
        path: "./views/Intro/login",
        component: Login
      },
      {
        path: "./views/Intro/login",
        component: Login
      }
    ]
  }
];
export default routesConfig;