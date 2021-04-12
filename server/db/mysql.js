const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const { MYSQL_CONF } = require("../config/db")

const connect = mysql.createConnection(MYSQL_CONF)

// 开始连接
connect.connect()
//需要执行的代码通过sql 传入
//执行
const select = (sql) => {
    const promise = new Promise((res, rej) => {
        connect.query(sql, (error, results, fields) => {
            if (error) {
                throw error
                rej(error);
            }
            res(results);
            // return results
        })
    })
    return promise
}

//断开连接
// connect.end();
module.exports = {
    select
}