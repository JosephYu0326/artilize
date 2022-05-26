//會員下的個人主頁
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import AsideBar from "../../component/AsideBar";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Article from '../../component/Article'

function PersonalPage(props) {
  // 從appjs暫時設定使用者id
  const userID = props.id
  console.log(`目前登入使用者id=${userID}`);

  const [articleList, setArticleList] = useState([{}])
  console.log(articleList);

  // 按鈕好像有更聰明的做法我再想想看
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

  // 顯示該用戶發表文章
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/personalpage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ userID: `${userID}` })
    })
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data)
      })
  }, [])

  return (
    <>
      <Header />
      <AsideBar
        btn={btnList}
      />
      <div className="personalPage justify-content-center">
        <div className="container personalPageHead justify-content-center my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-12 text-center">
              <img
                className="avatar"
                src="https://picsum.photos/200"
                alt="userpicture"
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
              <div>
                <div className="h5">{articleList[0].nickname}</div>
                <div className="h6 txtGray">( {articleList[0].username} )</div>
                <div className="displayN m-3">{articleList.length}篇文章</div>
              </div>
              {/* <Button variant="btn btn-primary rounded-pill BorderRadius">
                FOLLOW
              </Button> */}
            </div>
          </div>
        </div>
        <section>
          <div className="frContent">
            <Article articDetails={articleList} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default PersonalPage
