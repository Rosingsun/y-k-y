export const HTTP_STATUS = {
    UN_LOAD: 102,// 用户未登录
    REQUIRE_SUCCESS:200,//请求成功
    NO_DATA_AUTHORITY: 302,// 无数据权限,区分企债通三个页面
    NO_MENU_AUTHORITY: 303,// 无菜单权限
    NO_RESOURCE:400,//无资源
    PAGE_NOT_FOUND: 404, // 页面未找到
    CUSTOMISE_ERROR: 999,//自定义错误
    OPERATER_ERROR: 500,//操作失败
    NO_ENOUGH_AUTHORITY: 605,//权限不足
}
//到时候再看两种导出类型不同之处
// module.exports={

// }