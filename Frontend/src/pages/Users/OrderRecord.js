//訂單紀錄
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa'
import FadeIn from 'react-fade-in'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import AsideBar from '../../component/AsideBar'
import { useState, useEffect } from 'react'

let storage = localStorage
let userId = parseInt(storage.getItem('userId'))

function OrderRecord(props) {
  const [datas, setDatas] = useState([])
  const [datas2, setDatas2] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/user/${userId}`
    )
    const results = await response.json()
    setDatas(results)
  }
  const fetchData2 = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/booking/product`
    )
    const results = await response.json()
    setDatas2(results)
  }
  useEffect(() => {
    fetchData()
    fetchData2()
  }, [])

  const btnList = {
    btnTitle: [
      '會員資料',
      '訂單紀錄',
      '文章收藏',
      '商品收藏',
      '個人主頁',
      '我的優惠券',
    ],
    btnTo: [
      '/users',
      '/users/orderrecord',
      '/users/articlecollect',
      '/users/productcollect',
      '/users/personalpage',
      '/users/mycoupon',
    ],
  }

  const bookRecord = datas.map((v, i) => {
    return (
      <Container key={i} className=" d-flex flex-wrap">
        <Row className="orderRecordCard m-1">
          <Col className="p-0" sm="12" md="3">
            <img
              src={`${process.env.REACT_APP_API_URL}/stylesheets/images/${v.cartExImage}`}
              alt={v.cartExImage}
            />
          </Col>
          <Col md="7" sm="12" className="text-start my-2">
            <div>
              <h4 className="h4 mb-2">{v.cartExTitle}</h4>
            </div>
            <div className="orderTxt d-flex justify-content-start align-items-center">
              <FaMapMarkerAlt className="me-2" />
              <div>{v.cartExMuseum}</div>
            </div>
            <div className="orderTxt d-flex justify-content-start align-items-center">
              <FaCalendarAlt className="me-2" />
              <div>
                {v.cartExStart} - {v.cartExEnd}
              </div>
            </div>
            <h6>展覽訂單編號:{v.cartExID}</h6>
          </Col>
          <Col md="2" sm="12" className="text-center">
            <Button variant="secondary rounded-pill my-2">
              <h5 className="h5">
                {v.cartExCategory}x{v.cartExCount}
              </h5>
            </Button>
          </Col>
        </Row>
      </Container>
    )
  })
  const bookRecord2 = datas2.map((v, i) => {
    return (
      <Container key={i} className=" d-flex flex-wrap">
        <Row className="orderRecordCard m-1">
          <Col className="p-0" sm="12" md="3">
            <img
              src={`${process.env.REACT_APP_API_URL}/stylesheets/images/${v.p_incart_img}`}
              alt={v.p_incart_img}
            />
          </Col>
          <Col md="7" sm="12" className="text-start my-2">
            <div>
              <h4 className="h4 mb-2">{v.p_incart_topic}</h4>
            </div>
            <div className="orderTxt d-flex justify-content-start align-items-center">
              <div className="d-flex align-items-center">
                <h6 className="mb-0">單價:</h6>
                <FaDollarSign />
                <p className="mb-0">
                  {v.p_incart_price.toLocaleString('en-US')}
                </p>
              </div>
            </div>
            <div className="orderTxt d-flex justify-content-start align-items-center">
              <h6 className="mb-0">數量:{v.p_incart_amount}</h6>
            </div>
            <div className="orderTxt d-flex justify-content-start align-items-center">
              <h6 className="mb-0">商品訂單編號:{v.id}</h6>
            </div>
          </Col>
          <Col md="2" sm="12" className="text-center">
            <Button variant="secondary rounded-pill my-2">
              <div className="d-flex align-items-center">
                <FaDollarSign />
                <h5 className="h5 mb-0">
                  {(
                    parseInt(v.p_incart_price) * parseInt(v.p_incart_amount)
                  ).toLocaleString('en-US')}
                </h5>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>
    )
  })
  return (
    <>
      <Header />
      <AsideBar btn={btnList} />
      <div className="container">
        <div className="userPage frContent">
          <h2>訂單紀錄 </h2>
          <h3>展覽/活動</h3>
          <hr />
          <FadeIn className="orderRecord w-100">{bookRecord}</FadeIn>
          <h3 className="mt-3">商品</h3>
          <hr />
          <FadeIn className="orderRecord w-100">{bookRecord2}</FadeIn>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OrderRecord
