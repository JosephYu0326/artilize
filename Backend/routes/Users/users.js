var express = require('express');
const { route } = require('../categories');
var router = express.Router();
const db = require('../../modules/mysql_config');
const multer = require('multer');
const upload = multer();
const nodemailer = require('nodemailer')
const transporter = {
  host:'smtp.gmail.com',
  port:587,
  secure:false,
  auth:{
    user:`${process.env.EMAIL}`,
    pass:`${process.env.EMAILPASSWORD}`,
  },
  secureConnection: 'false',
  tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false

  }
};
const transporter1 = nodemailer.createTransport(transporter)

/* GET users listing. */
router.get('/', async (req, res, next)=> {
  
  console.log(req.query.userId)
  const{userId} = req.query
  const sql = "SELECT userAccount,userAddress,userAvatar,DATE_FORMAT(userBirthday,'%Y-%m-%d') AS userBirthday,userEmail,userGender,userMobile,userName,userNickName FROM users WHERE userId=?"
  const [datas] = await db.query(sql,[userId])
  console.log(datas)
  res.send(datas)
});

router.post('/signup',upload.none(), async function (req, res, next) {
  let ouput = {
    ok:false
  }
  let data = JSON.parse(JSON.stringify(req.body))
  const{userAccount,userEmail,userPassword} = data
  const sql1 = `SELECT Count(*) as total FROM users WHERE userAccount=?`
  const [datas1] = await db.query(sql1,[userAccount])
  console.log(datas1[0].total)
  const sql2 = 'SELECT Count(*) as total FROM users WHERE userEmail=?'
  const [datas2] = await db.query(sql2,[userEmail])
  console.log(datas2[0].total)
  if(datas1[0].total > 0){
     ouput.message ='已有此帳號'
    res.json(ouput)
  }else if(datas2[0].total>0){
      ouput.message = '已有此Email'
      res.json(ouput)
  }else{

    const sql = "INSERT INTO users(userAccount,userPassword,userEmail) VALUES(?,?,?)"
    
    const [datas] = await db.query(sql,[userAccount,userPassword,userEmail])
    console.log(datas)
    if(datas.affectedRows === 1){
      ouput.ok = true
    }
    res.json(ouput);
  }

 
});

//Google登入
router.post('/googlelogin',upload.none(),async(req,res,next)=>{
  try {
    let output ={
      ok:false
    }
    console.log(req.body)
    const{email,account,picture,sub} = req.body
    const sql = "select Count(*) AS total from users WHERE userId=? and userEmail=?"
    const [checkDatas] = await db.query(sql,[sub,email])
    const sql2 = "select Count(*) AS totalEmail from users WHERE userEmail=?"
    const [checkEmail] = await db.query(sql2,[email])
    const sql5 = "select userAvatar from users Where userId=?"
    // console.log(Math.random().toString(36).slice(2) + 
    // Math.random().toString(36)
    //     .toUpperCase().slice(2))
    // console.log(checkEmail)
    const password = Math.random().toString(36).slice(2) + 
    Math.random().toString(36)
        .toUpperCase().slice(2)
    if(checkDatas[0].total>0){
      output.ok=true
      output.userId=sub
      const [avatar] = await db.query(sql5,[sub])
      const{userAvatar} = avatar[0]
      output.userAvatar=userAvatar
      res.json(output)
    }else if(checkEmail[0].totalEmail>0){
      const sql3 = "UPDATE users SET userId=? WHERE userEmail=?"
      const [changeId] = await db.query(sql3,[sub,email])
      output.ok=true
      output.userId=sub
      output.userAvatar=userAvatar
      res.json(output)
    }else{
      const sql4="INSERT INTO users(userId,userAccount,userEmail,userAvatar,userPassword) VALUES(?,?,?,'user.png',?)"
      const [insertDatas] = await db.query(sql4,[sub,account,email,password])
      if(insertDatas.affectedRows===1){
        output.ok=true
        output.userId = sub
        output.userAvatar='user.png'
        res.json(output)
      }
    }
    
  } catch (error) {
    console.log(error)
  }
})

