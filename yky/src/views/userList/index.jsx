import React, { Component } from 'react';
import { Table, Tag, Space, Button, message } from 'antd';
import * as api from'@actions/user'
import { Search, PopUp } from '@components/index';
import moment from'moment';
import * as user from "@actions/user";
let storage = window.localStorage;
const { Column, ColumnGroup } = Table;
class userList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: false,
      searchList: [
        {
          key: 1,
          type: 'select',
          name: "creator",
          label: '创建者',
          data: [],//传功去的选项，{id:id,value:value}
        },
      ],
      addUserContain: [
        {
          type: 'input',
          name: 'username',
          label: '用户名',
          rules: [
            {
              required: true,//查询可以为空
              message: '用户名不能为空',
            }]
        }, {
          type: 'input',
          name: 'password',
          label: '密码',
        }, {
          type: 'input',
          name: 'name',
          label: '用户昵称',
        }, {
          type: 'select',
          name: 'sex',
          label: '性别',
          data: [{ id: 1, value: '男' }, { id: 2, value: '女', }]
        }, {
          type: 'input',
          name: 'age',
          label: '年龄',
        }
      ]
    }
  }
  componentDidMount() {
    this.selectUserList();
  }
  //查找函数
  search = (e) => {
    user.selectWithId({ id: e.creator }).then((res) => {
      this.setState({ data: res.data.data })
    })
  }
  //清除函数
  clearOut = () => {
    //先查询新数据
    this.selectUserList();
    //再清除搜索框

  }
  //查询所有的信息
  selectUserList = () => {
    user.userList().then((res) => {
      console.log("res", res)
      let list = [...this.state.searchList]
      list.map((item, index) => {
        if (item.name == 'creator') {
          res.data&&res.data.map((item2, index2) => {
            item.data[index2] = {
              id: item2.id,
              value: item2.name
            }
          })
        }
      })
      this.setState({ data: res.data, searchList: list })
    })
  }
  //删除的函数
  deleteUser(id) {
    user.deleteUser({ id: id }).then((res) => {
      if (res.data.state == 1) {
        message.success(res.data.message);
        this.selectUserList();
      }
    })
  }
  addBtn = () => {
    console.log("弹出添加的框");
    this.setState({ visible: true });
  }
  ok = (data) => {
    console.log("获取到了数据", data)
    let update={...data};
    update.creator=storage.id;
    update.regiserTime=moment().format('YYYY-MM-DD hh:mm:ss');   
    api.regist(update).then((res)=>{
      console.log('res',res);
    }).catch(err=>{
      console.log('err',err);
    })
    this.setState({ visible: false });
  }
  cancel = () => {
    this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <PopUp ok={this.ok} cancel={this.cancel} title="添加新用户" visible={this.state.visible} list={this.state.addUserContain}>
        </PopUp>
        <Search searchList={this.state.searchList} add={true} addBtn={this.addBtn} search={this.search} clearOut={this.clearOut} />
        <Table dataSource={this.state.data}>
          <Column title="用户ID" dataIndex="id" key="id" align='center' />

          <Column title="用户昵称" dataIndex="name" key="name" align='center' />
          <Column title="用户名" dataIndex="username" key="username" align='center' />
          <Column title="密码" dataIndex="password" key="password" align='center' />
          <Column title="年龄" dataIndex="age" key="age" align='center' />
          <Column title="注册日期" dataIndex="regiserTime" key="regiserTime" align='center' />
          <Column title="上一次登录时间" dataIndex="lastTime" key="address" align='center' />
          <Column title="创建者" dataIndex="creatorName" key="creatorName" align='center' />
          <Column
            title="操作"
            key="action"
            align='center'
            render={(data, record) => (
              <Space size="middle">
                <Button>修改</Button>
                <Button onClick={() => {
                  console.log("text", data);
                  this.deleteUser(data.id);
                }}>删除</Button>
              </Space>
            )}
          />
        </Table>
      </div>
    )
  }
}
export default userList;