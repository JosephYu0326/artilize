//個人頁面
import React from "react";
import { FaStar, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Forum.scss";
import "../../styles/global.scss";
import { Button } from "react-bootstrap";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import ForumAside from "../../component/ForumAside";

function FrPersonalPage(props) {
  let title = "標題標題標題";
  let content =
    "內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文，內文內文內文內文內文內文，內文內文內文內文內文內文內文內文內文內文內文，內文內文內文內文內文內文內文內文內文內文內文";
  return (
    <>
      <Header />
      <div className="personalPage justify-content-center">
        <div className="container personalPageHead justify-content-center my-5">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-12 text-center">
              <img
                className="avatar"
                src="https://picsum.photos/200"
                alt="userpicture"
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
              <div>
                <div className="h6">作者</div>
                <div className="displayN m-3">{"6篇文章"}</div>
              </div>
              <Button variant="btn btn-primary rounded-pill BorderRadius">
                FOLLOW
              </Button>
            </div>
          </div>
        </div>

      <ForumAside
        btn=<a href="/forum/addarticle">新增文章</a>
        btn1="02"
        btn2="01"
      />
        <section>
          <div className="frContent">
            <div className="perContentHead pt-4 d-flex justify-content-between align-items-center">
              <div className="">
                <p className="">{"作者"}</p>
                <h3 className="mb-5">{title}</h3>
              </div>
              <p className="category">-心得分享</p>
            </div>
            <div className="displayN">{content}</div>
            <div className="d-flex displayN justify-content-end align-items-center">
              <FaCommentDots />
              <div className="p-2 pBig">25</div>
              <FaStar />
            </div>
            <hr />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default FrPersonalPage;
