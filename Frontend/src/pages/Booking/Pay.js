//

import { Form, Col, Button, Feedback } from 'react-bootstrap'
import { FaDollarSign } from 'react-icons/fa'
//付款
import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/Pay.scss'
import progressBar from './image/progressBar.png'

import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

import { useState } from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

function Pay(props) {
  //信用卡
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  // select 縣市
  const [city, setCity] = useState('')
  const city1 = [
    '基隆市',
    '台北市',
    '新北市',
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
  // let el3 = document.querySelector('img')
  // const pageWidth = document.documentElement.scrollWidth
  // console.log('pageWidth', pageWidth)
  // if (pageWidth < 576) {
  //   el3.parentElement.removeChild(el3)
  // }

  // select 地區
  //direction setDirection
  const [direction, setDirection] = useState('')
  const direction1 = ['北部', '中部', '南部', '東部', '離島']
  //
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      history.push('/booking/PurchaseSuccess')
      const temp = localStorage.getItem('addItemList').split(',')
      const temp2 = localStorage.getItem('addItemList2').split(',')
      for (let i = 0; i < temp.length - 1; i++) {
        localStorage.removeItem(temp[i])
      }
      for (let i = 0; i < temp2.length - 1; i++) {
        localStorage.removeItem(temp2[i])
      }
      localStorage.removeItem('totalPrice')
      localStorage.removeItem('addItemList')
      localStorage.removeItem('addItemList2')
      localStorage.setItem('totalNum', 0)
    }

    setValidated(true)
  }
  const totalPrice = localStorage.getItem('totalPrice')

  const history = useHistory()

  return (
    <>
      <Header />
      <main className="pay ">
        <div className="container ">
          <div className="progressBar">
            <div className="row maxwidthimg ">
              <div className="col-12 d-flex justify-content-center progressBar">
                <img
                  src={progressBar}
                  className="img-fluid"
                  alt="progressBar"
                />
              </div>
            </div>
          </div>
          {/* 手機才會出現 */}
          <div className="col-12 phoneTitle">
            <h1>確認付款</h1>
          </div>
        </div>
        {/* Form   */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="container ">
            <div className="row maxwidth style={ }">
              {/* <div className=" style={ border :1px solid ;}"> */}
              <div className="col-md-12  ">
                <h1>付款方式</h1>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  信用卡
                </label>
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <Form.Control
                  className="form-control "
                  id="exampleFormControlInput1"
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  //
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  //required
                  // pattern="/\d{16}/"

                  minLength="16"
                  maxLength="16"
                  required
                />
                {/* <h6>請輸入</h6> */}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入正確的卡號</h6>
                </Form.Control.Feedback>
              </div>

              <div className="col-md-6 col-sm-12 mb-3">
                {/* <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label> */}
                <Form.Control
                  // type="text"
                  // placeholder="持卡人姓名 CHUNG HSIEN YU"
                  className="form-control"
                  id="exampleFormControlInput1"
                  //
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  required
                  minLength="2"
                  maxLength="4"
                />
                {/* <h6>請輸入正確的姓名</h6> */}
                {/* <h6>請輸入</h6> */}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入正確的姓名</h6>
                </Form.Control.Feedback>
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                {/* <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label> */}
                <Form.Control
                  // type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  // placeholder="有效日期 04/29"
                  //
                  type="text"
                  name="expiry"
                  placeholder="MM/YY Expiry"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  required
                  pattern="^(?:0[1-9]|1[0-2])(\d{2})$"
                  // minLength="4"
                />
                {/* <h6>請輸入</h6> */}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入有效的日期</h6>
                </Form.Control.Feedback>
              </div>
              <div className="col-md-6  col-sm-12 mb-3">
                {/* <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label> */}
                <Form.Control
                  // type="text"
                  placeholder="信用卡後三碼"
                  className="form-control"
                  id="exampleFormControlInput1"
                  //
                  type="tel"
                  name="cvc"
                  // placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  required
                  // pattern="/^\d{3}$/"
                  pattern="(\d{3})$"
                  // minLength="3"
                  maxLength="3"
                />
                {/* <h6>請輸入正確卡號</h6> */}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入正確卡號</h6>
                </Form.Control.Feedback>
              </div>
              <div className="col-md-12 justify-content-center">
                {' '}
                <Cards
                  number={number}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focus}
                />
              </div>
              {/* </div> */}
            </div>

            <div className="row  maxwidth style={ border :1px solid ;}">
              {/* <div className="p-0 style={ border :1px solid ;}"> */}
              <div className="col-md-12 mb-3">
                <section>
                  <h3>收件人資料</h3>
                  {/* <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  ></label> */}
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="姓名"
                    required
                    pattern="^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$"
                    minLength="2"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    <h6>請輸入正確的名稱</h6>
                  </Form.Control.Feedback>
                </section>
                {/* <h6>請輸入正確的名稱</h6> */}
              </div>

              <div className="col-md-3 col-sm-12 mb-3 ">
                <Form.Control
                  required
                  as="select"
                  custom
                  className="form-select form-select-sm mb-3"
                  aria-label=".form-select-sm example"
                  name="direction"
                  id="direction"
                  value={direction}
                  onChange={(e) => {
                    setDirection(e.target.value)
                  }}
                >
                  <option value="">請選擇區域</option>
                  {direction1.map((v, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {v}
                      </option>
                    )
                  })}
                </Form.Control>
              </div>
              <div className="col-md-3 col-sm-12 mb-3 ">
                <Form.Control
                  required
                  as="select"
                  custom
                  className="form-select form-select-sm mb-0"
                  aria-label=".form-select-sm example"
                  // className="form-select"
                  name="fkCityId"
                  id="city"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value)
                  }}
                >
                  <option value="">請選擇縣市</option>
                  {city1.map((v, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {v}
                      </option>
                    )
                  })}
                </Form.Control>
                {/* <h6>請輸入縣市區域地址</h6> */}
              </div>
              <div className="col-md-6 col-sm-12 mb-3 ">
                <section className="">
                  <Form.Control
                    type="text"
                    className="form-control mb-3"
                    id="exampleFormControlInput1"
                    placeholder="請輸入地址"
                    required
                    pattern="^[\u4e00-\u9fa5]+$|^[a-zA-Z\s]+$"
                    minLength="2"
                  />
                  <Form.Control.Feedback></Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {/* <h6>請輸入正確請輸入地址</h6> */}
                  </Form.Control.Feedback>
                </section>
              </div>
              <div className="col-12 mb-3">
                {/* <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label> */}
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="email"
                  required
                  // pattern="/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/"
                  // minLength="2"
                />
                {/* <h6>請輸入正確的email</h6> */}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入正確的email</h6>
                </Form.Control.Feedback>
              </div>
              <div className="col-12 mb-3">
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="電話"
                  required
                  minLength="9"
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入正確的電話格式</h6>
                </Form.Control.Feedback>
              </div>
              {/* </div> */}
            </div>
            <div className="row d-flex justify-content-center maxwidth">
              {/* <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  "> */}
              <div className="col-12 paywidth">
                {/* <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
                  <div className="p-2 bd-highlight">
                    <h5>優惠券哲扣</h5>
                  </div>
                  <div className="p-2 bd-highlight">
                    <h5>-$10</h5>
                  </div>
                </div> */}
                <div className="d-flex flex-row bd-highlight mb-3 justify-content-between  ">
                  <div className="p-2 bd-highlight ">
                    <h5>總金額</h5>
                  </div>
                  <div className="p-2 bd-highlight " style={{ color: 'red' }}>
                    <div className="d-flex align-items-center">
                      <FaDollarSign />
                      <h4 className="mb-0">
                        {parseInt(totalPrice).toLocaleString('en-US')}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 ">
                <section className=" mb-5">
                  <div className="d-grid gap-2 mb-3">
                    <button
                      className="btn btn-primary "
                      type="button"
                      onClick={() => {
                        history.push('/booking/cart')
                      }}
                    >
                      上一步
                    </button>
                  </div>

                  <div className="d-grid gap-2 ">
                    <button className="btn btn-primary">
                      {/* <Link to="/booking/purchasesuccess" /> */}
                      送出訂單
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Form>
      </main>
      <Footer />
    </>
  )
}

export default Pay
