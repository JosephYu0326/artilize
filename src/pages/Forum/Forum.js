import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import '../../styles/Forum.scss'
import '../../styles/AsideBar.scss'
import ForumAside from '../../component/ForumAside'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Article from '../../component/Article'

function Forum(props) {
  const location = useLocation()
  const urlSearchParams = new URLSearchParams(location.search)
  const currentTopic = urlSearchParams.get("topic")
  const forBkCurrentTopic = encodeURI(currentTopic)
  const [btn, setBtn] = useState([])
  const [articleList, setArticleList] = useState([{}])
  // 側邊類別按鈕
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/category`)
      .then((res) => res.json())
      .then((data) => {
        setBtn(data)
      })
  }, [])
  //顯示所有文章(這邊沒有好像也好好的)
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/forum`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArticleList(data)
  //       console.log("所有文章");
  //     })
  // }, [])


  //文章類別篩選
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum?topic=${forBkCurrentTopic}`)
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data)
      })
  }, [currentTopic])


  return (
    <>
      <Header />
      <ForumAside btn={btn} />
      <FadeIn className="container h-100">
        <div className="frContent">
          <Article articDetails={articleList} />
        </div>
      </FadeIn>
      <Footer />
    </>
  )
}

export default Forum