//購買完成
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/PurchaseSuccess.scss'
import success from './image/success.png'
import pic from './image/1654406994908.jpg'

function PurchaseSuccess(props) {
  return (
    <>
      {/* <div>購買完成</div> */}
      <div className="container ">
        <div className="allTextStep">
          <div className="row d-flex justify-content-center">
            <div className="col-6 mb-5">
              <img src={success} className="img-fluid" alt="progressBar" />
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
        <div className="row ">
          <div className="col-12  ">
            <div className="purchaseSuccess mx-auto">
              <div className="card mb-3 border-0">
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <img
                      src={pic}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6 ">
                    {/* <ul class="list-group list-group-flush">
                      <li class="list-group-item">An item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                    </ul> */}
                    <div className="card-body">
                      <h5 className="card-title">
                        【掘光而行│洪瑞麟】展覽票券
                      </h5>

                      <p className="card-text">展期2022-03-19 ~ 2022-07-31</p>
                      <p className="card-text">購買日期：2021/04/07</p>
                      <p className="card-text">
                        <small className="text-muted">
                          購買日期：2021/04/07
                        </small>
                      </p>
                      <p className="card-text">普通票X2</p>
                    </div>
                  </div>
                  <div className="col-md-2 align-self-end">
                    <h5 className="card-title text-center">200元</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center purchaseSuccess">
          <div className="col-12 paywidth">
            <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
              <div className="p-2 bd-highlight">
                <h5>付款方式</h5>
              </div>
              <div className="p-2 bd-highlight">
                <h5>信用卡</h5>
              </div>
            </div>
            <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
              <div className="p-2 bd-highlight ">
                <h5>總金額</h5>
              </div>
              <div className="p-2 bd-highlight " style={{ color: 'red' }}>
                <h4>$200</h4>
              </div>
            </div>
          </div>
          <div className="col-12 ">
            <section className=" mb-5">
              <div className="d-grid gap-2 mb-2">
                <button className="btn btn-primary " type="button">
                  回首頁
                </button>
              </div>

              <div className="d-grid gap-2 ">
                <button className="btn btn-primary" type="submit">
                  我的訂單
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default PurchaseSuccess
// style={{ maxwidth: '540px' }}
