// import logo from './logo.svg';

import './App.css';
import { PageConfig } from "@components/index.jsx";
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { PieChartOutlined } from '@ant-design/icons';
import { createHashHistory } from 'history'; // hash路由
import routesConfig from "@src/route";
import { Link } from "react-router-dom";
import{Login} from'@views/index';

const history = createHashHistory();
const { Header, Content, Footer, Sider } = Layout;
let storage = window.localStorage;
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <div className="App" >
        <header className="App-header">
      
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {/* <Menu.Item key="a" icon={<PieChartOutlined />}>数据总览</Menu.Item> */}
                {
                  routesConfig.map((item, index) => {
                    if (item.childrenPage == undefined) {
                      return (
                        <Menu.Item key={item.path} icon={<PieChartOutlined />} onClick={(e) => {
                          this.setState({ panalName: item.title });
                        }}>
                          <Link to={item.path}>
                            {item.title}
                          </Link>
                        </Menu.Item>
                      )
                    }
                    // else {
                    //   return(
                    //     <SubMenu key={item.title} icon={<UserOutlined />} title={item.title} onClick={()=>{}}> 
                    //       {item.childrenPage.map((item2,index2)=>{
                    //         return  <Menu.Item key={item2.path} onClick={(e)=>{console.log(e)}}>{item2.title}</Menu.Item>
                    //       })}
                    //   </SubMenu>
                    //   )
                    //  }
                  })
                }
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} >
              </Header>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>数据管理</Breadcrumb.Item>
                  <Breadcrumb.Item>{this.state.panalName}</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ height: '100%', width: '100%' }}>
                  <PageConfig />
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>院科研 ©2021 Created by ZXY</Footer>
            </Layout>
          </Layout>
        </header>
      </div>
    );
  }
}

export default App;
