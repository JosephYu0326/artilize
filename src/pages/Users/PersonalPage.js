//會員下的個人主頁
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AsideBar from '../../component/AsideBar'
import FadeIn from 'react-fade-in'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Article from '../../component/Article'

function PersonalPage(props) {
  // 從localStorage設定使用者id
  const auth = JSON.parse(localStorage.getItem('auth'))
  const userID = localStorage.getItem('userId')
  console.log(`目前登入使用者id=${userID}`)

  const [articleList, setArticleList] = useState([{}])
  console.log(articleList)

  // 按鈕好像有更聰明的做法我再想想看
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

  // 顯示該用戶發表文章
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/personalpage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ userID: `${userID}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data)
      })
  }, [articleList.length])

  const imageUrl = ` ${process.env.REACT_APP_API_URL}/images/${articleList[0].userAvatar}`
  const imageUser = ` ${process.env.REACT_APP_API_URL}/images/user.png`

  return (
    <>
      <Header />
      <AsideBar btn={btnList} />
      <FadeIn className="personalPage justify-content-center">
        <div className="container personalPageHead justify-content-center my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-12 text-center">
              <img
                className="avatar"
                src={` ${
                  articleList[0].userAvatar == null ? imageUser : imageUrl
                }`}
                alt="userpicture"
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
              <div>
                <div className="h5">{articleList[0].userNickName}</div>
                <div className="h6 txtGray">
                  ( {articleList[0].userAccount} )
                </div>
                <div className="displayN m-3">{articleList.length} 篇討論</div>
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
      </FadeIn>
      <Footer />
    </>
  )
}

export default PersonalPage
