import React, { Component } from 'react';
import { Table, Tag, Space, Button, message } from 'antd';
import * as s from "./style.module.scss";
import { Search } from '../../components/index';
import * as user from "@actions/user";
const { Column, ColumnGroup } = Table;
class userList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchList: [
                {
                    key: 1,
                    type: 'select',
                    name: "creator",
                    label: '创建者',
                    data: [],//传功去的选项，{id:id,value:value}
                },
            ]
        }
    }
    componentDidMount() {
        this.selectUserList();
    }
    search=(e)=>{
        console.log("3e",e);
        user.selectWithId({id:e.creator}).then((res)=>{
            console.log(res)
        })
    }
    selectUserList = () => {
        user.userList().then((res) => {
            let list = [...this.state.searchList]
            list.map((item, index) => {
                if (item.name == 'creator') {
                    res.data.map((item2, index2) => {
                        item.data.push({
                            id: item2.id,
                            value: item2.name
                        })
                    })
                }
            })
            this.setState({ data: res.data, searchList: list })
        })
    }
    //删除的函数
    deleteUser(id) {
        user.deleteUser({ id: id }).then((res) => {
            console.log('resresres', res)
            if (res.data.state == 1) {
                message.success(res.data.message);
                this.selectUserList();
            }
        })
    }
    render() {
        return (
            <div>
                <Search searchList={this.state.searchList} add={false} search={this.search}/>
                <Table dataSource={this.state.data}>
                    <Column title="用户昵称" dataIndex="name" key="name" align='center' />
                    <Column title="用户名" dataIndex="username" key="username" align='center' />
                    <Column title="密码" dataIndex="password" key="password" align='center' />
                    <Column title="年龄" dataIndex="age" key="age" align='center' />
                    <Column title="注册日期" dataIndex="registerTime" key="registerTime" align='center' />
                    <Column title="上一次登录时间" dataIndex="lastTime" key="address" align='center' />
                    <Column title="创建者" dataIndex="creator" key="creator" align='center' />
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