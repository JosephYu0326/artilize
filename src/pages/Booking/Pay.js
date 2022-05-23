//付款
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Pay.scss'
import progressBar from './image/progressBar.png'

function Pay(props) {
  return (
    <>
      <Link to="/booking/purchasesuccess">購買完成</Link>
      <main>
        <div className="container allTextStep">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <img src={progressBar} className="img-fluid" alt="progressBar" />
            </div>
          </div>
        </div>
        {/* 手機才會出現 */}
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
                <section className="payForm  mb-5">
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
                <section className="payForm  mb-5 ">
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
                  <div className="row">
                    <div className="col-3 p-1">
                      {' '}
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
                    </div>
                    <div className="col-3 p-1">
                      {' '}
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
                    </div>
                    <div className="col-6 p-1">
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
                    </div>
                  </div>
                  {/* ******************* */}
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
            {/* </div> */}

            {/* <div className="container"> */}
            <div className="row d-flex justify-content-center ">
              <div className="col-8 paywidth">
                <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
                  <div className="p-2 bd-highlight">
                    <h5>優惠券哲扣</h5>
                  </div>
                  <div className="p-2 bd-highlight">
                    <h5>-$10</h5>
                  </div>
                </div>
                <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
                  <div className="p-2 bd-highlight">
                    <h5>總金額</h5>
                  </div>
                  <div className="p-2 bd-highlight" style={{ color: 'red' }}>
                    <h5>$190</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}

            {/* <div className="container"> */}
            <div className="row d-flex justify-content-center ">
              <div className="col-8  paywidth">
                <section className="payForm  mb-5 ">
                  <div className="d-grid gap-2 ">
                    <button className="btn btn-primary " type="button">
                      上一步
                    </button>
                    <button className="btn btn-primary" type="submit">
                      <Link to="/booking/purchasesuccess" />
                      送出訂單
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
          {/* </div> */}
        </form>
      </main>
    </>
  )
}

export default Pay
