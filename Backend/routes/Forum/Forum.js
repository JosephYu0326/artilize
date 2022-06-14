const express = require("express");
const router = express.Router();
const db = require("../../modules/mysql_config");
const multer = require("multer");
const app = require("../../app");
const { header } = require("express/lib/response");
//const forumSql = "SELECT * FROM blog_article JOIN blog_category ON blog_article.category = blog_category.sn JOIN users ON blog_article.users_id = users.id left JOIN blog_comment ON blog_article.article_id = blog_comment.article_id where blog_article.article_id = (select min(blog_article.article_id) from blog_article where blog_article.article_id > ?) UNION select * from blog_article JOIN blog_category ON blog_article.category = blog_category.sn 
// JOIN users ON blog_article.users_id = users.id left JOIN blog_comment ON blog_article.article_id = blog_comment.article_id where blog_article.article_id = (select max(blog_article.article_id) from blog_article where blog_article.article_id < ?) union select * FROM blog_article JOIN blog_category ON blog_article.category = blog_category.sn JOIN users ON blog_article.users_id = users.id left JOIN blog_comment ON blog_article.article_id = blog_comment.article_id WHERE blog_article.article_id =? ORDER by created_time;"
const forumSql = "SELECT * FROM blog_article JOIN blog_category ON blog_article.category = blog_category.sn JOIN users ON blog_article.users_id = users.userId"

// 文章依分類顯示
router.route("/")
  .get(async (req, res, next) => {
    if (req.query.topic == "null") {
      if (req.query.limit) {
        const limit = Number(req.query.limit)
        const page = Number(req.query.page)
        const sql = `SELECT blog_article.article_id, title, DATE_FORMAT(created_time, "%Y-%m-%d") AS created_time, content, category, users_id, sn, thema, userId, userAccount, userNickName, userAvatar,favorited
        FROM blog_article 
        JOIN blog_category ON blog_article.category = blog_category.sn 
        JOIN users ON blog_article.users_id = users.userId ORDER BY blog_article.created_time DESC LIMIT ?,?`;
        console.log(req.query);
        const [datas] = await db.query(sql, [limit, page]);
        // res.status(200).json
        res.json(datas);
      } else {
        console.log('topic is null');
        // const sql = `SELECT blog_article.article_id, title, DATE_FORMAT(blog_article.created_time, "%Y-%m-%d") AS created_time, content, category, users_id, sn, thema, userId, username, userNickName, userAvatar,favorited, DATE_FORMAT(COMMENT_time, "%Y-%m-%d")AS comment_time 
        // FROM blog_article 
        // JOIN blog_category ON blog_article.category = blog_category.sn 
        // JOIN users ON blog_article.users_id = users.userId 
        // JOIN blog_comment ON blog_article.article_id = blog_comment.article_id
        // ORDER BY blog_article.created_time DESC`
        const sql = `SELECT blog_article.article_id, title, DATE_FORMAT(blog_article.created_time, "%Y-%m-%d") AS created_time, content, category, users_id, sn, thema, userId, userAccount, userNickName, userAvatar,favorited
        FROM blog_article 
        JOIN blog_category ON blog_article.category = blog_category.sn 
        JOIN users ON blog_article.users_id = users.userId
        ORDER BY blog_article.created_time DESC;`
        console.log(req.query)
        const [datas] = await db.query(sql);
        res.json(datas);
      }

    } else {
      //console.log(req.query);
      const topic = decodeURI(`${req.query.topic}`);
      const sql =
        `SELECT blog_article.article_id,	
        title,
        DATE_FORMAT(blog_article.created_time, "%Y-%m-%d") AS created_time,	
        content	,
        category,
        users_id,	
        sn,	
        thema,
        favorited,
        userNickName,
        userAvatar
        FROM blog_article JOIN blog_category ON blog_article.category = blog_category.sn
        JOIN users ON users.userId = blog_article.users_id
        WHERE thema = ? ORDER BY blog_article.created_time DESC`;
      const [datas] = await db.query(sql, [topic]);
      res.json(datas);
    }
  })

//搜尋
router.route("/search")
  .post(async (req, res, next) => {
    let keyword = req.body.keyword
    // const sql = `SELECT * FROM blog_article WHERE title LIKE  ?  ORDER BY blog_article.created_time DESC;`
    const sql = `SELECT * FROM blog_article JOIN users ON users.userId = blog_article.users_id WHERE title LIKE  ?  ORDER BY blog_article.created_time DESC;`
    const [datas] = await db.query(sql, [`%${keyword}%`])
    res.json(datas)
    console.log(datas);
  })

