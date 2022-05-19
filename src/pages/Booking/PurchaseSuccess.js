//購買完成
import React from 'react'
import { Link } from 'react-router-dom'

function PurchaseSuccess(props) {
  return (
    <>
      <div>購買完成</div>
      <div className="contaniner allTextStep">
        <div className="row d-flex justify-content-center">
          <div className="col-4 p-0">
            <div className="textStep1">
              <h3 className="ExtraBold">確認商品</h3>
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="textStep2">
              <h3 className="ExtraBold">確認付款</h3>
            </div>
          </div>
          <div className="col-4 p-0">
            <div className="textStep3">
              <h3 className="ExtraBold">購買完成</h3>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <ul className="step p-0">
            <li></li>
            <li classname="stepActive"></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PurchaseSuccess
