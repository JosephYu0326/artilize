//商品介紹
import '../../styles/productIntro.scss'
// import 'swiper/css'
import 'swiper/css/pagination'
import { React, useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
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
import p_Amati_Heart from '../../images/product_Images/product/Amati_Heart_L1.jpg'
import p_LifeTree from '../../images/product_Images/product/手絹-生命之樹_L1.jpg'
import p_KuoSi from '../../images/product_Images/product/KuoSi_L2.jpg'
import p_OpenBox from '../../images/product_Images/product/OpenBox_L1.jpg'
import P_SitOnRock from '../../images/product_Images/product/SitOnRock_L2.jpg'
import P_HeartNecklance from '../../images/product_Images/product/HeartNecklance_L1.jpg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// Import Swiper styles
import 'swiper/css'
let storage = localStorage

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
    console.log(results)
  }

  useEffect(() => {
    fetchProductId()
  }, [])
  const MySwal = withReactContent(Swal)
  const history = useHistory()

  const [IntroImgData, setIntroImgData] = useState([])
  const fetchIntroImg = async () => {
    const res = await fetch(
      `${API_GET_DATA}/product/introduce/carousel/${parmas.product_id}`
    )
    const results = await res.json()
    setIntroImgData(results)
    console.log(results)
  }

  useEffect(() => {
    fetchIntroImg()
  }, [])

  const [amountTotal, setAmountTotal] = useState(1)
  const handleClick = (value) => () => {
    setAmountTotal(amountTotal + value)
  }

  const userId = localStorage.getItem('userId')
  const [like, setLike] = useState()
  const fetchpLikeData = async () => {
    const res = await fetch(
      `http://localhost:5000/product/introduce/likeicon?userId=${userId}&productId=${parmas.product_id}`
    )
    const results = await res.json()
    console.log(results)
    setLike(results)
  }

  useEffect(() => {
    fetchpLikeData()
  }, [])

  const handleLikeClick = () => {
    const userId = localStorage.getItem('userId')
    console.log(userId)
    const fetchpLikeData = async () => {
      const res = await fetch(
        `http://localhost:5000/product/introduce/like?userId=${userId}&productId=${parmas.product_id}`
      )
      const results = await res.json()
      console.log(results)
      if (results.ok) {
        setLike(1)
      } else {
        setLike(0)
      }
      // setLike(results)
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
              {/* <div className="PurchaseBarOrignPrice">{`原價 NT $${product_orign_price}`}</div> */}
              <div className="PurchaseBarDiscountPrice">{`優惠價 NT $${product_price}`}</div>
            </div>
            <Link to="#">
              <div className="PurchaseBarCollect">
                {like === 1 ? (
                  <FcLike onClick={handleLikeClick} />
                ) : (
                  <FcLikePlaceholder onClick={handleLikeClick} />
                )}
                {/* <FcLikePlaceholder
                  style={{ width: '22px', height: '22px' }}
                  onClick={handleLikeClick}
                />
                <FcLike
                  style={{ width: '22px', height: '22px' }}
                  onClick={handleLikeClick}
                /> */}
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
                if (storage['addItemList2'] == null) {
                  storage['addItemList2'] = []
                }
                storage['addItemList2'] += `${product_name},`
                localStorage.setItem(product_name, '[]')
                const joinCartArray = JSON.stringify({
                  id: product_id,
                  title: product_name,
                  price: product_price,
                  image: product_img,
                  count: amountTotal,
                  userID: userId,
                })

                localStorage.setItem(product_name, joinCartArray)
                MySwal.fire({
                  icon: 'success',
                  title: '成功加入購物車',
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                }).then(() => {
                  history.push('/booking/cart')
                })
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

  // const ptIntroCards = ['1', '2', '3']
  const pAmati_Heart = { backgroundImage: `url(${p_Amati_Heart})` }
  const pLifeTree = { backgroundImage: `url(${p_LifeTree})` }
  const pKuoSi = { backgroundImage: `url(${p_KuoSi})` }
  // const ptPopCards = ['1', '2', '3']
  const pPopImg = { backgroundImage: `url(${p_OpenBox})` }
  const pPopImgRock = { backgroundImage: `url(${P_SitOnRock})` }
  const pPopImgHeart = { backgroundImage: `url(${P_HeartNecklance})` }
  // const ptBrandCards = ['1', '2', '3']
  // const pBrandImg = { backgroundImage: `url(${p_BrandImg})` }

  // const pBrandCards = ptBrandCards.map((v, i) => {
  //   return (
  //     <div key={i}>
  //       <div className="pBrandCard d-flex">
  //         <Link to="">
  //           <div style={pBrandImg} className="pIntroBrandImg"></div>
  //         </Link>
  //         <div className="pBrandCardcontent">
  //           <Link to="" className="pBrandLink">
  //             <h6 className="ExtraBold pBrandContenttopic">奇美博物館</h6>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  // const pPopCards = ptPopCards.map((v, i) => {
  //   return (
  //     <div key={i}>
  //       <div className="pPopCard d-flex">
  //         <Link to="">
  //           <div style={pPopImg} className="pPopImg"></div>
  //         </Link>
  //         <div className="pPopCardcontent">
  //           <Link to="" className="pPopLinktopic">
  //             <h6 className="ExtraBold pPopTopic">
  //               L型資料夾 - 台灣番社圖-{i}
  //             </h6>
  //           </Link>
  //           <Link to="" className="pPopLinkprice">
  //             <p className="pBig pPopPrice">NT $80</p>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  // const pIntroCards = ptIntroCards.map((v, i) => {
  //   return (
  //     <div key={i}>
  //       <div className="pSamesearchCard d-flex">
  //         <Link to="">
  //           <div style={pSamesearchImg} className="pSameSearchimg"></div>
  //         </Link>
  //         <div className="d-flex pSamesearchContent">
  //           <Link to="" className="pSamesearchLinktopic">
  //             <h6 className="ExtraBold pSamesearchLinktopictext">
  //               山水花鳥人物畫-{i}
  //             </h6>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

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
                 <div class="pIntroDetailmain">
                 <div class="pIntroMaincontenttopic d-inline-flex">
                   <p class="pbig Regular pIntroMaincontenttopictext ms-2">
                     【相伴不相絆】
                   </p>
                 </div>
                 <div class="pIntroMaincontentdetailtext">
                   將故宮院藏畫中鴛鴦相互依靠形成一顆心型的巧妙構圖與代表幸福的杏花，以現代設計及精密工藝化做為戀人帶來幸福與承諾的飾品，可與戀人共享，也可獨立配戴。<br/>
                   分開是具有個性的圖騰，合在一起則是呈現出甜蜜依戀的愛心形狀，象徵對愛情圓滿的祝福及圓滿愛情的祈願。<br/>
                   兩條項鍊不同顏色，代表在戀情中仍保有自我風格。
               </div>
               <div class="pIntroDetailexintro">
                 <div class="pExintroTopic">
                   <h6 class="pExintroTopictext ms-2">典藏說明</h6>
                 </div>
                 <div class="pExintrocontent">
                   故-畫-000600-00000 明吳彬文杏雙禽圖　軸 此軸畫杏樹老枝粗幹橫出，一對鴛鴦相互依偎並立枝上。樹幹空蝕卻有繁茂花朵，老枝懸空、細枝上挑，樹梢皆突如折枝，布局畫意均奇特。吳彬就於一上挑細枝的折斷處題款鈐印，顯示他對物象造型、構圖布置的十足創意。
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
          <h5 className="ExtraBold d-flex">精選典藏</h5>
          <div className="row row-cols-xxl-3 row-cols-2">
            {/* {pIntroCards} */}
            <div>
              <div className="pSamesearchCard d-flex">
                <Link to="/ProductCategory/項鍊.耳環">
                  <div style={pAmati_Heart} className="pSameSearchimg"></div>
                </Link>
                <div className="d-flex pSamesearchContent">
                  <Link
                    to="/ProductCategory/項鍊.耳環"
                    className="pSamesearchLinktopic"
                  >
                    <h6 className="ExtraBold pSamesearchLinktopictext">
                      項鍊.耳環
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="pSamesearchCard d-flex">
                <Link to="/ProductCategory/絲巾.領巾">
                  <div style={pLifeTree} className="pSameSearchimg"></div>
                </Link>
                <div className="d-flex pSamesearchContent">
                  <Link
                    to="/ProductCategory/絲巾.領巾"
                    className="pSamesearchLinktopic"
                  >
                    <h6 className="ExtraBold pSamesearchLinktopictext">
                      絲巾.領巾
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="pSamesearchCard d-flex">
                <Link to="/ProductCategory/山水花鳥人物畫">
                  <div style={pKuoSi} className="pSameSearchimg"></div>
                </Link>
                <div className="d-flex pSamesearchContent">
                  <Link
                    to="/ProductCategory/山水花鳥人物畫"
                    className="pSamesearchLinktopic"
                  >
                    <h6 className="ExtraBold pSamesearchLinktopictext">
                      山水花鳥人物畫
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h5 className="ExtraBold d-flex">好物推薦</h5>
          <div className="row row-cols-xxl-3 row-cols-2">
            {/* {pPopCards} */}
            <div>
              <div className="pPopCard d-flex">
                <Link to="/product/introduce/11">
                  <div style={pPopImg} className="pPopImg"></div>
                </Link>
                <div className="pPopCardcontent">
                  <Link to="" className="pPopLinktopic">
                    <h6 className="ExtraBold pPopTopic">
                      開箱─國立歷史博物館「中華文物箱」檔案彙編
                    </h6>
                  </Link>
                  <Link to="" className="pPopLinkprice">
                    <p className="pBig pPopPrice">NT $500</p>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="pPopCard d-flex">
                <Link to="/product/introduce/11">
                  <div style={pPopImgRock} className="pPopImg"></div>
                </Link>
                <div className="pPopCardcontent">
                  <Link to="" className="pPopLinktopic">
                    <h6 className="ExtraBold pPopTopic">
                      坐在岩石上讀書的少女
                    </h6>
                  </Link>
                  <Link to="" className="pPopLinkprice">
                    <p className="pBig pPopPrice">NT $3600</p>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="pPopCard d-flex">
                <Link to="/product/introduce/11">
                  <div style={pPopImgHeart} className="pPopImg"></div>
                </Link>
                <div className="pPopCardcontent">
                  <Link to="" className="pPopLinktopic">
                    <h6 className="ExtraBold pPopTopic">鴛鴦同心項鍊-自我</h6>
                  </Link>
                  <Link to="" className="pPopLinkprice">
                    <p className="pBig pPopPrice">NT $2388</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-5">
           <h5 className="ExtraBold d-flex">好館推薦</h5>
           <div className="row row-cols-xxl-3 row-cols-2">{pBrandCards}</div>
         </div> */}
      </Container>
      <Footer />
    </>
  )
}

export default Introduce
