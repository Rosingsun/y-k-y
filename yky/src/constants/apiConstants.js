export const HOME = 'http://localhost:9981'//例子，使用时候换路径
export default {

    login: HOME + '/users/login',//登录
    regist: HOME + '/users/regist',//登录
    //用户
    userList: HOME + '/users/userList',//用户列表
    deleteUser: HOME + '/users/delete',//测试路径
    ConditionSelectUserList :HOME+'/users/ConditionSelectUserList',//按照条件查询
}