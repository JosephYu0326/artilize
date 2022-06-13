const express = require("express");
const router = express.Router();
const db = require("../../modules/mysql_config");
const multer = require("multer");
const app = require("../../app");


router.route("/")
  // .get(async (req, res, next) => {
  //     res.set('Access-Control-Allow-Origin', '*');
  //     const id = req.params.id;
  //     const sql = `SELECT * FROM `blog_article_like`;`
  //     const datas = await db.query(sql, [id, id, id]);
  //     //console.log(datas[0]);
  //     res.json(datas[0]);
  //   })
  .post(async (req, res, next) => {
    const comment = req.body.comment;
    const id = req.body.userid;
    const article = req.body.article;
    console.log(comment);
    const sql = "INSERT INTO `blog_comment` (`Blog_comment_content`, `COMMENT_time`, `user_id`, `article_id`) VALUES ( ?, now(), ?, ?);"
    const [datas] = await db.query(sql, [comment, id, article]);
    //console.log(datas);
    res.send(datas);
  })
  .delete((req, res, next) => {
    const id = req.body.id;
    const sql = "DELETE FROM blog_comment WHERE `blog_comment_id` = ?"
    const datas = db.query(sql, [id]);
    console.log(`刪除留言id=${id}`);
    res.send(datas);
  });


module.exports = router;