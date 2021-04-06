const {select} = require('../db/mysql')
const selectUserInfo = () => {
    let sql = `SELECT * FROM user`;
    return select(sql).then(data=>{
       return data || {};
    });
}
const login = (data)=>{
    console.log("password",data.password);
    console.log("username",data.username);
    let sql = `SELECT * FROM user WHERE password='${data.password}' and username='${data.username}'`;
    return select(sql);
}
module.exports={
    selectUserInfo,
    login
}