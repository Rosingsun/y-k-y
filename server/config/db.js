const env = process.env.NODE_ENV || 'production'

//配置
let MYSQL_CONF;
if (env === 'development') {
    MYSQL_CONF = {
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "demo",
        dateStrings: true,
        multipleStatements: true // 支持执行多条 sql 语句
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: "localhost",
        user: "root",
        password: "123456",
        port: "3306",
        database: "demo",
        dateStrings: true,
        multipleStatements: true // 支持执行多条 sql 语句
    }
}
module.exports = { MYSQL_CONF }