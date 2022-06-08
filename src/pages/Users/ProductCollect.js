//商品收藏
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import AsideBar from '../../component/AsideBar'
// import Card from "../../pages/Exhibition/Card";
// import "../../styles/exhibition-list.scss";
// import "../../styles/exhibition-introduce.scss";
// ===================================================
import p_Images from '../../images/product_Images/product/tea_L2.jpg'
import '../../styles/products.scss'
import '../../styles/Forum.scss'

function ProductCollect(props) {
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

  // 新增商品CARD
  const ptCards = ['1', '2', '3']
  const pImg = { backgroundImage: `url(${p_Images})` }

  const pCards = ptCards.map((v, i) => {
    return (
      <div key={i}>
        <div className="col d-flex justify-content-center">
          <div className="productCards d-flex">
            <Link to="/Product/Introduce">
              {/* <div style={pImg} className="pImg"></div>  放照片的位置 */}
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

  return (
    <>
      <Header />
      <AsideBar btn={btnList} />

      <div className="container">
        <div className="userPage frContent">
          <h3>商品收藏</h3>
          <div>
            {/* 麻煩改成你的CARDㄌ! */}
            {/* <Card /> */}
            {/* =========== 新增商品CARD ============ */}
            {pCards}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductCollect
