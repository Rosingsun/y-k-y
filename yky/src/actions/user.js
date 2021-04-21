import getApi from "../base/request";
import ApiConstants from '../constants/apiConstants';

export const Login = (params, callback) => {
    return getApi(ApiConstants.login, params, "POST");
}
export const userList = (params, callback) => {
    return getApi(ApiConstants.userList, params, "POST");
}
export const deleteUser=(params,callback)=>{
    return getApi(ApiConstants.deleteUser,params,"POST");
}
export const selectWithId = (params,callback)=>{
    return getApi(ApiConstants.ConditionSelectUserList,params,"POST");
}
export const regist = (params)=>{
    return getApi(ApiConstants.regist,params,"POST");
}