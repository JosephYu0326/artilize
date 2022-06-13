const express = require("express");
const router = express.Router();
const db = require("../../modules/mysql_config");
const multer = require("multer");

// 透過用戶ID拿到藏文章
// router.route("/:userID").post(async (req, res, next) => {
//       const id = req.body.userID;
//       const sql = `SELECT * FROM blog_article_like 
//       JOIN users ON blog_article_like.user_id = users.id 
//       JOIN blog_article ON blog_article_like.article_id = blog_article.article_id
//       WHERE blog_article_like.user_id = ?`
//       const [datas] = await db.query(sql, [id]);
//       res.send(datas);
// })
router.route("/").get(async (req, res, next) => {
      const sql = `SELECT blog_article.article_id,	
      title,
      DATE_FORMAT(created_time, "%Y-%m-%d") AS created_time,	
      content,
      category,
      users_id,	
      sn,	
      thema,
      favorited, 
      userAvatar FROM blog_article
      JOIN users ON blog_article.users_id = users.userId JOIN blog_category ON blog_article.category = blog_category.sn
      WHERE favorited=1 ORDER BY created_time DESC`
      const [datas] = await db.query(sql);
      res.send(datas);
})
router.route("/").get(async (req, res, next) => {
      const sql = `SELECT blog_article.article_id,	
      title,
      DATE_FORMAT(created_time, "%Y-%m-%d") AS created_time,	
      content,
      category,
      users_id,	
      sn,	
      thema,
      favorited,
       userAvatar FROM blog_article
      JOIN users ON blog_article.users_id = users.userId JOIN blog_category ON blog_article.category = blog_category.sn
      WHERE favorited=1 ORDER BY created_time DESC`
      const [datas] = await db.query(sql);
      res.send(datas);
})
      .put(async (req, res, next) => {
            console.log(req.body);
            if (req.body.favorited == 1) {
                  const id = req.body.article
                  const sql = "UPDATE `blog_article` SET `favorited` = 0 WHERE article_id=?"
                  const [datas] = await db.query(sql, [id]);
                  res.json(datas);
            } else {
                  const id = req.body.article
                  const sql = "UPDATE `blog_article` SET `favorited` = 1 WHERE article_id=?"
                  const [datas] = await db.query(sql, [id]);
                  res.json(datas);
            }
      })

// router.route("/search")
//       .post(async (req, res, next) => {
//             let keyword = req.body.keyword
//             const sql = "SELECT * FROM `blog_article` WHERE title LIKE  ?  ORDER BY blog_article.created_time DESC;"
//             const [datas] = await db.query(sql, [`%${keyword}%`])
//             res.json(datas)
//             console.log(datas);
//       })


router.route("/remove").delete(async (req, res, next) => {
      const sql = "DELETE FROM blog_article_like WHERE `article_id` = ? AND user_id =?"
      const article = req.body.article
      const id = req.body.id
      console.log(req.body)
      const [datas] = await db.query(sql, [article, id]);
      res.send(datas)
})


module.exports = router;