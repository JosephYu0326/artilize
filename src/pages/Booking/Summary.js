import React from 'react'

function Summary(props) {
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
        <button className="btn btn-primary rounded-pill next-step-btn">
          下一步
        </button>
      </div>
    </>
  )
}

export default Summary
