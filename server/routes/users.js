var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
//查询所有信息
const { selectUserInfo, login } = require("../controller/user")
//用户的所有信息传过去
router.post('/userList', function (req, res, next) {
  selectUserInfo().then((data) => {
    res.send(data)
  })
});
//登录
router.post("/login", (req, res, next) => {
  login(req.query).then((data) => {
    if( data.length>0){
      res.json({state:'登录成功',data:data});
    }else{
      res.json({state:"账号或密码错误！",data:data})
    }
  })
})

module.exports = router;
