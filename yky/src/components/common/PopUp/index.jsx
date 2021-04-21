/**
 * @param {funtion} ok 完成后返回的回调函数
 * @param {funtion} cancel 关闭按钮的回调函数
 * @param {String} title title 的文字
 * @param {Boolean} visible 是否开框
 * @param {String} okText 确定的按钮文字
 * @param {String} cancelText 确定的按钮文字
 * @param {Array} list 用户需要model 显示的输入框类型
 */
import React, { Component } from 'react';
import { Modal, Form, Row, Col, Input, Button, Select  } from 'antd';
import s from './style.module.scss';
const { Option } = Select;
export default class PopUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			confirmLoading: false,
		}
		this.form= React.createRef();
	}
	handleOk = () => {
		//获取到表单的数据
		let date=this.form.current.getFieldsValue(true)
		this.setState({ confirmLoading: true })
		setTimeout(() => {
			this.setState({ confirmLoading: false })
			this.props.ok(date);
		}, 500);
	};
	handleCancel = () => {
		this.props.cancel();
	};
	render() {
		return (
			<div>
				<Modal
					title={this.props.title || '消息框'}
					visible={this.props.visible}
					style={{ ...this.props.style } || {}}
					onOk={this.handleOk}
					confirmLoading={this.state.confirmLoading}
					onCancel={this.handleCancel}
					okText={this.props.okText || '确定'}
					cancelText={this.props.canceltext || "取消"}
				>
					<Form
						ref={this.form}
						className={s.searchForm}
						onFinish={this.onFinish}
					>
						<Row className={s.RowLine}>
							{
								this.props.list.map((item, index) => {
									return (
										<Col span={18} key={index}>
											<Form.Item
												name={item.name}
												label={item.label}
												rules={item.rules}
											>
												{item.type == 'select'
													? <Select placeholder="请选择" >
														{item.data.map((item2, index2) => (<Option value={item2.id}>{item2.value}</Option>))}
													</Select>
													: item.type == 'input' ? <Input placeholder="请输入" />
														: null
												}
											</Form.Item>
										 </Col>
									)
								})
							}
						</Row>
					</Form>
				</Modal>
			</div>
		)
	}
}