//facebook 登入
router.post('/facebooklogin',async(req,res,next)=>{
  try {
    let output ={
      ok:false
    }
    // console.log(req.body)
    const{email,picture,userId,account}=req.body
    const sql = "select Count(*) AS total from users WHERE userId=? and userEmail=?"
    const [checkDatas] = await db.query(sql,[userId,email])
    const sql2 = "select Count(*) AS totalEmail from users WHERE userEmail=?"
    const [checkEmail] = await db.query(sql2,[email])
    const sql5 = "select userAvatar from users Where userId=?"
    const password = Math.random().toString(36).slice(2) + 
    Math.random().toString(36)
        .toUpperCase().slice(2)
    if(checkDatas[0].total>0){
      output.ok=true
      output.userId=userId
      const [avatar] = await db.query(sql5,[userId])
      const{userAvatar} = avatar[0]
      output.userAvatar=userAvatar
      res.json(output)
    }else if(checkEmail[0].totalEmail>0){
      const sql3 = "UPDATE users SET userId=? WHERE userEmail=?"
      const [changeId] = await db.query(sql3,[userId,email])
      output.ok=true
      output.userId=userId
      output.userAvatar=userAvatar
      res.json(output)
    }else{
      const sql4="INSERT INTO users(userId,userAccount,userEmail,userAvatar,userPassword) VALUES(?,?,?,'user.png',?)"
      const [insertDatas] = await db.query(sql4,[userId,account,email,password])
      if(insertDatas.affectedRows===1){
        output.ok=true
        output.userId = userId
        output.userAvatar='user.png'
        res.json(output)
      }
    }
    

  } catch (error) {
    console.log(error)
  }
})



//Account 驗證
router.get('/signup/checkaccount',async function(req,res,next){
  let output = {
      canUse: false
  }
  
  const sql = `SELECT Count(*) as total FROM users WHERE userAccount=?`
  const [datas]= await db.query(sql,[req.query.name])
  // console.log(datas)
  const {total}=datas[0]
  console.log(total)
  if(total > 0){
     
     res.json(output)
  }else{
    output.canUse = true
    res.json(output)
  }
})

//Email 驗證
router.get('/signup/checkemail', async (req,res,next)=>{
    let output ={
      canUse: false
    }
    const sql = 'SELECT Count(*) as total FROM users WHERE userEmail=?'
    const [datas]= await db.query(sql,[req.query.email])
    const{total}=datas[0]
    console.log(total)
    if(total>0){
      res.json(output)
    }else{
      output.canUse = true
      res.json(output)
    }

})

//登入
router.post('/login',upload.none(),async (req,res,next)=>{
  let output={
    ok:false
  }
  const info =JSON.parse(JSON.stringify(req.body))
  //console.log(info)
  const {userAccount,userPassword}=info
  const sql1 = 'SELECT Count(userAccount) as total FROM users WHERE userAccount=?'
  const[datas1] = await db.query(sql1,[userAccount])
  console.log(datas1[0].total)

  
  if(datas1[0].total===0){
    output.message='無此帳號或帳號輸入錯誤'
    res.json(output)
  }else{
    const sql = 'SELECT userId,userAccount,userPassword,userAvatar FROM users WHERE userAccount=? and userPassword=?'
    const [datas] =  await db.query(sql,[userAccount,userPassword])
    console.log(datas)
    if(datas.length>0){
      output.ok = true
      output.userId = datas[0].userId
      output.userAvatar = datas[0].userAvatar
      output.userAccount = datas[0].userAccount
  
      console.log(output)
      res.json(output)
   }else if(datas.length===0){
     console.log(output)
     output.message='密碼輸入錯誤'
     res.json(output)
   }
  
  }
 
 

})

