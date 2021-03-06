var express = require('express');
var bodyParser = require('body-parser');
var  message = require('../method/state');

var router = express.Router();
//查询所有信息
const { selectUserInfo, login ,register,deletuser,} = require("../controller/user")
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
      res.json(message(1,data,'登录成功'));
    }else{
      res.json(message(2,data,'登陆失败'))
    }
  })
})
router.post("/delete",(req,res,next)=>{
  deletuser(req.query).then((data)=>{
    res.json(message(1,data,'删除成功'));
    console.log(data);
  })
})

module.exports = router;
