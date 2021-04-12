import React, { Component } from 'react';
import { Table, Tag, Space,Button, message } from 'antd';
import * as s from "./style.module.scss";
import * as user from "@actions/user";
const { Column, ColumnGroup } = Table;
class userList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: '1',
                    firstName: 'John',
                    lastName: 'Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    firstName: 'Jim',
                    lastName: 'Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    firstName: 'Joe',
                    lastName: 'Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
            ]
        }
    }
    componentDidMount(){
       this.selectUserList();
    }
    selectUserList=()=>{
        user.userList().then((res)=>{
            console.log("ressss",res)
            this.setState({data:res.data})
        })
    }
    //删除的函数
    deleteUser(id){
        user.deleteUser({id:id}).then((res)=>{
            console.log('resresres',res)
            if(res.data.state==1){
                message.success(res.data.message);
                this.selectUserList();
            }
        })
    }
    render() {
        return (
            <Table dataSource={this.state.data}>
                <Column title="用户昵称" dataIndex="name" key="name" />
                <Column title="用户名" dataIndex="username" key="username" />
                <Column title="密码" dataIndex="password" key="password" />
                <Column title="年龄" dataIndex="age" key="age" />
                <Column title="注册日期" dataIndex="registerTime" key="registerTime" />
                <Column title="上一次登录时间" dataIndex="lastTime" key="address" />
                <Column title="创建者" dataIndex="creator" key="creator" />
                <Column
                    title="操作"
                    key="action"
                    render={(data, record) => (
                        <Space size="middle">
                            <Button>修改</Button>
                            <Button onClick={()=>{
                                console.log("text",data);
                                this.deleteUser(data.id);
                            }}>删除</Button>
                        </Space>
                    )}
                />
            </Table>
        )
    }
}
export default userList;