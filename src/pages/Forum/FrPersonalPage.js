//個人頁面
import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLocation, useParams } from 'react-router-dom'
import "../../styles/Forum.scss";
import "../../styles/global.scss";
import { Button } from "react-bootstrap";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Article from '../../component/Article'
import ForumAside from "../../component/ForumAside";

function FrPersonalPage(props) {
  const btn = ["逛展攻略", "心得分享", "小資旅遊"]
  const [articleList, setArticleList] = useState([{}])
  const { userID } = useParams()
  console.log(articleList);
  //顯示該用戶發表文章
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/FrPersonalPage/${userID}`)
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data)
      })
  }, [])
  return (
    <>
      <Header />
      <div className="backBtn displayN">

        <Link to="/forum">回討論區
          <FaAngleLeft />
        </Link>

      </div>
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
                {/* <div className="h6">{articleList[0].nickname}</div> */}
                <div className="displayN m-3">{"6篇文章"}</div>
              </div>
              {/* <Button variant="btn btn-primary rounded-pill BorderRadius">
                FOLLOW
              </Button> */}
            </div>
          </div>
        </div>
        <ForumAside btn={btn} />
        <section>
          <div className="frContent">
            {/* <Article articDetails={articleList} /> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default FrPersonalPage;
