//文章收藏
import React, { useState, useEffect } from 'react'
import FadeIn from 'react-fade-in'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import AsideBar from '../../component/AsideBar'
import Article from '../../component/Article'

function ArticleCollect(props) {
  // localStorage.setItem('userid', '2')
  // const userID = localStorage.getItem('userid')
  // console.log(userID)

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
      `/users`,
      `/users/orderrecord`,
      `/users/articlecollect`,
      `/users/productcollect`,
      `/users/personalpage`,
      `/users/mycoupon`,
    ],
  }

  //拿到收藏文章列表
  const [articleList, setArticleList] = useState([])
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/ArticleCollection/`
      // , {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Accept": "application/json"
      //   },
      //   body: JSON.stringify({ userID: `${userID}` })
      // }
    )
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data)
        console.log(data)
        console.log('收藏文章')
      })
  }, [])

  return (
    <>
      <Header />
      <AsideBar btn={btnList} />
      <div className="container">
        <div className="frContent">
          <h3>文章收藏</h3>
          <FadeIn>
            <Article articDetails={articleList} />
          </FadeIn>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ArticleCollect
