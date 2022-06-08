//訂單紀錄
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import FadeIn from 'react-fade-in'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import AsideBar from '../../component/AsideBar'
import { useState, useEffect } from 'react'

let storage = localStorage
let userId = parseInt(storage.getItem('userId'))

function OrderRecord(props) {
  const [datas, setDatas] = useState([])
  const [allDatas, setAllDatas] = useState([])

  const fetchData = async () => {
    const response = await fetch(`http://localhost:5050/booking/user/${userId}`)
    const results = await response.json()
    setDatas(results)
  }
  useEffect(() => {
    fetchData()
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
  return (
    <>
      <Header />
      <AsideBar btn={btnList} />
      <div className="container">
        <div className="userPage frContent">
          <h3>訂單紀錄 </h3>
          <FadeIn className="orderRecord w-100">{bookRecord}</FadeIn>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OrderRecord
