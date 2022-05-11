//會員資料
import React from 'react'
import { Link } from 'react-router-dom'

function Users(props) {
  return (
    <>
      <div>會員資料</div>
      <Link to="users/login">會員登入</Link>
      <br />
      <Link to="users/edit">編輯會員資料</Link>
      <br />
      <Link to="users/signup">新會員註冊</Link>
      <br />
      <Link to="users/forgetpassword">會員忘記密碼</Link>
      <br />
      <Link to="users/orderrecord">訂單紀錄</Link>
      <br />
      <Link to="users/articlecollect">文章收藏</Link>
      <br />
      <Link to="users/productcollect">商品收藏</Link>
      <br />
      <Link to="users/personalpage">個人主頁</Link>
      <br />
      <Link to="users/mycoupon">我的優惠券</Link>
    </>
  )
}

export default Users
