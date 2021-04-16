/**
 * @param {funtion} ok 完成后返回的回调函数
 * @param {funtion} cancel 关闭按钮的回调函数
 * @param {String} title title 的文字
 * @param {Boolean} visible 是否开框
 * @param {String} okText 确定的按钮文字
 * @param {String} cancelText 确定的按钮文字
 * 
 */
import React, { Component } from 'react';
import { Modal, Button } from 'antd';
export default class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading: false,
        }
    }
    handleOk = () => {
        this.setState({ confirmLoading: true })
        setTimeout(() => {
            this.setState({ confirmLoading: false })
            this.props.ok();
        }, 2000);
    };
    handleCancel = () => {
        this.props.cancel();
    };
    render() {
        return (
            <div>
                {/* <Button type="primary" onClick={this.showModal}>{this.props.btnWord||'按钮'}</Button> */}
                <Modal
                    title={this.props.title||'消息框'}
                    visible={this.props.visible}
                    style={{...this.props.style}||{}}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                    okText={this.props.okText||'确定'}
                    cancelText={this.props.canceltext||"取消"}
                >
                </Modal>
            </div>
        )
    }
}
