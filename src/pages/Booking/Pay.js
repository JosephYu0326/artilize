//付款
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Pay.scss'
import progressBar from './image/progressBar.png'

import { useState } from 'react'
const creditRule = /^\d{4}-\d{4}-\d{4}-\d{4}$/
const emailRule =
  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/

function Pay(props) {
  //信用卡
  const [credit, setCredit] = useState('')
  const [creditTouched, setCreditTouched] = useState(false)
  const [email, setEmail] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)

  const creditIsValid = creditRule.test(credit)

  const emailIsValid = emailRule.test(email)

  const onChangeName = (e) => setCredit(e.target.value)
  const onBlurName = () => setCreditTouched(true)
  const onChangeEmail = (e) => setEmail(e.target.value)
  const onBlurEmail = () => setEmailTouched(true)

  const onFormSubmit = (e) => {
    e.preventDefault()

    if (!creditIsValid) setCreditTouched(true)
    if (!emailIsValid) setEmailTouched(true)
    if (!creditIsValid || !emailIsValid) return

    console.log('submit success!')
    console.log(credit, email)

    // reset
    setCredit('')
    setCreditTouched(false)
    setEmail('')
    setEmailTouched(false)
  }

  const nameInputClasses = !creditIsValid && setCreditTouched ? 'invalid' : ''
  const emailInputClasses = !emailIsValid && emailTouched ? 'invalid' : ''

  // select 縣市
  const [city, setCity] = useState('')
  const city1 = [
    '基隆市',
    '台北市',
    '新北市	',
    '桃園縣',
    '新竹市',
    '新竹縣',
    '苗栗縣',
    '台中市',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義市',
    '嘉義縣',
    '台南市',
    '高雄市',
    '屏東縣',
    '台東縣',
    '花蓮縣',
    '宜蘭縣',
    '澎湖縣',
    '金門縣',
    '連江縣',
  ]

  // select 地區
  //direction setDirection
  const [direction, setDirection] = useState('')
  const direction1 = ['北部', '中部', '南部', '東部', '離島']

  return (
    <>
      <Link to="/booking/purchasesuccess">購買完成</Link>
      <main>
        <div className="container ">
          <div className="row maxwidth ">
            <div className="col-12 d-flex justify-content-center">
              <img src={progressBar} className="img-fluid" alt="progressBar" />
            </div>
          </div>
          {/* 手機才會出現 */}
          <div className="col-12 phoneTitle">
            <h1>確認付款</h1>
          </div>
        </div>
        {/* form  */}
        <form onSubmit={onFormSubmit} novalidate>
          <div className="container ">
            <div className="row maxwidth style={ }">
              {/* <div className=" style={ border :1px solid ;}"> */}
              <div className="col-12 pb-1">
                <h1>付款方式</h1>
                <label htmlFor="credit" className="form-label">
                  信用卡
                </label>
                <input
                  type="text"
                  className="form-control "
                  id={nameInputClasses}
                  placeholder="卡號 xxxx-xxxx-xxxx-xxxx"
                  // id="credit"
                  onChange={onChangeName}
                  onBlur={onBlurName}
                  value={credit}
                />
                {!creditIsValid && creditTouched && (
                  <h6 className="error-text">請輸入正確的卡號</h6>
                )}
                <h6>請輸入正確的卡號</h6>
              </div>
              <div className="col-12 ">
                {/* <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label> */}
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="持卡人姓名 CHUNG HSIEN YU"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
                <h6>請輸入正確的姓名</h6>
              </div>
              <div className="col-12 ">
                {/* <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label> */}
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="有效日期 04/29"
                />
                <h6>請輸入有效的日期</h6>
              </div>
              <div className="col-12  ">
                {/* <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label> */}
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="信用卡後三碼"
                />
                <h6>請輸入正確卡號</h6>
              </div>
              {/* </div> */}
            </div>

            <div className="row  maxwidth style={ border :1px solid ;}">
              {/* <div className="p-0 style={ border :1px solid ;}"> */}
              <div className="col-12 ">
                <section>
                  <h3>收件人資料</h3>
                  {/* <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  ></label> */}
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="姓名 冰川沙耶"
                  />
                  <h6>請輸入正確的名稱</h6>
                </section>
              </div>
              <div className="col-md-3 col-sm-12  ">
                <select
                  class="form-select form-select-sm mb-0"
                  aria-label=".form-select-sm example"
                  className="form-select"
                  name="fkCityId"
                  id="city"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value)
                  }}
                >
                  <option selected>請選擇縣市</option>
                  {city1.map((v, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {v}
                      </option>
                    )
                  })}
                </select>
                <h6>請輸入正確的名稱</h6>
              </div>
              <div className="col-md-3 col-sm-12  ">
                <select
                  class="form-select form-select-sm mb-3"
                  aria-label=".form-select-sm example"
                  name="direction"
                  id="direction"
                  value={direction}
                  onChange={(e) => {
                    setDirection(e.target.value)
                  }}
                >
                  <option selected>請選擇區域</option>
                  {direction1.map((v, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {v}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="col-md-6 col-sm-12 ">
                <section className="">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="exampleFormControlInput1"
                    placeholder="請輸入地址"
                  />
                </section>
              </div>
              <div className="col-12 ">
                {/* <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label> */}
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="pkujm951@gmail.com"
                />
                <h6>請輸入正確的email</h6>
              </div>
              <div className="col-12 ">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="電話 09XXXXXXXX"
                />
                <h6>請輸入正確的電話格式</h6>
              </div>
              {/* </div> */}
            </div>
            <div className="row d-flex justify-content-center maxwidth">
              {/* <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  "> */}
              <div className="col-12 paywidth">
                <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
                  <div className="p-2 bd-highlight">
                    <h5>優惠券哲扣</h5>
                  </div>
                  <div className="p-2 bd-highlight">
                    <h5>-$10</h5>
                  </div>
                </div>
                <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
                  <div className="p-2 bd-highlight ">
                    <h5>總金額</h5>
                  </div>
                  <div className="p-2 bd-highlight " style={{ color: 'red' }}>
                    <h4>$190</h4>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <section className=" mb-5">
                  <div className="d-grid gap-2 mb-2">
                    <button className="btn btn-primary " type="button">
                      上一步
                    </button>
                  </div>

                  <div className="d-grid gap-2 ">
                    <button className="btn btn-primary" type="submit">
                      {/* <Link to="/booking/purchasesuccess" /> */}
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
