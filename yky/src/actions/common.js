import getApi from "../base/request";
import ApiConstants from '../constants/apiConstants';

//翻译接口
export const tran = (params, callback) => {
    return getApi(ApiConstants.tran, params, "POST");
}