// 文章依userID顯示
router.route("/FrPersonalPage/:userID")
  .get(async (req, res, next) => {
    const userId = req.params.userID;
    // console.log(id);
    const sql = "SELECT article_id, title, blog_article.created_time, content, users_id, thema, userNickName, userAccount, userAvatar FROM blog_article JOIN `blog_category` ON blog_article.category = blog_category.sn JOIN`users` ON blog_article.users_id = users.userId WHERE users_id = ? ORDER BY `blog_article`.`created_time` DESC";
    const [datas] = await db.query(sql, [userId]);
    res.json(datas);
  })


//分類
router.route("/category")
  .get(async (req, res, next) => {
    const sql =
      "SELECT * FROM blog_category";
    const [datas] = await db.query(sql);
    res.json(datas);
  })

router.route("/addarticle").post(async (req, res, next) => {
  // if (req.body.title === "iii" && req.body.content === "555") {
  //   console.log("sugoi");
  // } else {
  //   console.log(req.body);
  // }
  if (req.body) {
    const sql =
      // "INSERT INTO `blog_article`(`title`, `content`, `created_time`, `category`, `users_id`) VALUES (?,?,'20220505',?,?);";
      "INSERT INTO `blog_article`(`title`, `content`, `created_time`,favorited, `category`, `users_id`) VALUES (?,?,NOW(),0,? ,? );";
    const [datas] = await db.query(sql, [
      req.body.title,
      req.body.content,
      req.body.category,
      req.body.userid,
    ]);
    res.json(datas);
  }
});

//個別文章
router.route("/:id").get(async (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  const id = req.params.id;
  const sql = `${forumSql} where article_id = (select min(article_id) from blog_article where article_id > ?) 
  UNION select * from blog_article 
  JOIN blog_category ON blog_article.category = blog_category.sn 
  JOIN users ON blog_article.users_id = users.userId where article_id = (select max(article_id) from blog_article where article_id < ?) 
  union select * FROM blog_article JOIN blog_category ON blog_article.category = blog_category.sn 
  JOIN users ON blog_article.users_id = users.userId WHERE article_id =? ORDER BY ABS(article_id);`
  const datas = await db.query(sql, [id, id, id]);
  //console.log(datas[0]);
  res.json(datas[0]);
})
  .post((req, res, next) => {
    const id = req.body.id;
    const sql = "SELECT article_id, title, blog_article.created_time, content, users_id, thema, userNickName, userAccount, favorited, FROM blog_article JOIN `blog_category` ON blog_article.category = blog_category.sn JOIN`users` ON blog_article.users_id = users.userId WHERE article_id = ?"
    const [datas] = db.query(sql, [id]);
    res.json(datas);
  })
  .put(async (req, res, next) => {
    const sql = "UPDATE `blog_article` SET `title` = ?, `content` = ?, `category` = ? WHERE `blog_article`.`article_id` = ?;"
    const [datas] = await db.query(sql, [
      req.body.title,
      req.body.content,
      req.body.category,
      req.body.id,
    ]);
    console.log(req.body.title);
    res.json(datas);
  })
  .delete((req, res, next) => {
    const id = req.body.id;
    const sql = "DELETE FROM blog_article WHERE `blog_article`.`article_id` = ?"
    const datas = db.query(sql, [id]);
    console.log(`刪除文章id=${id}`);
    res.send(datas);
  });

// 取留言
router.route("/comments/:id").get(async (req, res, next) => {
  const id = req.params.id;
  const sql = `SELECT blog_article.article_id, blog_comment_id, Blog_comment_content, DATE_FORMAT(COMMENT_time, "%Y-%m-%d %H:%i") AS COMMENT_time, userNickName, userAccount, userAvatar, userId FROM blog_comment JOIN users ON blog_comment.user_id = users.userId JOIN blog_article ON blog_comment.article_id = blog_article.article_id where blog_article.article_id=? ORDER BY COMMENT_time DESC;`
  const datas = await db.query(sql, [id]);
  // console.log(datas[0]);
  res.json(datas[0]);
})


//WebSocketThing
const io = require('socket.io')(1337,{
  cors:{
    origin:['http://localhost:3000'],
  }
})
let n = 0;
io.on("connection",socket=>{
  const onlineCount = []
  socket.id = (++n).toString().padStart(4, "0")
  onlineCount.push(socket.id)
  console.log(onlineCount.length)
  socket.on('send-message', (message, userAccount) =>{
    socket.broadcast.emit('receive-message',  userAccount, message)
    console.log(`${message},${userAccount}`);
  })
})


module.exports = router;
