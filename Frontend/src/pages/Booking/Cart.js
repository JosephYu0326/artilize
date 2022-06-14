//購物車
import React, { useEffect, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Cart.scss'
import step1 from './image/step.png'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTicketAlt } from 'react-icons/fa'
import { shoppingListEx } from './Cart-ex'
// import { shoppingListPro } from './Cart-pro'
import CartItemEx from './CartItemEx'
import CartItemPro from './CartItemPro'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import closePng from '../Exhibition/images/Category.png'

import Summary from './Summary'

import _ from 'lodash'

let storage = localStorage

var jsonData = []
var jsonData2 = []
var userId

function doFirst() {
  userId = parseInt(storage.getItem('userId'))
  console.log(userId)
  if (storage['addItemList'] == null) {
    storage['addItemList'] = ''
  }
  if (storage['addItemList2'] == null) {
    storage['addItemList2'] = ''
  }

  let temp = storage.getItem('addItemList').split(',')
  console.log(temp)

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '') continue
    jsonData.push(JSON.parse(storage.getItem(temp[i])))
  }
  // console.log(temp2.length)
  let temp2 = storage.getItem('addItemList2').split(',')
  console.log(temp2)
  for (let i = 0; i < temp2.length; i++) {
    if (temp2[i] === '') continue
    jsonData2.push(JSON.parse(storage.getItem(temp2[i])))
  }
}
window.addEventListener('load', doFirst())

