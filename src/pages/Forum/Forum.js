//討論區列表
import React from 'react'
import { Link } from 'react-router-dom'

function Forum(props) {
  return (
    <>
      <div>討論區列表</div>
      <Link to="/forum/article">檢視文章</Link>
      <br />
      <Link to="/forum/addarticle">新增文章</Link>
      <br />
      <Link to="/forum/frpersonalpage">個人頁面</Link>
      <br />
    </>
  )
}

export default Forum
