import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";
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
  const [perArticle, setPerArticle] = useState({})
  const { forumid } = useParams()

  useEffect(() => {
    fetch(`/forum/${forumid}`).then(
      res => res.json()
    ).then(
      data => {
        setPerArticle(data)
        console.log(data);
      }
    )
  }, [])
  return (
    <>
      <Header />
      <div className="backBtn displayN">
        <Link to="/forum">回討論區
          <FaAngleLeft />
        </Link>
      </div>
      <div className="container">
        <FadeIn className="row">
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
                    <div className="p txtGray">{perArticle.nickname}</div>
                    <div className="h4 Regular">{perArticle.article_title}</div>
                  </div>
                </div>
                <div className="like d-flex justify-content-center align-items-center">
                  <FaStar className="fs-5" />
                  <div className="px-2">收藏</div>
                </div>
              </div>
              <div className="articleBody">
                <pre>{perArticle.content}</pre>
              </div>
              <div className="articleFoot">
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="category pSmall">分類：{perArticle.thema}</p>
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

            </section>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </>
  );
}

export default Article;
