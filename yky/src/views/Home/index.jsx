import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { PieChartOutlined} from '@ant-design/icons';
// import s from "./style.module.scss";
import routesConfig from "@src/route";
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      panalName:'',
    };
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <div>213123</div>
    );
  }
}