//編輯
router.put('/edit',upload.none(),async(req,res,next)=>{
  try {
    let output = {
      ok:false
    }
    // console.log(req.body)
    const response = JSON.parse(JSON.stringify(req.body))
    console.log(response)
    const{userName,userMobile,userAddress,userNickName,userBirthday,userGender,userAvatar} = response
    const sql = "UPDATE users SET userName=?,userMobile=?,userAddress=?,userNickName=?,userBirthday=?,userGender=?,userAvatar=? WHERE userId=?"
    const [datas] = await db.query(sql,[userName,userMobile,userAddress,userNickName,userBirthday,userGender,userAvatar,req.query.id])
    const sql1 = "SELECT userAvatar from users where userId=?"
    const [datas1] = await db.query(sql1,req.query.id)
    console.log(datas1[0])
    if(datas.affectedRows ===1){
      output.ok = true
      output.userAvatar = datas1[0].userAvatar
    }
    // console.log(req.query.id)
    res.json(output)
    
  } catch (error) {
    console.log(error)
  }

})

//上傳圖片
const ext = {
  'image/jpeg':'.jpg',
  'image/png':'.png',
  'image/gif':'.gif',
}
const path= require("path");
const { getMaxListeners } = require('process');
const storage = multer.diskStorage({
  destination:(req,file,callBack)=>{
    callBack(null,'./public/images')
  },
  filename:(req,file,callBack)=>{
    callBack(null, new Date().getTime() + ext[file.mimetype])
  }
})
const fileFilter = (req,file,cb)=>{ 
  cb(null, !!ext[file.mimetype]);
}
const uploadImage = multer({storage, fileFilter});

router.post('/uploadImage',uploadImage.single("file"),async (req,res,next)=>{
  try {
    let output ={ok:false}
    if(req.file === undefined){
      res.json(output)
    }else{
      const response = (JSON.parse(JSON.stringify(req.file)))
      const {filename} = response
      output.ok = true
      output.filename = filename
      res.json(output)
  
    }
  } catch (error) {
    console.log(error)
  }
  // console.log(JSON.parse(JSON.stringify(req.body)))
  // console.log(JSON.parse(JSON.stringify(req.file)))

})

router.post('/changePassword',upload.none(),async(req,res,next)=>{
  try {
    let output = {
      ok:false
    }
    // console.log(req.query.userId)
    // console.log(req.body)
    const{oldPassword,newPassword,confirmNewPassword} =req.body
    // console.log(oldPassword)
    const sql = "SELECT COUNT(userPassword) AS total FROM users WHERE userPassword=? and userId=? "
    const [datas] = await db.query(sql,[oldPassword,req.query.userId])
    // console.log(datas[0].total)
    if(datas[0].total === 0){
      res.json(output)
    }else if(datas[0].total >0){
      const sql2 = "UPDATE users SET userPassword=? WHERE userId=?"
      const [datas1] = await db.query(sql2,[newPassword,req.query.userId])
      console.log(datas1)
      output.ok = true
      res.json(output)
    }

  } catch (error) {
    console.log(error)
  }
})

router.post('/resetPassword1',upload.none(),async(req,res,next)=>{
  try {
    let output = {
      ok:false
    }
    console.log(req.body)
    const {newPassword} = req.body
    console.log(req.query.userId)
    const sql = "UPDATE users SET userPassword=? WHERE userId=?"
    const [datas1] = await db.query(sql,[newPassword,req.query.userId])
    console.log(datas1)
    if(datas1.affectedRows===1){
      output.ok=true
      res.json(output)
    }
  } catch (error) {
    console.log(error)
  }
})





////email寄信

