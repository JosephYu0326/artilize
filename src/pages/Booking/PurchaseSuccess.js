//購買完成
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/PurchaseSuccess.scss'
import progressBar from './image/progressBar.png'

function PurchaseSuccess(props) {
  return (
    <>
      <div>購買完成</div>
      <div className="container ">
        <div className="container allTextStep">
          <div className="row d-flex justify-content-center">
            <div className="col-6 mb-5">
              <img src={progressBar} class="img-fluid" alt="progressBar" />
            </div>
          </div>
        </div>
        <div className="row d-flex justitfy-content-center">
          <div className="col p-0"></div>
        </div>
        <div className="row ">
          <div className="col-12 ">
            <div className="greeting">
              <h3 className="Regular">感謝您的訂購</h3>
              <h3 className="Regular">訂單明細已寄到您的e-mail</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseSuccess
