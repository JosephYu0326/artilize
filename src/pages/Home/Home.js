//首頁
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Row, Col } from 'react-bootstrap'
import logo from '../../images/logo.svg'
import userIcon from '../../images/userIcon.svg'
import '../../styles/Home.scss'
import Header from '../../component/Header'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

function Home(props) {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function imgUrl() {
    const id = rand(1, 200)
    return `https://picsum.photos/id/${id}/1920/1080`
  }

  function createSlide() {
    return (
      <SwiperSlide className="d-flex justify-content-center mt-5">
        <img
          className="img"
          src={imgUrl()}
          alt=""
          style={{ width: 1241, height: 795 }}
        />
      </SwiperSlide>
    )
  }
  function createSlideRight() {
    return (
      <SwiperSlide className="d-flex justify-content-center">
        <img
          className="img"
          src={imgUrl()}
          alt=""
          style={{ width: 337, height: 547 }}
        />
      </SwiperSlide>
    )
  }
  function createSlideleft() {
    return (
      <SwiperSlide className="d-flex justify-content-center">
        <img
          className="img"
          src={imgUrl()}
          alt=""
          style={{ width: 318, height: 351 }}
        />
      </SwiperSlide>
    )
  }
  return (
    <>
      {/* <div>首頁</div>
      <Link to="/search">全站搜尋頁</Link>
      <br />
      <Link to="/users">會員資料</Link>
      <br />
      <Link to="/exhibition">展覽</Link>
      <br />
      <Link to="/product">商品</Link>
      <br />
      <Link to="/forum">討論區</Link>
      <br />
      <Link to="/b2b">廠商後臺</Link>
      <br />
      <h1>
        <Link to="/style">樣式</Link>
      </h1> */}
      <Header />
      <section>
        <Container fluid>
          <Row className="d-flex flex-nowrap">
            <Col className="align-self-end ps-0 pe-0">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={'1'}
                loop={true}
                autoplay={{
                  display: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                style={{ width: 318, height: 351 }}
              >
                {createSlideleft()}
                {createSlideleft()}
                {createSlideleft()}
                {createSlideleft()}
              </Swiper>
            </Col>
            <Col>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={'1'}
                navigation
                loop={true}
                autoplay={{
                  display: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true }}
                style={{ width: 1241, height: 795 }}
              >
                {createSlide()}
                {createSlide()}
                {createSlide()}
                {createSlide()}
              </Swiper>
            </Col>
            <Col className="ps-0 pe-0">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                  display: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                style={{ width: 337, height: 547 }}
              >
                {createSlideRight()}
                {createSlideRight()}
                {createSlideRight()}
                {createSlideRight()}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row>
            <div className="homeMap">1</div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
