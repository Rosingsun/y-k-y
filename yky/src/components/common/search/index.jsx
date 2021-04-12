/**
 * @param {Array} searchList 搜索的目录
 * @param {Boolean} add 是否需要添加的按钮
 */
import React, { Component } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import { } from 'antd';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onFinish = (e) => {
        console.log(e)
    }
    render() {
        return (
            <div>
                <Form
                    // form={form}
                    name="advanced_search"
                    className="ant-advanced-search-form"
                    onFinish={this.onFinish}
                >
                    <Row>
                        {
                            this.props.searchList.map((item, index) => {
                                return (
                                    <Col span={8} key={index}>
                                        <Form.Item
                                            name={item.name}
                                            label={item.name}
                                            rules={[
                                                {
                                                    required: false,//查询可以为空
                                                    message: '不能为空',
                                                },
                                            ]}
                                        >
                                            {item.type == 'select' ? <Input placeholder="placeholder" /> :

                                                itemm.type == 'input' ? <Input placeholder="placeholder" /> :

                                                    null

                                            }
                                        </Form.Item>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Button type="primary" htmlType="submit" shape="round">查询  </Button>
                </Form>
     
            </div>
        )
    }
}
export default Search;