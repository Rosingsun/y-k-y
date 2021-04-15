/**
 * @param {Array} searchList 搜索的目录
 * @param {Boolean} add 是否需要添加的按钮
 * @param {Funtion} search finish 的回调函数
 * @param {Funtion} clearOut 清除函数
 * @params
 */
import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, Select } from 'antd';
import s from './style.module.scss';
const { Option } = Select;
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.form=React.createRef
    }
    //完成函数
    onFinish = (e) => {
        this.props.search(e);
    }
    //清楚函数
    clear(){
        this.props.clearOut();
        // this.form.setFieldsValue({
        //     name:'',
        // })
    }
    //添加函数
    add(){
        this.props.add();
    }
    render() {
        return (
            <div className={s.body}>
                <Form
                    // form={form}
                    name="advanced_search"
                    className={s.searchForm}
                    onFinish={this.onFinish}
                >
                    <Row className={s.RowLine}>
                        {
                            this.props.searchList.map((item, index) => {
                                return (
                                    <Col span={5} key={index}>
                                        <Form.Item
                                            name={item.name}
                                            label={item.label}
                                            rules={[
                                                {
                                                    required: false,//查询可以为空
                                                    message: '不能为空',
                                                },
                                            ]}
                                        >
                                            {item.type == 'select'
                                                ? <Select placeholder="请选择" >
                                                    {item.data.map((item2, index2) => (<Option value={item2.id}>{item2.value}</Option>))}
                                                </Select>
                                                : item.type == 'input' ? <Input placeholder="placeholder" />
                                                    : null
                                            }
                                        </Form.Item>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <div className={s.btnBox}>
                        {this.props.add == true ? <Button className={s.add} onClick={()=>{this.add}} shape="round">新增</Button> : null}
                        <Button type="primary" htmlType="submit" shape="round">查询</Button>
                        <Button className={s.clearOut}  shape="round" onClick={()=>{
                            this.clear();
                        }}>清空</Button>
                    </div>
                </Form>

            </div>
        )
    }
}
export default Search;