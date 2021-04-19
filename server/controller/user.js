const {select} = require('../db/mysql')
//获取用户列表
const selectUserInfo = () => {
    // let sql = `SELECT * FROM user`;
    let sql=`SELECT u1.id,u1.name,u1.username,u1.password,u1.age,u1.sex,u1.lastTime,u2.regiserTime,u2.userId,u2.creator,u2.creatorName
                FROM user as u1
                INNER JOIN createruser as u2
                where u1.creator=u2.userId`
    return select(sql).then(data=>{
       return data || {};
    });
}
//登录
const login = (data)=>{
let sql = `
    SELECT * from user
    WHERE password='${data.password}' and username='${data.username}';
`;
let update  = `
    UPDATE user SET lastTime='${data.loadTime}'
    WHERE password='${data.password}' and username='${data.username}';`
    select(update);
    return select(sql);
}
//删除
const  deletuser =(data)=>{
    let sql = `DELETE FROM user WHERE id = ${data.id}`;
    return select(sql);
}
//注册
const register =(data) =>{
    let sql = `INSERT INTO user (name,username,password,age,registerTime,creator) VALUES(
    ${data.name},${data.username},${data.password},${data.age},${data.registerTime},${data.creator})`;
    select(sql);
}
// 按照条件查询
const ConditionSelectUserList=(data)=>{
    let sql = `SELECT * FROM user 
                WHERE creator= ${data.id}`;
    return select(sql);
}
module.exports={
    selectUserInfo,//获取用户列表
    login,//登录
    deletuser,//删除用户
    register,//注册新用户
    ConditionSelectUserList,//按照条件查询
}