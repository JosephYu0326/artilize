//訂單紀錄
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import FadeIn from "react-fade-in";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import AsideBar from "../../component/AsideBar";

function OrderRecord(props) {
  const btnList = 
    {
      btnTitle: [
        "會員資料",
        "訂單紀錄",
        "文章收藏",
        "商品收藏",
        "個人主頁",
        "我的優惠券",
      ],
      btnTo: [
        "/users",
        "/users/orderrecord",
        "/users/articlecollect",
        "/users/productcollect",
        "/users/personalpage",
        "/users/mycoupon"
      ],
    }
  return (
    <>
      <Header/>
      <AsideBar btn={btnList}/>
      <div className="container">
        <div className="userPage frContent">
          <h3>訂單紀錄 </h3>
          <FadeIn className="orderRecord w-100">
            <Container className=" d-flex flex-wrap">
              <Row className="orderRecordCard m-1">
                <Col className="p-0" sm="12" md="3">
                  <img src="https://picsum.photos/100" alt="exhibitionImage" />
                </Col>
                <Col md="7" sm="12" className="text-start my-2">
                  <div>
                    <h4 className="h4 mb-2">《掘光而行│洪瑞麟》</h4>
                  </div>
                  <div className="orderTxt d-flex justify-content-start align-items-center">
                    <FaMapMarkerAlt className="me-2" />
                    <div>台北市立美術館</div>
                  </div>
                  <div className="orderTxt d-flex justify-content-start align-items-center">
                    <FaCalendarAlt className="me-2" />
                    <div>2022-03-19 - 2022-07-31</div>
                  </div>
                </Col>
                <Col md="2" sm="12" className="text-center">
                  <Button variant="secondary rounded-pill my-2">
                    <h5 className="h5">普通票x1</h5>
                  </Button>
                </Col>
              </Row>
              
              
            </Container>
          </FadeIn>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default OrderRecord
