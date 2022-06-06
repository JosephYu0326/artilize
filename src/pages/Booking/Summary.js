import React from 'react'
import { useState } from 'react'
import { shoppingListEx } from './Cart-ex'

function Summary(props) {
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
  }

  const { totalPriceEx, totalPricePro } = props
  const discount = 10
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
          <div>-${discount}</div>
        </div>
        <div className="total-line"></div>
        <div className="total-frame">
          <div className="final-total">總金額</div>
          <div className="final-total-text">
            $
            {totalPriceEx
              ? totalPriceEx + totalPricePro - discount
              : totalPricePro - discount}
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
