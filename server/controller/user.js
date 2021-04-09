const {select} = require('../db/mysql')

const selectUserInfo = () => {
    let sql = `SELECT * FROM user`;
    return select(sql).then(data=>{
       return data || {};
    });
}
const login = (data)=>{
    let sql = `SELECT * FROM user WHERE password='${data.password}' and username='${data.username}'`;
    return select(sql);
}
module.exports={
    selectUserInfo,
    login
}