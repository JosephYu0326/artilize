//商品
import '../../styles/products.scss'
// import '../../styles/AsideBar.scss'
import React from 'react'
import Header from '../../component/Header'
import Accordion from '../../component/Accordion'
// import AsideBar from '../../component/AsideBar'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import p_adImages from '../../images/product_Images/ad/test_2.jpeg'
import p_Images from '../../images/product_Images/product/tea_L2.jpg'
import p_brandImages from '../../images/product_Images/brand/nationalpalace.png'
import p_saleImages from '../../images/product_Images/product/whiteveg.jpeg'
import p_saleIconsfreight from '../../images/product_Images/icons/freeFreight.png'
import p_saleIconsdicount from '../../images/product_Images/icons/sale.png'

function Product(props) {
  const ptCards = ['1', '2', '3']
  const pImg = { backgroundImage: `url(${p_Images})` }
  const ptBrandCards = ['1', '2', '3']
  const pBrandImg = { backgroundImage: `url(${p_brandImages})` }
  const ptSaleCards = ['1', '2', '3']
  const pSaleImg = { backgroundImage: `url(${p_saleImages})` }
  const pSaleImgfreight = { backgroundImage: `url(${p_saleIconsfreight})` }
  const pSaleImgdiscount = { backgroundImage: `url(${p_saleIconsdicount})` }

  const pCards = ptCards.map((v, i) => {
    return (
      <div key={i}>
        <div className="col d-flex justify-content-center">
          <div className="productCards d-flex">
            <Link to="/Product/Introduce">
              <div style={pImg} className="pImg"></div>
            </Link>
            <div className="d-flex pContent">
              <div className="pTitle mt-2">
                <Link to="/Product/Introduce" className="pLinkTitle">
                  <h6 className="pTitletext text-web pt-2 ExtraBold">
                    國寶奇種烏龍茶組-{i}
                  </h6>
                </Link>
              </div>
              <div className="price text-web">
                <Link to="/Product/Introduce" className="pLinkPrice">
                  <p className="ExtraBold">1500</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  const pBrandCards = ptBrandCards.map((v, i) => {
    return (
      <div key={i}>
        <div className="col d-flex justify-content-center">
          <div className="productBrandCards d-flex">
            <Link to="">
              <div style={pBrandImg} className="pBrandImg"></div>
            </Link>
            <div className="d-flex pBrandContent">
              <Link to="" className="pBrandLinktitle">
                <h6 className="ExtraBold pBrandTitletext">
                  國立故宮博物院-{i}
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  })

  const pSaleCards = ptSaleCards.map((v, i) => {
    return (
      <div key={i}>
        <div className="productDiscountCards d-flex">
          <Link to="">
            <div style={pSaleImg} className="pSaleImg"></div>
          </Link>
          <div className="d-flex pSaleContent">
            <div className="d-flex pSaleContentdetail">
              <Link to="" className="pSaleLinktitle">
                <h6 className="ExtraBold pSaleTitletext">
                  琉璃 - 翠玉白菜-{i}
                </h6>
              </Link>
              <p className="orignPrice Regular">10000-{i}</p>
              <Link to="" className="discountPrice">
                <p className="ExtraBold salePrice">8500-{i}</p>
              </Link>
            </div>
            <div className="d-flex pSaleDiscounticon">
              <div style={pSaleImgfreight} className="pSaleIconfreight"></div>
              <div style={pSaleImgdiscount} className="pSaleIcondiscount"></div>
            </div>
          </div>
        </div>
      </div>
    )
  })

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
          <div className="row row-cols-xxl-3 row-cols-2">{pCards}</div>
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-center">
            <h5 className="ExtraBold pCardTopictext d-flex justify-content-center">
              精選館別
            </h5>
          </div>
          <div className="row row-cols-xxl-3 row-cols-2">{pBrandCards}</div>
        </div>
        <div className="mt-5">
          <div className="d-flex justify-content-center">
            <h5 className="ExtraBold pCardTopictext d-flex justify-content-center">
              更多優惠
            </h5>
          </div>
          <div className="row row-cols-xxl-3 row-cols-2 mb-3">{pSaleCards}</div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Product