router.post('/resetpassword',upload.none(),async(req,res,next)=>{
  try {
    let output = {
      ok:false
    }
    console.log(req.body)
    const {userEmail} = req.body
    console.log(userEmail)
    const sql = 'SELECT userId,COUNT(userEmail) AS total,userAccount from users where userEmail=?'
    const [datas] = await db.query(sql,[userEmail])
    console.log(datas)
    const{total,userId,userAccount}=datas[0]
    // console.log(userEmail)
    console.log(total)
    if(total==0){
      console.log(output)
      res.json(output)
    }else if(total >0){

      transporter1.sendMail({
        from:`${process.env.EMAIL}`,
        to:`${userEmail}`,
        subject:"Artilize密碼重設確認信",
        html:`
              <!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Reset Password Email Template</title>
    <meta name="description" content="Reset Password Email Template." />
    <style type="text/css">
      a:hover {
        text-decoration: underline !important;
      }
    </style>
  </head>

  <body
    marginheight="0"
    topmargin="0"
    marginwidth="0"
    style="margin: 0px; background-color: #f2f3f8"
    leftmargin="0"
  >
    <!--100% body table-->
    <table
      cellspacing="0"
      border="0"
      cellpadding="0"
      width="100%"
      bgcolor="#f2f3f8"
      style="
        @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
        font-family: 'Open Sans', sans-serif;
      "
    >
      <tr>
        <td>
          <table
            style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto"
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td style="height: 80px">&nbsp;</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a href="http://localhost:3000" title="logo" target="_blank">
                  <img
                    width="60"
                    src="cid:unique@nodemailer.com"
                    title="logo"
                    alt="logo"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <tr>
              <td>
                <table
                  width="95%"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    max-width: 670px;
                    background: #fff;
                    border-radius: 3px;
                    text-align: center;
                    -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                  "
                >
                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="padding: 0 35px">
                      <h1
                        style="
                          color: #1e1e2d;
                          font-weight: 500;
                          margin: 0;
                          font-size: 32px;
                          font-family: 'Rubik', sans-serif;
                        "
                      >
                      ${userAccount}您好:
                      </h1>
                      <span
                        style="
                          display: inline-block;
                          vertical-align: middle;
                          margin: 29px 0 26px;
                          border-bottom: 1px solid #cecece;
                          width: 100px;
                        "
                      ></span>
                      <p
                        style="
                          color: #455056;
                          font-size: 15px;
                          line-height: 24px;
                          margin: 0;
                        "
                      >請點選按鈕以進行重設密碼</p>
                      <a
                        href="${process.env.URL}/users/resetpassword/${userId}"
                        style="
                          background: rgb(65, 83, 187);
                          text-decoration: none !important;
                          font-weight: 500;
                          margin-top: 35px;
                          color: #fff;
                          text-transform: uppercase;
                          font-size: 14px;
                          padding: 10px 24px;
                          display: inline-block;
                          border-radius: 50px;
                        "
                        >重設密碼</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <p
                  style="
                    font-size: 14px;
                    color: rgba(69, 80, 86, 0.7411764705882353);
                    line-height: 18px;
                    margin: 0 0 0;
                  "
                >
                  &copy; <strong>www.Artilize.com</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="height: 80px">&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  
  </body>
</html>
`,
attachments:[{
  filename:'image.png',
  path:"https://i.ibb.co/mzW7NgG/logo.png",
  cid:"unique@nodemailer.com"
}]
      }).then(info => {
        console.log({ info });
        output.ok=true
        res.json(output)
      }).catch(console.error);
    }
  } catch (error) {
    
  }
})
// 個人主頁文章顯示-佩珊
router.route("/personalpage")
  .post(async (req, res, next) => {
    const id = req.body.userID;
    //console.log(`目前登入使用者id=${id}`);
    const sql = `SELECT article_id, title, DATE_FORMAT(created_time, "%Y-%m-%d") AS created_time, content, users_id, thema, userNickName, userAccount, userAvatar FROM blog_article JOIN blog_category ON blog_article.category = blog_category.sn JOIN users ON blog_article.users_id = users.userId WHERE users_id = ? ORDER BY blog_article.created_time DESC`;
    const datas = await db.query(sql, [id]);
    res.json(datas[0]);
  })


module.exports = router;
