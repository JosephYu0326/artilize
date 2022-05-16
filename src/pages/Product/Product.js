//商品
import React from 'react'
import { Link } from 'react-router-dom'
import p_adImages from '../../images/product_Images/ad/test_1.jpg'
import p_Images from '../../images/product_Images/product/tea_L2.jpg'
import p_brandImages from '../../images/product_Images/brand/nationalpalace.png'
import Header from '../../component/Header'
import { Container } from 'react-bootstrap'
import AsideBar from '../../component/AsideBar'

function Product(props) {
  return (
    <>
      <Header />
      <AsideBar />
      <div>商品</div>
      <Link to="/product/introduce">商品介紹</Link>
      <br />
      <Link to="/booking/cart">購物車</Link>
      <br />
      <div>
        <img src={p_adImages} style={{ height: 400 }}></img>
      </div>
      <Container>
        <div id="Porductc_Home">
          <div class="ph_title row justify-content-center">熱銷 TOP 10</div>
          <div class="container row justify-content-center">
            <div class="row row-cols-3">
              <div class="ph_contentTopic col d-flex row">
                <a>
                  <img src={p_Images} style={{ width: 150, height: 150 }}></img>
                </a>
                <h6 className="ExtraBold">國寶奇種烏龍茶組</h6>
                <p className="ExtraBold">NT $1200</p>
              </div>
              <div class="ph_contentTopic col d-flex row">
                <a>
                  <img src={p_Images} style={{ width: 150, height: 150 }}></img>
                </a>
                <h6 className="ExtraBold">國寶奇種烏龍茶組</h6>
                <p className="ExtraBold">NT $1200</p>
              </div>
              <div class="ph_contentTopic col d-flex row">
                <a>
                  <img src={p_Images} style={{ width: 150, height: 150 }}></img>
                </a>
                <h6 className="ExtraBold">國寶奇種烏龍茶組</h6>
                <p className="ExtraBold">NT $1200</p>
              </div>
            </div>
          </div>
          <div class="ph_title row justify-content-center">精選館別</div>
          <div class="container row justify-content-center">
            <div class="row row-cols-3">
              <div class="ph_contentTopic col d-flex row">
                <a>
                  <img src={p_brandImages}></img>
                </a>
                <h6 className="ExtraBold">國寶奇種烏龍茶組</h6>
              </div>
              <div class="ph_contentTopic col d-flex row">
                <a>
                  <img src={p_brandImages}></img>
                </a>
                <h6 className="ExtraBold">國寶奇種烏龍茶組</h6>
              </div>
              <div class="ph_contentTopic col d-flex row">
                <a>
                  <img src={p_brandImages}></img>
                </a>
                <h6 className="ExtraBold">國寶奇種烏龍茶組</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Product
