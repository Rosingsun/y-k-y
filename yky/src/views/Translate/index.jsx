import React, { Component } from 'react';
import * as common from "../../actions/common";
import { appid, key } from "../../constants/apiConstants";
import { MD5 } from '../../constants/MD5';
import { Input, Button } from "antd";
class Translate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            translate: '',
        };
    }
    sendMessage = () => {
        let salt = (new Date).getTime();
        let from = 'en';
        let to = 'zh';
        let str1 = appid + this.state.translate + salt + key;
        let sign = MD5(str1);
        common.tran({
            q: this.state.translate,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign,
        }).then(res => {
            console.log('res', res)
        }).catch(err => {
            console.log('err', err);
        })
    }
    render() {
        return (
            <div>
                <Input onChange={(e) => { this.setState({ translate: e.target.value }) }} />
                <Button type="primary" onClick={() => { this.sendMessage() }} >翻译</Button>
            </div>
        );
    }
}
export default Translate
