// import Home from "@views/Home";
// import Data from "@views/Data";
// import Login from "@views/Login";
import * as page from "@views/index.js"
//顶部引入页面
/*
* @exprot routesConfig 导出页面
*/
const routesConfig = [
  {
    path: "/Login",//登录注册
    component: page.Login,
    title:'登录注册'
  },
  {
    path: "/Home",
    component: page.Home,
    title:'主页',
  },
  {
    path: "/Data",
    component: page.Data,
    title:"数据页",
  }
];
export default routesConfig;