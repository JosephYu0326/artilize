//首頁
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Row, Col, Card } from 'react-bootstrap'
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
import CountUp from 'react-countup'
import Rank1 from '../../images/Rank1.svg'
import Rank2 from '../../images/Rank2.svg'
import Rank3 from '../../images/Rank3.svg'
import HomeHotSale1 from '../../images/homeHotSale1.svg'
import HomeHotSale2 from '../../images/homeHotSale2.svg'
import HomeHotSale3 from '../../images/homeHotSale3.svg'

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
      <SwiperSlide className="swiperImg">
        <img src={imgUrl()} alt="" />
      </SwiperSlide>
    )
  }
  function createSlideRight() {
    return (
      <SwiperSlide className="swiperImg">
        <img src={imgUrl()} alt="" />
      </SwiperSlide>
    )
  }
  function createSlideleft() {
    return (
      <SwiperSlide className="swiperImg">
        <img src={imgUrl()} alt="" />
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
          <Row className=" d-flex">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={'1'}
              loop={true}
              autoplay={{
                display: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              style={{ height: 466 }}
              className="ps-0 pe-0 align-self-end homeSwiperLeft"
            >
              {createSlideleft()}
              {createSlideleft()}
              {createSlideleft()}
              {createSlideleft()}
            </Swiper>

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
              style={{ height: 890 }}
              className="ps-0 pe-0 homeSwiper"
            >
              {createSlide()}
              {createSlide()}
              {createSlide()}
              {createSlide()}
            </Swiper>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                display: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              style={{ height: 547 }}
              className="ps-0 pe-0 homeSwiperRight"
            >
              {createSlideRight()}
              {createSlideRight()}
              {createSlideRight()}
              {createSlideRight()}
            </Swiper>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid className="homeMap">
          <Row>
            <div>
              <Container className="homeMapInside d-flex flex-column  justify-content-center">
                <div className="d-flex align-items-center">
                  <CountUp start={0} end={1689} delay={0} duration={5}>
                    {({ countUpRef }) => (
                      <h1 className="ExtraBold">
                        <span ref={countUpRef} />
                      </h1>
                    )}
                  </CountUp>
                  <h5 className="ExtraBold ">
                    場展覽在此舉
                    <br />行
                  </h5>
                </div>
                <div className="d-flex homeMapButton justify-content-between ">
                  <button className=" btn btn-primary">
                    <h2>關鍵字搜尋</h2>
                  </button>
                  <button className=" btn ">
                    <h2>地圖搜尋</h2>
                  </button>
                </div>
                <div className="homeMapSearchBar d-flex  align-items-stretch">
                  <form className="d-flex align-items-center justify-content-center ">
                    <input type="search" placeholder="" />
                    <button type="submit">Search</button>
                  </form>
                </div>
              </Container>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid className="homeRank">
          <Row>
            <div>
              <Container className="d-flex">
                <div className="d-flex flex-column justify-content-center homeRankContainer align-items-center">
                  <div className="homeRankHeader">
                    <h1 className="SemiBold">
                      <span>展覽活動排行榜</span>
                    </h1>
                  </div>
                  <h6 className="mt-3">
                    此時此刻最熱門的展覽，活動與藝術家介紹
                  </h6>
                  <button className="btn d-flex justify-content-between align-items-center">
                    <h6>更多展覽活動</h6>
                  </button>
                </div>
                <div className="homeRank123">
                  <ul className="d-flex justify-content-end">
                    <li className="align-self-end">
                      <Link to="*">
                        <figure>
                          <img src={Rank1} alt=""></img>
                          <figcaption>
                            <h6 className="SemiBold">塩田千春：顫動的靈魂</h6>
                          </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li className="align-self-center ms-4 me-4">
                      <Link to="*">
                        <figure>
                          <img src={Rank2} alt=""></img>
                          <figcaption>
                            <h6 className="SemiBold">挑戰—安藤忠雄展</h6>
                          </figcaption>
                        </figure>
                      </Link>
                    </li>
                    <li className="align-self-baseline mt-4">
                      <Link to="*">
                        <figure>
                          <img src={Rank3} alt=""></img>
                          <figcaption>
                            <h6 className="SemiBold">缺席 洪鈞元個展</h6>
                          </figcaption>
                        </figure>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Container>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className="d-flex flex-column homeHotSale">
            <div
              className=" d-flex justify-content-center align-items-end"
              style={{ height: '131px' }}
            >
              <h1 className="SemiBold">熱銷商品</h1>
            </div>
            <div className="d-flex justify-content-between align-items-center homeHotSaleCardGroup">
              <Link to="*">
                <Card style={{ width: '345px' }} className="homeHotSaleCard">
                  <Card.Img
                    variant="top"
                    src={HomeHotSale1}
                    style={{ height: '350px' }}
                  />
                  <Card.Body style={{ padding: '16px 16px' }}>
                    <Card.Title>
                      <div className="d-flex justify-content-between">
                        <h6 className="SemiBold" style={{ width: '192px' }}>
                          日常展 - 365天日記
                        </h6>
                        <h5 className="SemiBold">NT$ 150</h5>
                      </div>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to="*">
                <Card style={{ width: '345px' }} className="homeHotSaleCard">
                  <Card.Img
                    variant="top"
                    src={HomeHotSale2}
                    style={{ height: '350px' }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between">
                        <h6 className="SemiBold" style={{ width: '192px' }}>
                          迷你擺飾-迷你圓滿博古架文物組
                        </h6>
                        <h5 className="SemiBold">NT$ 980</h5>
                      </div>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to="">
                <Card style={{ width: '345px' }} className="homeHotSaleCard">
                  <Card.Img
                    variant="top"
                    src={HomeHotSale3}
                    style={{ height: '350px' }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between">
                        <h6 className="SemiBold" style={{ width: '192px' }}>
                          郎世寧系列·吉鶴歲 萬用袋(單色6入)
                        </h6>
                        <h5 className="SemiBold">NT$ 220</h5>
                      </div>
                    </Card.Title>
                    <Card.Text></Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home
