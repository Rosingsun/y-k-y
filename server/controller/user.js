const {select} = require('../db/mysql')

const selectUserInfo = () => {
    let sql = `SELECT * FROM user`;
    return select(sql).then(data=>{
       return data || {};
    });
}
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

const register =(data) =>{
    let sql = `INSERT INTO user (name,username,password,age,registerTime,creator) VALUES(
    ${data.name},${data.username},${data.password},${data.age},${data.registerTime},${data.creator})`;
    select(sql);
}
const  deletuser =(data)=>{
    let sql = `DELETE FROM user WHERE id = ${data.id}`;
    return select(sql);
}
module.exports={
    selectUserInfo,//获取用户列表
    login,//登录
    register,//注册新用户
    deletuser,//删除用户
}