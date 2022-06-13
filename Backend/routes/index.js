var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("直接在網址輸入/routes，路由從app.js設定，資料庫連線從modules設定");
});

module.exports = router;
