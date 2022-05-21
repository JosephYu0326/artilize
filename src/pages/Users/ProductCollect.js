//商品收藏
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import AsideBar from "../../component/AsideBar";
import Card from "../../pages/Exhibition/Card";
import "../../styles/exhibition-list.scss";
import "../../styles/exhibition-introduce.scss";

function ProductCollect(props) {
  const btnList = 
    {
      btnTitle: [
        "會員資料",
        "訂單紀錄",
        "文章收藏",
        "商品收藏",
        "個人主頁",
        "我的優惠券",
      ],
      btnTo: [
        "/users",
        "/users/orderrecord",
        "/users/articlecollect",
        "/users/productcollect",
        "/users/personalpage",
        "/users/mycoupon"
      ],
    }
  return (
    <>
      <Header />
      <AsideBar 
        btn={btnList}
      />
      
      <div className="container">
        <div className="userPage frContent">
          <h3>商品收藏</h3>
          <div>
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductCollect;
