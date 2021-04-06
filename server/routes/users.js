var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
//查询所有信息
const { selectUserInfo, login } = require("../controller/user")
router.post('/', function (req, res, next) {
  selectUserInfo().then((data) => {
    res.send(data)
  })
});
//登录
router.post("/login", (req, res, next) => {
  console.log(req.query);
  login(req.query).then((data) => {
    console.log("data",data.length)
    if( data.length>0){
      res.json({state:'登录成功',data:data});
    }else{
      res.json({state:"账号或密码错误！",data:data})
    }
  })
})

module.exports = router;
