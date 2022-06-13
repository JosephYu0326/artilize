import { logDOM } from '@testing-library/react'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/AsideBar.scss'

function AsideBar(props) {
  //在要引入的<AsideBar / >裡面，加上btn屬性接收參數
  //<AsideBar btn={常數名稱}
  //const 常數名稱 = {
  //   btnTitle: [
  //     "會員資料",
  //     "訂單紀錄",
  //     "文章收藏",
  //     "商品收藏",
  //     "個人主頁",
  //     "我的優惠券",
  //   ],
  //   btnTo: [
  //     "/users",
  //     "/users/orderrecord",
  //     "/users/articlecollect",
  //     "/users/productcollect",
  //     "/users/personalpage",
  //     "/users/mycoupon"
  //   ],
  // }
  const btnTitleName = props.btn.btnTitle
  const btnRouterName = props.btn.btnTo

  const btnList = btnTitleName.map((v, i) => {
    return (
      <Link key={i} to={btnRouterName[i]} className="btn asideBtn">
        {btnTitleName[i]}
      </Link>
    )
  })

  return (
    <>
      <input type="checkbox" name="" id="sideMenu-switch"></input>
      <aside className="px-3 asideBar">
        <label
          htmlFor="sideMenu-switch"
          className="align-self-end justify-content-center"
        >
          <FaAngleRight className="faAngleRight " />
        </label>
        {btnList}
      </aside>
    </>
  )
}
export default AsideBar