function Cart(props) {
  useEffect(() => {
    userId = parseInt(storage.getItem('userId'))
    jsonData = []
    jsonData2 = []
    doFirst()
    setExhibitionInorder(jsonData)
    console.log(jsonData)
    setProductInorder(jsonData2)
    console.log(jsonData2)
  }, [])

  const [exhibitionInorder, setExhibitionInorder] = useState(jsonData)
  const [productInorder, setProductInorder] = useState(jsonData2)
  const [whichCoupon, setWhichCoupon] = useState([])

  const [couponCode, setCouponCode] = useState('')
  const [couponPrice, setCouponPrice] = useState(0)

  // 設定展覽數
  const setExCount = (newCount, i) => {
    const newExhibitionInorder = [...exhibitionInorder]
    newExhibitionInorder[i].count = newCount < 1 ? 1 : newCount
    setExhibitionInorder(newExhibitionInorder)
  }
  // 設定商品數
  const setProCount = (newCount, i) => {
    const newProductInorder = [...productInorder]
    newProductInorder[i].count = newCount < 1 ? 1 : newCount
    setProductInorder(newProductInorder)
  }
  // 展覽總數
  const totalNumberEx = () => {
    let total = 0
    for (let i = 0; i < exhibitionInorder.length; i++) {
      total += 1
    }
    return total
  }
  // 商品總數
  const totalNumberPro = () => {
    let total = 0
    for (let i = 0; i < productInorder.length; i++) {
      total += 1
    }
    return total
  }

  // 展覽總價
  const totalPriceEx = () => {
    let total = 0
    for (let i = 0; i < exhibitionInorder.length; i++) {
      total += exhibitionInorder[i].count * exhibitionInorder[i].TicketPrice
    }
    return total
  }

  // 商品總價
  const totalPricePro = () => {
    let total = 0
    for (let i = 0; i < productInorder.length; i++) {
      total += productInorder[i].count * productInorder[i].price
    }
    return total
  }

  // 展覽刪除
  const handleDeleteEx = (title) => {
    alert('確定要刪除該筆資料嗎？')

    storage['totalNum'] -= 1
    storage.removeItem(title)
    storage['addItemList'] = storage['addItemList'].replace(`${title},`, '')
    const newExhibitionInorder = [...exhibitionInorder].filter((v, i) => {
      return v.title !== title
    })

    setExhibitionInorder(newExhibitionInorder)
  }
  // 商品刪除
  const handleDeletePro = (id) => {
    alert('確定要刪除該筆資料嗎？')
    const newProductInorder = [...productInorder].filter((v, i) => {
      return v.id !== id
    })
    setProductInorder(newProductInorder)
  }

  // 優惠券
  const [datas, setDatas] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/coupon/user/${userId}`
    )
    const results = await response.json()
    let temp = results.filter((v, i) => !v.isUsed)
    setDatas(temp)
  }

  useEffect(() => {
    fetchData()
  }, [userId])

  function selectCoupon(e) {
    let index = parseInt(e.target.dataset.index)

    let check = document.querySelectorAll('.checkIcon')

    let array = []

    for (let i = 0; i < check.length; i++) {
      check[i].style.display = 'none'
      array.push(0)
    }

    let thetarget = check[index]
    if (whichCoupon[index]) {
      array[index] = 0
    } else {
      array[index] = 1
    }

    setWhichCoupon(array)

    if (array[index]) {
      thetarget.style.display = 'block'
    } else {
      thetarget.style.display = 'none'
    }
  }

  function assureCoupon() {
    if (whichCoupon.includes(1)) {
      let index
      for (let i = 0; i < whichCoupon.length; i++) {
        if (whichCoupon[i]) {
          index = i
          break
        }
      }
      let check = document.querySelectorAll('.codeName')
      let couponName = check[index].innerHTML
      setCouponCode(couponName)

      let price = document.querySelectorAll('.couponPrice')
      let couponPriceText = price[index].innerHTML
      let couponMoney = parseInt(couponPriceText.slice(6, 8))

      setCouponPrice(couponMoney)

      let input = document.querySelector('.coupon-input')
      input.value = couponName
    } else {
      let input = document.querySelector('.coupon-input')
      input.value = ''
      setCouponPrice(0)
    }
    closeWindow()
  }

  const couponCard = datas.map((v, i) => {
    return (
      <div key={i} className="coupon row col-md-12 col-lg-6 my-2">
        <Link
          to="#"
          onClick={selectCoupon}
          className="coupon-link"
          data-index={i}
        ></Link>
        <div className="checkIcon"></div>
        <div className="couponImage col-4">
          <FaTicketAlt className="couponIcon mt-2" />
          <div className="couponName">{v.couponKind}</div>
        </div>
        <div className="couponMsg text-center col-7">
          <h5 className="couponPrice">憑此券可折抵{v.couponPrice}$</h5>
          <div className="codeName">{v.couponName}</div>
        </div>
        <div className="couponInfo d-flex justify-content-around mt-1">
          <div className="usetext">期限{v.useDeadline}</div>
          <div className="usetext">{v.isUsed ? '已使用' : '未使用'}</div>
        </div>
      </div>
    )
  })

  function openCouponWindow() {
    let window = document.querySelector('.coupon-window')
    window.style.display = 'flex'

    let check = document.querySelectorAll('.checkIcon')

    let array = []

    for (let i = 0; i < check.length; i++) {
      array.push(0)
    }

    setWhichCoupon(array)
  }

  return (
    <>
      <Header />
      {/* <Link to="/booking/pay">付款</Link> */}
      <img className="step1" src={step1} alt="step1"></img>
      <div className="cart-frame ">
        <div className="cart-option">
          <button className="cart-option-btn select" onClick={showExhibition}>
            展覽({totalNumberEx()})
          </button>
          <button className="cart-option-btn" onClick={showProduct}>
            商品({totalNumberPro()})
          </button>
        </div>
      </div>
      <div className="cart-content-frame">
        <div className="cart-option-title">
          <div className="exhibition-title">展覽名稱 / 商品名稱</div>
          <div className="cart-title-other">
            <div className="style">票種 / 價位</div>
            <div className="style">數量</div>
            <div className="style">小計</div>
          </div>
        </div>
        <div className="selectExhibition">
          {exhibitionInorder.map((v, i) => {
            return (
              <CartItemEx
                key={i}
                title={v.title}
                start={v.start}
                end={v.end}
                buyTime={v.buyTime}
                category={v.TicketKind}
                price={v.TicketPrice}
                image={v.image}
                count={v.count}
                handleDelete={() => {
                  handleDeleteEx(v.title)
                }}
                setExCount={(newCount) => {
                  setExCount(newCount, i)
                }}
              />
            )
          })}
        </div>
        <div className="selectProduct">
          {productInorder.map((v, i) => {
            return (
              <CartItemPro
                key={v.id}
                id={v.id}
                title={v.title}
                price={v.price}
                image={v.image}
                count={v.count}
                handleDelete={() => {
                  handleDeletePro(v.id)
                }}
                setProCount={(newCount) => {
                  setProCount(newCount, i)
                }}
              />
            )
          })}
        </div>

        <div className="input-frame">
          <div className="discountText">使用優惠券</div>
          <input
            type="text"
            className="form-control coupon-input"
            placeholder="優惠券"
            onClick={openCouponWindow}
          />
          <div className="coupon-window">
            <h3>我的優惠券</h3>
            <div className="coupon-card-frame">
              <div className="mx-auto row justify-content-between coupon-window-inner">
                {couponCard}
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary rounded-pill assure-btn"
                onClick={assureCoupon}
              >
                確定
              </button>
            </div>
            <Link to="#">
              <img
                className="closeBtn"
                src={closePng}
                alt="closeBtn"
                onClick={closeWindow}
              />
            </Link>
          </div>
        </div>
        <Summary
          totalPriceEx={totalPriceEx()}
          totalPricePro={totalPricePro()}
          couponPrice={couponPrice}
          couponCode={couponCode}
          exhibitionInorder={exhibitionInorder}
          productInorder={productInorder}
        />
      </div>
      <Footer />
    </>
  )
}

function closeWindow() {
  let window = document.querySelector('.coupon-window')
  window.style.display = 'none'
}

function showExhibition() {
  let temp1 = document.querySelector('.selectProduct')
  let temp2 = document.querySelector('.selectExhibition')
  temp1.style.display = 'none'
  temp2.style.display = 'block'
}

function showProduct() {
  let temp1 = document.querySelector('.selectProduct')
  let temp2 = document.querySelector('.selectExhibition')
  temp1.style.display = 'block'
  temp2.style.display = 'none'
}
export default Cart
