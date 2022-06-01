import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Spinner } from "react-bootstrap";
import FadeIn from 'react-fade-in'
import '../../styles/Forum.scss'
import '../../styles/AsideBar.scss'
import ForumAside from '../../component/ForumAside'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Article from '../../component/Article'

function Forum(props) {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const urlSearchParams = new URLSearchParams(location.search)
  const currentTopic = urlSearchParams.get("topic")
  const forBkCurrentTopic = encodeURI(currentTopic)
  const [btn, setBtn] = useState([])
  const [articleList, setArticleList] = useState([{}])

  // function toggle() {
  //   setIsLoading(false)
  // }

  // 側邊類別按鈕
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/category`)
      .then((res) => res.json())
      .then((data) => {
        setBtn(data)
      })
  }, [])

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
      {/* <Spinner variant='primary'/>
      <Loading className={`{(${isLoading}) ? "" : visually-hidden}`} />
<button onClick={toggle}>toggle</button> */}
      <Header data={articleList}/>
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