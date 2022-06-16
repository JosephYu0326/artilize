//我的優惠券
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTicketAlt } from 'react-icons/fa'
import FadeIn from 'react-fade-in'
import '../../styles/Forum.scss'
import AsideBar from '../../component/AsideBar'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import { useEffect, useState } from 'react'

let storage = localStorage
var userId
function doFirst() {
  userId = parseInt(storage.getItem('userId'))
}

window.addEventListener('load', doFirst())

function MyCoupon(props) {
  useEffect(() => {
    doFirst()
    userId = parseInt(storage.getItem('userId'))
  }, [])
  const btnList = {
    btnTitle: [
      '會員資料',
      '訂單紀錄',
      '文章收藏',
      '商品收藏',
      '個人主頁',
      '我的優惠券',
    ],
    btnTo: [
      '/users',
      '/users/orderrecord',
      '/users/articlecollect',
      '/users/productcollect',
      '/users/personalpage',
      '/users/mycoupon',
    ],
  }

  const [datas, setDatas] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/coupon/user/${userId}`
    )
    const results = await response.json()
    setDatas(results)

    let useText = document.querySelectorAll('.isUsed')

    // for (let i = 0; i < useText.length; i++) {
    //   if (useText[i].innerHTML === '未使用') {
    //     useText[i].style.color = 'blue'
    //   } else {
    //     useText[i].style.color = 'red'
    //   }
    // }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const [isUsed, setisUsed] = useState('isUsedBlue')
  const [isUsed1, setisUsed1] = useState('isUsedRed')

  const couponCard = datas.map((v, i) => {
    return (
      <div key={i} className="coupon row col-md-12 col-lg-6 my-2">
        <div
          className="couponImage col-4 "
          style={{ paddingRight: '28px', paddingTop: '15px' }}
        >
          <FaTicketAlt className="couponIcon mt-2" />
          <h6 className="couponName">{v.couponKind}</h6>
        </div>
        <div className="couponMsg text-center col-7">
          <h5>憑此券可折抵{v.couponPrice}$</h5>
          <div className="codeName">{v.couponName}</div>
        </div>
        <div className="couponInfo d-flex justify-content-around mt-2">
          <div className="usetext">期限{v.useDeadline}</div>
          <div className={`usetext ${!v.isUsed ? isUsed : isUsed1}`}>
            {v.isUsed ? '已使用' : '未使用'}
          </div>
        </div>
      </div>
    )
  })
  return (
    <>
      <Header />
      <AsideBar btn={btnList} />
      <FadeIn>
        <div className="container ">
          <div className="userPage  mx-auto frContent row justify-content-between">
            <h3>我的優惠券</h3>
            {couponCard}
          </div>
        </div>
      </FadeIn>
      <Footer />
    </>
  )
}

export default MyCoupon
