//個人頁面
import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link, useLocation, useParams } from 'react-router-dom'
import '../../styles/Forum.scss'
import '../../styles/global.scss'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Article from '../../component/Article'
import ForumAside from '../../component/ForumAside'

function FrPersonalPage(props) {
  const [articleList, setArticleList] = useState([{}])
  const { userID } = useParams()
  console.log(articleList)
  console.log(userID)
  //顯示該用戶發表文章
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/forum/FrPersonalPage/2`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArticleList(data)
  //     })
  // }, [])

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
  }, [])

  return (
    <>
      <Header />
      <div className="backBtn displayN">
        <Link to="/forum">
          回討論區
          <FaAngleLeft />
        </Link>
      </div>
      <div className="personalPage justify-content-center">
        <div className="container personalPageHead justify-content-center my-5">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-12 text-center">
              <img
                className="avatar"
                src={` ${process.env.REACT_APP_API_URL}/images/${articleList[0].userAvatar}`}
                alt="userpicture"
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 text-center">
              <div>
                <div className="h6">{articleList[0].userNickName}</div>
                <div className="h6 txtGray">{articleList[0].userAccount}</div>
                <div className="displayN m-3">{articleList.length} 篇討論</div>
              </div>
              {/* <Button variant="btn btn-primary rounded-pill BorderRadius">
                FOLLOW
              </Button> */}
            </div>
          </div>
        </div>
        {/* <ForumAside btn={btn} /> */}
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

export default FrPersonalPage
