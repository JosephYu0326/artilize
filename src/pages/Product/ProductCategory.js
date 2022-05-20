//商品介紹_內部分頁(類別)
import '../../styles/products.scss'
// import '../../styles/AsideBar.scss'
import '../../styles/productCategory.scss'
import React from 'react'
import Header from '../../component/Header'
import Accordion from '../../component/Accordion'
// import AsideBar from '../../component/AsideBar'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import p_adImages from '../../images/product_Images/ad/test_2.jpeg'
import p_categoryImg from '../../images/product_Images/product/necklace.jpeg'

function Product(props) {
  const ptCategoryCards = ['1', '2', '3']
  const pCategoryImg = { backgroundImage: `url(${p_categoryImg})` }
  //   const categorys = ['經典藝術', '珍藏瑰寶', '品味生活', '生活禮品']
  //   const categoryDetails = {
  //     0: ['陶瓷.青銅器', '琉璃', '山水花鳥人物畫', '雕塑', '書籍'],
  //     1: ['項鍊.耳環', '絲巾.領巾', '手環.手鍊', '手錶', '包款', '扇子.傘'],
  //     2: ['茗品茶具', '吊牌/吊飾.卡套', '居家擺飾', '美食.飲品', '益智.玩具'],
  //     3: ['文房四寶', '織標', '筆.筆記本', '文件收納'],
  //   }

  //   const Category = categorys.map((v, i) => {
  //     return (
  //       <div key={i}>
  //         <Accordion defaultActive="0" flush>
  //           <Accordion.Item eventKey={i}>
  //             <Accordion.Header>
  //               <button className="btn asideBtn py-2 px-3">{categorys[i]}</button>
  //             </Accordion.Header>
  //             <Accordion.Body>
  //               {categoryDetails[i].map((v, j) => {
  //                 return (
  //                   <div key={j}>
  //                     <Link
  //                       to="/product/InCategory"
  //                       className="asideCategoryLink"
  //                     >
  //                       <div className="asideBarDetails">
  //                         <button className="btn asideBtn">
  //                           {/* <div className="selectsquare"></div> */}
  //                           <h6>{categoryDetails[i][j]}</h6>
  //                         </button>
  //                       </div>
  //                     </Link>
  //                   </div>
  //                 )
  //               })}
  //             </Accordion.Body>
  //           </Accordion.Item>
  //         </Accordion>
  //       </div>
  //     )
  //   })

  const pCategoryCards = ptCategoryCards.map((v, i) => {
    return (
      <div key={i}>
        <div className="pCategoryCard d-flex">
          <Link to="/Product/Introduce">
            <div style={pCategoryImg} className="pCategoryCardimg"></div>
          </Link>
          <div className="pCategoryCardcontent d-flex flex-column align-items-center justify-content-center">
            <div className="pCategoryCardcontenttopic">
              <Link to="/Product/Introduce" className="pCategoryCardlinktopic">
                <div className="pCategoryContenttopictext">
                  <h6 className="ExtraBold">鴛鴦同心項鍊-純粹 -{i}</h6>
                </div>
              </Link>
            </div>
            <div className="pCategoryCardcontentprice">
              <Link to="/Product/Introduce" className="pCategoryCardlinkprice">
                <div className="pCategoryCardcontentpricetext">
                  <p className="pBig ExtraBold">2080 -{i}</p>
                </div>
              </Link>
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
      <Container>
        <div className="row row-cols-xxl-3 row-cols-2">{pCategoryCards}</div>
        <div className="row row-cols-xxl-3 row-cols-2">{pCategoryCards}</div>
        <div className="row row-cols-xxl-3 row-cols-2">{pCategoryCards}</div>
      </Container>
      <Footer />
    </>
  )
}

export default Product
