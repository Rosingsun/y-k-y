import axios from 'axios';
import qs from 'qs';
//开发环境与产品环境的url
const devBaseURL = 'localhost:3030';
const proBaseURL = 'localhost:3030';
//判断url
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;
export const TIMEOUT = 5000;
//实例化对象与设置基础

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
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
const getData = (type, url, data) => {
    const promise = new Promise(() => {
        axios({
            method: type,
            url: url,
            data: data
        });
    })
}
export default instance;