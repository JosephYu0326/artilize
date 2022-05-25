//商品
import '../../styles/products.scss'
// import '../../styles/AsideBar.scss'
import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../component/Header'
import Accordion from '../../component/Accordion'
// import AsideBar from '../../component/AsideBar'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { API_GET_DATA } from './constants'
import p_adImages from '../../images/product_Images/ad/test_2.jpeg'
import p_Images from '../../images/product_Images/product/tea_L2.jpg'
import p_brandImages from '../../images/product_Images/brand/nationalpalace.png'
import p_saleImages from '../../images/product_Images/product/whiteveg.jpeg'
import p_saleIconsfreight from '../../images/product_Images/icons/freeFreight.png'
import p_saleIconsdiscount from '../../images/product_Images/icons/sale.png'

const fetchData = async () => {
  const res = await fetch(API_GET_DATA)
  const data = await res.json()
  console.log(data)
}

function Product(props) {
  const ptCards = ['1', '2', '3']
  const pImg = { backgroundImage: `url(${p_Images})` }
  const ptBrandCards = ['1', '2', '3']
  const pBrandImg = { backgroundImage: `url(${p_brandImages})` }
  const ptSaleCards = ['1', '2', '3']
  const pSaleImg = { backgroundImage: `url(${p_saleImages})` }
  const pInCartImg = { backgroundImage: `url(${p_Images})` }

  const [pCardData, setData] = useState([])
  // const fetchData = async () => {
  //   const res = await fetch(API_GET_DATA)
  //   const results = await res.json()
  //   console.log(results)
  //   // setData(results)
  // }
  // console.log(pCardData)

  useEffect(() => {
    fetchData()
  }, [])

  // const pCards = pCardData.map(({ id, title, pimg, orignprice, price }) => (
  //   <div key={id}>
  //     <div className="col d-flex justify-content-center">
  //       <div className="productCards d-flex">
  //         <Link to="/Product/Introduce">
  //           <div
  //             style={require(`../../images/product_Images/${pimg}`)}
  //             className="pImg"
  //           ></div>
  //         </Link>
  //         <div className="d-flex pContent">
  //           <div className="pTitle mt-2">
  //             <Link to="/Product/Introduce" className="pLinkTitle">
  //               <h6 className="pTitletext text-web pt-2 ExtraBold">{title}</h6>
  //             </Link>
  //           </div>
  //           <div className="price text-web">
  //             <Link to="/Product/Introduce" className="pLinkPrice">
  //               <p className="ExtraBold">{price}</p>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // ))

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
        <img src={p_adImages} style={{ width: '100%', height: '400px' }}></img>
      </div>
      <Container className="main mt-5 justify-content-center">
        <div>
          <div className="d-flex justify-content-center">
            <h5 className="ExtraBold pCardTopictext d-flex justify-content-center">
              熱銷 TOP10
            </h5>
          </div>
          {/* <div className="row row-cols-xxl-3 row-cols-2">{pCards}</div> */}
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-center">
            <h5 className="ExtraBold pCardTopictext d-flex justify-content-center">
              精選館別
            </h5>
          </div>
          <div className="row row-cols-xxl-3 row-cols-2"></div>
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-center">
            <h5 className="ExtraBold pCardTopictext d-flex justify-content-center">
              更多優惠
            </h5>
          </div>
          <div className="row row-cols-xxl-3 row-cols-2 mb-3"></div>
        </div>
      </Container>
      <Container>
        <div className="InCart">
          <div className="InCartImg" style={pInCartImg} height="80"></div>
          <div className="InCartTopic"></div>
          <div className="InCartAmount"></div>
          <div className="InCartTotal"></div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Product
