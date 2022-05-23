import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FadeIn from 'react-fade-in'
import '../../styles/Forum.scss'
import '../../styles/AsideBar.scss'
import ForumAside from '../../component/ForumAside'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Article from '../../component/Article'

function Forum(props) {
  const [btn, setBtn] = useState([])
  const [articleList, setArticleList] = useState([{}])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/category`)
      .then((res) => res.json())
      .then((data) => {
        setBtn(data)
      })
  }, [])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum`)
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data)
      })
  }, [])

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