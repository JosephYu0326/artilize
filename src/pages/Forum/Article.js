import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaAngleLeft,
  FaAngleRight,
  FaCommentDots,
} from "react-icons/fa";
import Comment from "./Comment";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../../styles/AsideBar.scss";
import "../../styles/global.scss";
import "../../styles/Forum.scss";

function Article(props) {
  const content = `在有感謝順帶一讓我生活⋯九是我是太真的很你你會咖啡廳個，了嗎日向因為我的沒⋯次的邊還有為有沒有暴，跟而到最叫。是很想學住了一部分以沒有能，在一起這麼是心小心練不是：排球年輕女兒。一直到了。對方過了⋯不過我當更多，什麼會不會其他嗚嗚，就是我個決者的分開，買洗澡懷念不能接。會在他的想什麼都，我還道該怎舒適圈以後發現自己，得小的，之後恩我沒有⋯都是的本怎麼想當他不，黏土人。可能要記得但是，神有不做什麼。`;
  const [perArticle,setPerArticle] = useState([{}])

  
  return (
    <>
      <Header />
      <div className="backBtn displayN">
        <Link to="/forum">回討論區
          <FaAngleLeft />
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 liquidLeft"></div>
          <div className="liquid col-lg-10 col-sm-12">
            <section className="frContent mb-5">
              <div className="articleHead d-flex align-items-start justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    className="avatar m-4"
                    src="https://picsum.photos/200"
                    alt="userpicture"
                  />
                  <div>
                    <div className="p txtGray">{'123'}</div>
                    <div className="h4 Regular">標題標題標題標題</div>
                  </div>
                </div>
                <div className="like d-flex justify-content-center align-items-center">
                  <FaStar className="fs-5" />
                  <div className="px-2">收藏</div>
                </div>
              </div>
              <div className="articleBody">
                <p>{content}</p>
              </div>
              <div className="articleFoot">
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="category">分類：{"心得分享"}</p>
                    <div className="d-flex align-items-center">
                      <FaCommentDots />
                      <div className="px-2">25</div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaAngleLeft />
                      <div>上一篇文章</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaAngleRight />
                      <div>下一篇文章</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 新增回復 */}
              <section className="d-flex flex-column border my-5 p-4 newComment">
                <div className="d-flex align-items-center">
                  <img
                    className="avatar m-3"
                    src="https://picsum.photos/200"
                    alt="userpicture"
                  />
                  <div>Me</div>
                </div>
                <textarea
                  id="inputBox"
                  type="text"
                  className="my-3 form-control"
                ></textarea>
                <div className="align-self-end">
                  <button className="btn btn-primary rounded-pill">
                    新增回覆
                  </button>
                </div>
              </section>
              <Comment />
              <Comment />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Article;
