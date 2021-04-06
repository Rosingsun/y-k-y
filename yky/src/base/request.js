import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';
import * as state from "./statusCode.js";
//开发环境与产品环境的url
// const devBaseURL = 'localhost:9981';
// const proBaseURL = 'localhost:9981';
//判断url
// export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const TIMEOUT = 5000;
//实例化对象与设置基础

const instance = axios.create({
    // baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' }
})

//添加拦截
instance.interceptors.request.use(config => {
    console.log('请求被拦截')
    return config
}, error => {

})

instance.interceptors.response.use(res => {
    return res.data
}, error => {
    return error;
})

/**
 * 
 * @param {String} type 
 * @param {String} url 
 * @param {Object} data 传递给接口的对象数据
 */
const getApi = (url, params, type) => {
  const data =  axios({
        url: url,
        params: params,
        method: type,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': '*' }
    })
        .then((res) => {
            return res;
        }).catch((err) => {
            return err;
        });
        return data
}
// export default instance;
export default getApi