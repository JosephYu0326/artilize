//我的優惠券
import React from "react";
import { Link } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";
import FadeIn from "react-fade-in";
import "../../styles/Forum.scss";
import AsideBar from "../../component/AsideBar";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

function MyCoupon(props) {
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
  let ticketList = {
    exhibition: ["展覽券", "免費參觀", "WE34980RG", "2022/06/30", "未使用"],
    product: ["商品券", "折抵20元", "PD34980RG", "2022/07/31", "未使用"],
  };
  return (
    <>
      <Header />
      <AsideBar btn={btnList} />

      <div className="container ">
        <div className="userPage mx-auto frContent row justify-content-between">
          <h3>我的優惠券</h3>

          <div className="coupon row col-md-12 col-lg-6 my-2">
            <div className="couponImage col-4">
              {/* <img src={couponBG} /> */}
              <FaTicketAlt className="couponIcon mt-2" />
              <h5>{ticketList.exhibition[0]}</h5>
            </div>
            <div className="couponMsg text-center col-7">
              <h5>憑此券可{ticketList.exhibition[1]}</h5>
              <p className="pRegular align-self-start">
                {ticketList.exhibition[2]}
              </p>
              <div className="d-flex justify-content-around">
                <p className="pRegular">期限{ticketList.exhibition[3]}</p>
                <p className="pRegular">{ticketList.exhibition[4]}</p>
              </div>
            </div>
          </div>

          <div className="coupon row col-md-12 col-lg-6 my-2">
            <div className="couponImage col-4">
              {/* <img src={couponBG} /> */}
              <FaTicketAlt className="couponIcon mt-2" />
              <h5>{ticketList.product[0]}</h5>
            </div>
            <div className="couponMsg text-center col-7">
              <h5>憑此券可{ticketList.product[1]}</h5>
              <p className="pRegular">{ticketList.product[2]}</p>
              <div className="d-flex justify-content-around">
                <p className="pRegular">期限{ticketList.product[3]}</p>
                <p className="pRegular">{ticketList.product[4]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyCoupon;
