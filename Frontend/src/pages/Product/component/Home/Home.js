//商品
import '../../../../styles/products.scss'
// import '../../styles/AsideBar.scss'
import { React, useState, useEffect } from 'react'
import Header from '../../../../component/Header'
import Accordion from '../../../../component/Accordion'
// import AsideBar from '../../component/AsideBar'
import Footer from '../../../../component/Footer'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { API_GET_DATA, API_GET_IMG, API_GET_BIMG } from '../../constants'
import p_adImages from '../../../../images/product_Images/ad/test_2.jpeg'
// import p_Images from '../../../../images/product_Images/product/tea_L2.jpg'
// import p_brandImages from '../../images/product_Images/brand/nationalpalace.png'
// import p_saleImages from '../../../../images/product_Images/product/whiteveg.jpeg'
// import p_saleIconsfreight from '../../../../images/product_Images/icons/freeFreight.png'
import p_saleIconsdiscount from '../../../../images/product_Images/icons/sale.png'

function Home(props) {
  // const ptCards = ['1', '2', '3']
  // const pImg = { backgroundImage: `url(${p_Images})` }
  // const ptBrandCards = ['1', '2', '3']
  // const pBrandImg = { backgroundImage: `url(${p_brandImages})` }
  // const ptSaleCards = ['1', '2', '3']
  // const pSaleImg = { backgroundImage: `url(${p_saleImages})` }
  // const pInCartImg = { backgroundImage: `url(${p_Images})` }

  const [pCardData, setData] = useState([])
  const fetchData = async () => {
    // const res = await fetch('http://localhost:5000/product')
    const res = await fetch(`${API_GET_DATA}/product`)
    const data = await res.json()
    // console.log(data)
    setData(data)
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const [pBrandData, setBrandData] = useState([])
  const fetchBrandData = async () => {
    const res = await fetch(`${API_GET_DATA}/product/Brand`)
    const data = await res.json()
    // console.log(data)
    setBrandData(data)
  }
  useEffect(() => {
    fetchBrandData()
  }, [])

  const pCards = pCardData.map(
    ({ product_id, product_name, product_img, product_price }, a) => (
      <div key={a}>
        <Link
          to={`/product/introduce/${product_id}`}
          className="pCardLink TextLink"
        >
          <div className="pCard">
            <img
              src={`${API_GET_IMG}/${product_img}`}
              className="pCardImg"
              alt=""
            ></img>
            <div className="pCardContent">
              <div className="pCardContentPrice">
                <h6 className="ExtraBold pCardContentTopic">{product_name}</h6>
                <p className="pBig ExtraBold pCardContentPrice">
                  {`NT $${product_price}`}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  )

  // const pCards = ptCards.map((v, i) => {
  //   return (
  //     <div key={i}>
  //       <div className="col d-flex justify-content-center">
  //         <div className="productCards d-flex">
  //           <Link to="/Product/Introduce">
  //             <div
  //               style={pImg}
  //               // style={require(`../../images/product_Images/${pImg}`)}
  //               className="pImg"
  //             ></div>
  //           </Link>
  //           <div className="d-flex pContent">
  //             <div className="pTitle mt-2">
  //               <Link to="/Product/Introduce" className="pLinkTitle">
  //                 <h6 className="pTitletext text-web pt-2 ExtraBold">
  //                   國寶奇種烏龍茶組-{i}
  //                 </h6>
  //               </Link>
  //             </div>
  //             <div className="price text-web">
  //               <Link to="/Product/Introduce" className="pLinkPrice">
  //                 <p className="ExtraBold">1500</p>
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  const pBrandCards = pBrandData.map(
    ({ product_brand_name, product_brand_img }, b) => {
      return (
        <div key={b}>
          <div className="pBrandCard">
            <div className="pBrandCardImgcontent">
              <Link to="/Product/Introduce">
                <img
                  src={`${API_GET_BIMG}/${product_brand_img}`}
                  className="pBrandCardImg"
                  alt=""
                ></img>
              </Link>
            </div>
            <div className="pBrandCardContent">
              <Link to="/Product/Introduce" className="TextLink">
                <h6 className="ExtraBold pBrandCardContentTopic">
                  {product_brand_name}
                </h6>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  )

  // const pBrandCards = ptBrandCards.map((v, i) => {
  //   return (
  //     <div key={i}>
  //       <div className="col d-flex justify-content-center">
  //         <div className="productBrandCards d-flex">
  //           <Link to="">
  //             <div style={pBrandImg} className="pBrandImg"></div>
  //           </Link>
  //           <div className="d-flex pBrandContent">
  //             <Link to="" className="pBrandLinktitle">
  //               <h6 className="ExtraBold pBrandTitletext">
  //                 國立故宮博物院-{i}
  //               </h6>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  // const pMoresaleCards = pCardData.map((product, index) => {
  //   const { product_name, product_img, product_orign_price, product_price } =
  //     product
  //   return (
  //     <div key={index}>
  //       <div className="pMoresaleCard">
  //         <Link to="/Product/Introduce">
  //           <img
  //             src={`${API_GET_IMG}/${product_img}`}
  //             className="pMoresaleCardImg"
  //             alt=""
  //           ></img>
  //         </Link>
  //         <div className="pMoresaleCardContent">
  //           <div className="pMoresaleCardContentPrice">
  //             <Link to="/Product/Introduce" className="TextLink">
  //               <h6 className="ExtraBold pCardTestContentTopic">
  //                 {product_name}
  //               </h6>
  //             </Link>
  //             {/* <p className="pRegular pMoresaleCardContentOrignPrice">{`NT $${product_orign_price}`}</p> */}
  //             <Link to="/Product/Introduce" className="TextLink">
  //               <p className="pBig ExtraBold pMoresaleCardContentSalePrice">
  //                 {`NT $${product_price}`}
  //               </p>
  //             </Link>
  //           </div>
  //           {/* <div className="pMoresaleCardContentSaleIcon">
  //             <div>
  //               <img
  //                 className="pMoresaleCardContentSaleIconImg"
  //                 src={p_saleIconsfreight}
  //                 alt=""
  //               ></img>
  //             </div>
  //             <div>
  //               <img
  //                 className="pMoresaleCardContentSaleIconImg"
  //                 src={p_saleIconsdiscount}
  //                 alt=""
  //               ></img>
  //             </div>
  //           </div> */}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  // const pSaleCards = ptSaleCards.map((v, i) => {
  //   return (
  //     <div key={i}>
  //       <div className="pCardTest">
  //         <Link to="/Product/Introduce">
  //           <div style={pSaleImg} className="pTestSaleImg"></div>
  //         </Link>
  //         <div className="pCardTestContent">
  //           <div className="pCardTestContentPrice">
  //             <h6 className="ExtraBold pCardTestContentTopic">
  //               琉璃 - 翠玉白菜-{i}
  //             </h6>
  //             <p className="pRegular pCardTestContentOrignPrice">10000</p>
  //             <p className="pBig ExtraBold pCardTestContentSalePrice">
  //               NT $7800
  //             </p>
  //           </div>
  //           <div className="pCardTestContentSaleIcon">
  //             <div>
  //               <img
  //                 className="pCardTestContentSaleIconImg"
  //                 src={p_saleIconsfreight}
  //                 alt=""
  //               ></img>
  //             </div>
  //             <div>
  //               <img
  //                 className="pCardTestContentSaleIconImg"
  //                 src={p_saleIconsdiscount}
  //                 alt=""
  //               ></img>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })

  return (
    <>
      <Header />
      {/* <AsideBar btn0="商品首頁" btn1="Category" /> */}
      <Accordion />
      <div className="container-fulid">
        <img
          src={p_adImages}
          style={{ width: '100%', height: '400px' }}
          alt=""
        ></img>
      </div>
      <Container
        className="main mt-5 justify-content-center"
        style={{ marginLeft: '400px' }}
      >
        <div>
          <div
            className="d-flex justify-content-center"
            style={{ marginRight: '100px' }}
          >
            <h5 className="ExtraBold pCardTopictext d-flex justify-content-center">
              熱銷推推
            </h5>
          </div>
          <div className="phCardContainer row-cols-xxl-3 row-cols-2">
            {pCards}
          </div>
        </div>
        <div className="mt-5">
          <div
            className="d-flex justify-content-center"
            style={{ marginRight: '100px' }}
          >
            <h5 className="ExtraBold pCardTopictext d-flex justify-content-center">
              精選館別
            </h5>
          </div>
          <div className="phCardContainer row-cols-xxl-3 row-cols-2">
            {pBrandCards}
          </div>
        </div>
        <div className="mt-5">
          <div
            className="d-flex justify-content-center"
            style={{ marginRight: '100px' }}
          >
            <h5 className="ExtraBold pCardTopictext d-flex justify-content-center">
              更多優惠
            </h5>
          </div>
          <div className="phCardContainer row-cols-xxl-3 row-cols-2 mb-3">
            {/* {pMoresaleCards} */}
            <div>
              <div className="pMoresaleCard">
                <Link to="/Product/Introduce">
                  <img
                    src={`${API_GET_IMG}/鵲鳥琉璃項鍊_L1.jpg`}
                    className="pMoresaleCardImg"
                    alt=""
                  ></img>
                </Link>
                <div className="pMoresaleCardContent">
                  <div className="pMoresaleCardContentPrice">
                    <Link to="/Product/Introduce" className="TextLink">
                      <h6 className="ExtraBold pCardTestContentTopic">
                        鵲鳥 琉璃項鍊
                      </h6>
                    </Link>
                    <strike>
                      <p className="pRegular pMoresaleCardContentOrignPrice">
                        NT $380
                      </p>
                    </strike>
                    <Link to="/Product/Introduce" className="TextLink">
                      <p className="pBig ExtraBold pMoresaleCardContentSalePrice">
                        NT $265
                      </p>
                    </Link>
                  </div>
                  <div className="pMoresaleCardContentSaleIcon">
                    {/* <div>
                      <img
                        className="pMoresaleCardContentSaleIconImg"
                        src={p_saleIconsfreight}
                        alt=""
                      ></img>
                    </div> */}
                    <div>
                      <img
                        className="pMoresaleCardContentSaleIconImg"
                        src={p_saleIconsdiscount}
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pMoresaleCard">
                <Link to="/Product/Introduce">
                  <img
                    src={`${API_GET_IMG}/溥心畬蘭花絲巾(白)_L1.jpg`}
                    className="pMoresaleCardImg"
                    alt=""
                  ></img>
                </Link>
                <div className="pMoresaleCardContent">
                  <div className="pMoresaleCardContentPrice">
                    <Link to="/Product/Introduce" className="TextLink">
                      <h6 className="ExtraBold pCardTestContentTopic">
                        溥心畬蘭花絲巾(白)
                      </h6>
                    </Link>
                    <strike>
                      {' '}
                      <p className="pRegular pMoresaleCardContentOrignPrice">
                        NT $780
                      </p>
                    </strike>

                    <Link to="/Product/Introduce" className="TextLink">
                      <p className="pBig ExtraBold pMoresaleCardContentSalePrice">
                        NT $545
                      </p>
                    </Link>
                  </div>
                  <div className="pMoresaleCardContentSaleIcon">
                    {/* <div>
                      <img
                        className="pMoresaleCardContentSaleIconImg"
                        src={p_saleIconsfreight}
                        alt=""
                      ></img>
                    </div> */}
                    <div>
                      <img
                        className="pMoresaleCardContentSaleIconImg"
                        src={p_saleIconsdiscount}
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pMoresaleCard">
                <Link to="/Product/Introduce">
                  <img
                    src={`${API_GET_IMG}/故宮萬壽無疆手環_L1.jpg`}
                    className="pMoresaleCardImg"
                    alt=""
                  ></img>
                </Link>
                <div className="pMoresaleCardContent">
                  <div className="pMoresaleCardContentPrice">
                    <Link to="/Product/Introduce" className="TextLink">
                      <h6 className="ExtraBold pCardTestContentTopic">
                        萬壽無疆手環
                      </h6>
                    </Link>
                    <strike>
                      {' '}
                      <p className="pRegular pMoresaleCardContentOrignPrice">
                        NT $1380
                      </p>
                    </strike>

                    <Link to="/Product/Introduce" className="TextLink">
                      <p className="pBig ExtraBold pMoresaleCardContentSalePrice">
                        NT $965
                      </p>
                    </Link>
                  </div>
                  <div className="pMoresaleCardContentSaleIcon">
                    {/* <div>
                      <img
                        className="pMoresaleCardContentSaleIconImg"
                        src={p_saleIconsfreight}
                        alt=""
                      ></img>
                    </div> */}
                    <div>
                      <img
                        className="pMoresaleCardContentSaleIconImg"
                        src={p_saleIconsdiscount}
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div style={{ height: '30vh' }}></div>
      <Footer />
    </>
  )
}

export default Home
