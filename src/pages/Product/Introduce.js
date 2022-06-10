//商品介紹
import '../../styles/productIntro.scss'
// import 'swiper/css'
import 'swiper/css/pagination'
import { React, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../../component/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { API_GET_DATA, GET_PRODUCT_INTRO_IMG } from './constants'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
// import p_purchasebaramount from '../../images/product_Images/icons/select.png'
import p_purchasebarjoincart from '../../images/product_Images/icons/joincart.png'
import Footer from '../../component/Footer'
// import p_IntroImg from '../../images/product_Images/productintro/teaIntroL1.jpg'
import p_RightVector from '../../images/product_Images/productintro/RightVector.png'
import p_SamesearchImg from '../../images/product_Images/product/ArcherTest.jpeg'
import p_PopImg from '../../images/product_Images/product/ViewDraw.jpeg'
import p_BrandImg from '../../images/product_Images/brand/Chimei.png'
import Accordion from '../../component/Accordion'

// Import Swiper styles
import 'swiper/css'

function Introduce(props) {
  const parmas = useParams()
  const [pIntroData, setIntroData] = useState([])
  console.log(parmas.product_id)
  const fetchProductId = async () => {
    const res = await fetch(
      `${API_GET_DATA}/product/introduce/${parmas.product_id}}`
    )
    const results = await res.json()
    // console.log(results)
    setIntroData(results)
  }

  useEffect(() => {
    fetchProductId()
  }, [])

  const [IntroImgData, setIntroImgData] = useState([])
  const fetchIntroImg = async () => {
    const res = await fetch(`${API_GET_DATA}/product/introduce/carousel`)
    const results = await res.json()
    setIntroImgData(results)
    console.log(results)
  }

  useEffect(() => {
    fetchIntroImg()
  }, [])

  // const [pLikeData, setpLikeData] = useState([])
  // const handlepLikeClick = (value) => () => {
  //   setpLikeData(pLikeData + value)
  //   console.log(setpLikeData)
  // }

  const [amountTotal, setAmountTotal] = useState(1)
  const handleClick = (value) => () => {
    setAmountTotal(amountTotal + value)
  }
  const userId = localStorage.getItem('userId')
  const [like, setLike] = useState(0)
  const handleLikeClick = () => {
    const userId = localStorage.getItem('userId')
    console.log(userId)
    const fetchpLikeData = async () => {
      const res = await fetch(
        `http://localhost:5000/product/introduce/like?userId=${userId}&productId=${parmas.product_id}`
      )
      const results = await res.json()
      console.log(results)
      setLike(results)
    }
    fetchpLikeData()
  }

  const pIntroCard = pIntroData.map((productintro, index) => {
    const {
      product_id,
      product_name,
      product_introduce,
      product_img,
      product_orign_price,
      product_price,
    } = productintro
    return (
      <div className="productIntro d-flex row-2" key={product_id}>
        <div className="pIntroImgContainer">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <div className="pIntroImg">
              {/* {IntroImgData.map((productintroimg, pkimgid) => {
              const { pkImgId, ImgName } = productintroimg
              return (
                <div key={pkimgid}>
                  <SwiperSlide key={pkImgId}>
                    <img src={`${GET_PRODUCT_INTRO_IMG}/${ImgName}`} alt="" />
                  </SwiperSlide>
                </div>
              )
            })} */}
              {IntroImgData.map(({ ImgName }, imgid) => (
                <SwiperSlide key={imgid}>
                  <img
                    src={`${GET_PRODUCT_INTRO_IMG}/${ImgName}`}
                    alt=""
                    style={{ marginTop: '52px' }}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* {IntroImgData.map(({ ImgName }, { pkImgId }) => (
          <div className="pIntroImg" key={pkImgId}>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={`${GET_PRODUCT_INTRO_IMG}/${ImgName}`} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        ))} */}
        <div className="pIntroDetail">
          <div className="pIntroDetailcard d-flex">
            <div className="pIntroDetailCardcontent">
              <div className="pIntroDetailtopic ms-2">
                <div className="d-inline-flex">
                  <h6 className="ExtraBold">商品介紹</h6>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: product_introduce }} />
              <div className="pIntroButton d-grid gap-2 m-2 p-2 ">
                <button className="btn btn-primary rounded-pill" type="button">
                  商品退換貨說明
                </button>
                <button
                  className="btn btn-primary rounded-pill"
                  type="button"
                  style={{ marginBottom: '30px' }}
                >
                  商品問題回報
                </button>
              </div>
            </div>
          </div>
          <div className="pIntroPurchaseBar">
            <div className="PurchaseBarPrice">
              <div className="PurchaseBarOrignPrice">{`原價 NT $${product_orign_price}`}</div>
              <div className="PurchaseBarDiscountPrice">{`優惠價 NT $${product_price}`}</div>
            </div>
            <Link to="#">
              <div className="PurchaseBarCollect">
                <FcLikePlaceholder
                  style={{ width: '22px', height: '22px' }}
                  onClick={handleLikeClick}
                />
              </div>
            </Link>
            <div className="PurchaseBarAmount">
              {/* <img src={p_purchasebaramount} alt=""></img> */}
              <Link to="#">
                <div
                  style={{ visibility: amountTotal <= 1 && 'hidden' }}
                  onClick={handleClick(-1)}
                >
                  <FaMinus style={{ width: '25px', height: '25px' }} />
                </div>
              </Link>

              <div className="PurchaseBarAmountTotal">{amountTotal}</div>
              <Link to="#">
                <div onClick={handleClick(1)}>
                  <FaPlus style={{ width: '25px', height: '25px' }} />
                </div>
              </Link>
            </div>
            <div
              className="PurchaseBarCarticon"
              onClick={() => {
                localStorage.setItem('cart', '[]')
                const joinCartArray = JSON.stringify([
                  { product_id },
                  { product_name },
                  { product_img },
                  { product_price },
                  { amountTotal },
                ])
                localStorage.setItem('cart', joinCartArray)
              }}
            >
              <Link to="#">
                <img src={p_purchasebarjoincart} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  })

  const ptIntroCards = ['1', '2', '3']
  const pSamesearchImg = { backgroundImage: `url(${p_SamesearchImg})` }
  const ptPopCards = ['1', '2', '3']
  const pPopImg = { backgroundImage: `url(${p_PopImg})` }
  const ptBrandCards = ['1', '2', '3']
  const pBrandImg = { backgroundImage: `url(${p_BrandImg})` }

  const pBrandCards = ptBrandCards.map((v, i) => {
    return (
      <div key={i}>
        <div className="pBrandCard d-flex">
          <Link to="">
            <div style={pBrandImg} className="pIntroBrandImg"></div>
          </Link>
          <div className="pBrandCardcontent">
            <Link to="" className="pBrandLink">
              <h6 className="ExtraBold pBrandContenttopic">奇美博物館</h6>
            </Link>
          </div>
        </div>
      </div>
    )
  })

  const pPopCards = ptPopCards.map((v, i) => {
    return (
      <div key={i}>
        <div className="pPopCard d-flex">
          <Link to="">
            <div style={pPopImg} className="pPopImg"></div>
          </Link>
          <div className="pPopCardcontent">
            <Link to="" className="pPopLinktopic">
              <h6 className="ExtraBold pPopTopic">
                L型資料夾 - 台灣番社圖-{i}
              </h6>
            </Link>
            <Link to="" className="pPopLinkprice">
              <p className="pBig pPopPrice">NT $80</p>
            </Link>
          </div>
        </div>
      </div>
    )
  })

  const pIntroCards = ptIntroCards.map((v, i) => {
    return (
      <div key={i}>
        <div className="pSamesearchCard d-flex">
          <Link to="">
            <div style={pSamesearchImg} className="pSameSearchimg"></div>
          </Link>
          <div className="d-flex pSamesearchContent">
            <Link to="" className="pSamesearchLinktopic">
              <h6 className="ExtraBold pSamesearchLinktopictext">
                山水花鳥人物畫-{i}
              </h6>
            </Link>
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <Header />
      <Accordion />
      <Container className="productIntroArea" style={{ marginLeft: '400px' }}>
        {pIntroCard}

        {/* <Link to="#">
          <div className="pIntroRightVector">
            <img
              src={p_RightVector}
              style={{ width: '23px', height: '35px' }}
              alt="RightVector"
            />
          </div>
        </Link> */}
        {/* <div className="productIntro d-flex">
          <div className="pIntroImg">
            <img src={p_IntroImg}></img>
          </div>
          <div className="pIntroDetail">
            <div className="pIntroDetailcard d-flex">
              <div className="pIntroDetailCardcontent">
                <div className="pIntroDetailtopic ms-2">
                  <div className="d-inline-flex">
                    <h6 className="ExtraBold">商品介紹</h6>
                  </div>
                </div>
                <div className="pIntroDetailmain">
                  <div className="pIntroMaincontenttopic d-inline-flex">
                    <p className="pbig Regular pIntroMaincontenttopictext ms-2">
                      【送禮最適的伴手禮盒】
                    </p>
                  </div>
                  <div className="pIntroMaincontentdetailtext">
                    國立故宮博物院藏文泥金鉅作《龍藏經》之珍呼應獨一無二奇種製茶法。
                    <br />
                    宋元名畫范寬《谿山行旅圖》、倪瓚
                    《容膝齋圖》之貴，烏龍茶香韻繚繞共鳴，百年嫡傳奇種烏龍，輝映故宮稀世珍寶，敬獻味覺與視覺的藝術饗宴。
                  </div>
                  <div className="pIntroMaincontenttopic d-inline-flex">
                    <p className="pbig Regular pIntroMaincontenttopictext ms-2">
                      【奇種烏龍｜包種】
                    </p>
                  </div>
                  <div className="pIntroMaincontentdetailtext">
                    元末隱士畫家倪瓚，以畫風蕭疏空曠聞名，為元四家之一。原為富家子弟的倪瓚，因戰亂流離江南，離家後的山水畫，多半寄思鄉之情，《容膝齋圖》筆墨極為淡雅，以一河兩岸構圖，大量留白展現孤寂氣氛，展現清勁而獨特風格。
                    <br />
                    有記名茶以百年嫡傳奇種烏龍炭焙法，耐心焠煉出茶中精隨，首創焙製文山包種茶，溫和耐泡，香氣如畫作般典雅悠遠，令人回味再三。
                  </div>
                  <div className="pIntroMaincontenttopic d-inline-flex">
                    <p className="pbig Regular pIntroMaincontenttopictext ms-2">
                      【奇種烏龍｜高山】
                    </p>
                  </div>
                  <div className="pIntroMaincontentdetailtext">
                    北宋范寬《谿山行旅圖》描繪巍峨高山，視角自山下看山巔，行旅驢隊人物從小丘間趕路，更顯崇山峻嶺之峰巒渾厚，細如弦絲的瀑布直洩而下，彷彿可聽聞溪聲在山谷間蕩。
                    <br />
                    有記名茶精選海拔1000公尺以上高山烏龍茶，以傳統奇種烏龍焙火工藝，融入現代口感，烘焙出富層次感的獨特茶韻，輝映國寶《谿山行旅圖》，茶與畫韻味，迴盪不絕!
                  </div>
                </div>
                <div className="pIntroDetailexintro">
                  <div className="pExintroTopic">
                    <h6 className="pExintroTopictext ms-2">典藏說明</h6>
                  </div>
                  <div className="pExintrocontent">
                    范寬，字仲立，華原（陝西耀縣）人。郭若虛在《圖畫見聞志》卷一「論三家山水」中評論范寬的山水畫說：「峰巒渾厚，勢狀雄強。」范寬為人不拘小節，學畫以大自然為師，然後經過內心的感悟才表達出來。范寬曾為了體悟這些畫境，曾經隱居在華山
                    隨時留心觀察山林間的各種情景變化，當時人盛讚他：「善與山傳神」。
                    首先映入眼簾的，是佔據畫面約三分之二，聳立在中央的主峰，右側有深谷瀑布，另一邊是矮小的側峰。近景中央突出兩塊巨大的岩石，背後坡岸道路上一列行旅，點出畫的主題。這幅畫構圖不複雜，局部的描寫卻很仔細，顯示出畫家有高度觀察能力和寫實的功夫。主峰上有密如雨點的墨痕和鋸齒般的岩石皺紋，刻畫出飽經風霜，被風化的岩石。山頂灌木叢生，結成密林，狀若覃菌，前後左右有扈從似的高山簇擁著。瀑布在高山深壑間，成一條線般飛洩而下，隱沒在雲煙飄緲的深淵中。這些描寫的手法都極其生動自然，而且合乎自然的規律。
                  </div>
                </div>
                <div className="pIntroButton d-grid gap-2 m-2 p-2 ">
                  <button
                    className="btn btn-primary rounded-pill"
                    type="button"
                  >
                    商品退換貨說明
                  </button>
                  <button
                    className="btn btn-primary rounded-pill"
                    type="button"
                    style={{ marginBottom: '30px' }}
                  >
                    商品問題回報
                  </button>
                </div>
              </div>
            </div>
            <div className="pIntroPurchaseBar">
              <div className="PurchaseBarPrice">
                <div className="PurchaseBarOrignPrice">原價 NT $1500</div>
                <div className="PurchaseBarDiscountPrice">優惠價 NT $1000</div>
              </div>
              <div className="PurchaseBarCollect">
                <FcLike />
              </div>
              <div className="PurchaseBarAmount">
                <img src={p_purchasebaramount} alt=""></img>
              </div>
              <div className="PurchaseBarCarticon">
                <Link to="#">
                  <img src={p_purchasebarjoincart} alt="" />
                </Link>
                <button className="JoinCartBtn">
                  <img src={p_purchasebarjoincart} alt="" />
                </button>
                <img src={p_purchasebarjoincart} alt="" />
              </div>
            </div>
          </div>
        </div> */}
      </Container>
      <Container
        className=" mt-5 mb-5 justify-content-center"
        style={{ marginLeft: '400px' }}
      >
        <div className="mt-5">
          <h5 className="ExtraBold d-flex">看過此商品的人也搜尋了...</h5>
          <div className="row row-cols-xxl-3 row-cols-2">{pIntroCards}</div>
        </div>
        <div className="mt-5">
          <h5 className="ExtraBold d-flex">熱門商品推薦</h5>
          <div className="row row-cols-xxl-3 row-cols-2">{pPopCards}</div>
        </div>
        <div className="mt-5">
          <h5 className="ExtraBold d-flex">好館推薦</h5>
          <div className="row row-cols-xxl-3 row-cols-2">{pBrandCards}</div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Introduce
