import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { shoppingListEx } from './Cart-ex'
// import { useNavigate } from 'react-router-dom'

let storage = localStorage
let userId = parseInt(storage.getItem('userId'))

function Summary(props) {
  const {
    totalPriceEx,
    totalPricePro,
    couponPrice,
    couponCode,
    exhibitionInorder,
    productInorder,
  } = props

  const body = exhibitionInorder.map((v, i) => {
    return {
      cartExTitle: v.title,
      cartExStart: v.start,
      cartExEnd: v.end,
      cartExImage: v.image,
      cartExBuyTime: v.buyTime,
      cartExPrice: v.TicketPrice,
      cartExCount: v.count,
      cartExCategory: v.TicketKind,
      cartExMuseum: v.museum,
      user_id: v.userID,
    }
  })
  const body2 = productInorder.map((v, i) => {
    return {
      product_name: v.title,
      product_img: v.image,
      amountTotal: v.count,
      product_price: v.price,
      userId: v.userID,
    }
  })
  const history = useHistory()
  const a = totalPriceEx + totalPricePro - couponPrice
  console.log(a)

  function finishedCart(e) {
    e.preventDefault()
    let isPass = true // 有沒有通過檢查

    if (isPass) {
      if (storage.getItem('addItemList')) {
        fetch(`${process.env.REACT_APP_API_URL}/booking`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(body),
        }).then((json) => console.log(json))
      }
      if (storage.getItem('addItemList2')) {
        fetch(`${process.env.REACT_APP_API_URL}/booking/product`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(body2),
        }).then((json) => console.log(json))
      }
    }

    const coupon = {
      couponName: `${couponCode}`,
      isUsed: 1,
    }
    if (couponCode) {
      fetch(`${process.env.REACT_APP_API_URL}/booking/coupon`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(coupon),
      }).then((json) => console.log(json))
    }

    history.push('/booking/pay')
    localStorage.setItem('totalPrice', a)
    // window.location.href = '/booking/pay'
  }

  return (
    <>
      <div className="bottom-frame">
        <div className="total-frame">
          <div>展覽</div>
          <div>${totalPriceEx ? totalPriceEx : 0}</div>
        </div>
        <div className="total-frame">
          <div>商品</div>
          <div>${totalPricePro}</div>
        </div>
        <div className="total-frame">
          <div>優惠券折扣</div>
          <div>-${couponPrice}</div>
        </div>
        <div className="total-line"></div>
        <div className="total-frame">
          <div className="final-total">總金額</div>
          <div className="final-total-text">
            $
            {totalPriceEx
              ? totalPriceEx + totalPricePro - couponPrice
              : totalPricePro - couponPrice}
          </div>
        </div>
        <Link
          to="/booking/pay"
          className="btn btn-primary rounded-pill next-step-btn"
          onClick={finishedCart}
        >
          下一步
        </Link>
      </div>
    </>
  )
}

export default Summary
