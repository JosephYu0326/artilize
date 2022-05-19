//付款
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Pay.scss'

function Pay(props) {
  return (
    <>
      {/* <Link to="/booking/purchasesuccess">購買完成</Link> */}
      <main>
        <div className="contaniner allstep">
          <div className="row d-flex justify-content-center">
            <div className="col-4 p-0">
              <div className="textstep1">
                <h3>確認商品</h3>
              </div>
            </div>
            <div className="col-4 p-0">
              <div className="textstep2">
                <h3>確認付款</h3>
              </div>
            </div>
            <div className="col-4 p-0">
              <div className="textstep3">
                <h3>購買完成</h3>
              </div>
            </div>
          </div>
        </div>
        <ul className="step">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="container ">
          <div className="row d-flex justify-content-center ">
            <div className="col-10 payyes">
              <h1>確認付款</h1>
            </div>
          </div>
        </div>
        <form>
          <div className="container ">
            <div className="row d-flex justify-content-center ">
              <div className="col-8 paywidth">
                <section className="payForm pb-4 mb-5">
                  <h1>付款方式</h1>

                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    信用卡
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="卡號 0000 0000 0000"
                  />
                  <h6>請輸入正確的卡號</h6>

                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="持卡人姓名 CHUNG HSIEN YU"
                  />
                  <h6>請輸入正確的姓名</h6>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="有效日期 04/29"
                  />
                  <h6>請輸入有效的日期</h6>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="信用卡後三碼"
                  />
                  <section>
                    <h6>請輸入正確性名</h6>
                  </section>
                </section>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row d-flex justify-content-center ">
              <div className="col-8 paywidth">
                <section className="payForm pb-4 mb-5 ">
                  <h3>收件人資料</h3>

                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="姓名 冰川沙耶"
                  />
                  <h6>請輸入正確的卡號</h6>

                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="持卡人姓名 CHUNG HSIEN YU"
                  />
                  <h6>請輸入正確地址</h6>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="有效日期 04/29"
                  />
                  <h6>請輸入正確的email</h6>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="信用卡後三碼"
                  />
                  <h6>請輸入正確的電話格式</h6>
                </section>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row d-flex justify-content-center ">
              <div className="col-8 paywidth">
                <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
                  <div className="p-2 bd-highlight">
                    <h6>優惠券哲扣</h6>
                  </div>
                  <div className="p-2 bd-highlight">
                    <h6>-$10</h6>
                  </div>
                </div>
                <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
                  <div className="p-2 bd-highlight">
                    <h6>總金額</h6>
                  </div>
                  <div className="p-2 bd-highlight">
                    <h6>$190</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row d-flex justify-content-center ">
              <div className="col-8  paywidth">
                <section className="payForm pb-4 mb-5 ">
                  <div className="d-grid gap-2 ">
                    <button className="btn btn-primary " type="button">
                      上一步
                    </button>
                    <button className="btn btn-primary" type="button">
                      送出訂單
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export default Pay
