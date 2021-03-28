var express = require('express');
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
  login(req.body).then((data) => {
    res.send(data)
  })
})

module.exports = router;
