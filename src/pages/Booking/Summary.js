import React from 'react'
import { useState } from 'react'
import { shoppingListEx } from './Cart-ex'

let storage = localStorage
let userId = parseInt(storage.getItem('userId'))

function Summary(props) {
  const { totalPriceEx, totalPricePro, couponPrice, couponCode } = props
  const [exhibitionInorder, setExhibitionInorder] = useState(shoppingListEx)

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
      user_id: userId,
    }
  })

  function finishedCart(e) {
    e.preventDefault()
    let isPass = true // 有沒有通過檢查

    if (isPass) {
      fetch(`${process.env.REACT_APP_API_URL}/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      }).then((json) => console.log(json))
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

    storage.clear()
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
        <button
          className="btn btn-primary rounded-pill next-step-btn"
          onClick={finishedCart}
        >
          下一步
        </button>
      </div>
    </>
  )
}

export default Summary
