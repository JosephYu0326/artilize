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
  const [serchInput, setSerchInput] = useState('')
  const [articleList, setArticleList] = useState([{}])

  // console.log(serchInput);

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

  //文章搜尋
  useEffect(() => {
    if (serchInput) {
      fetch(`${process.env.REACT_APP_API_URL}/ArticleCollection/search`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          keyword: serchInput
        }),
      }).then((res) => res.json())
        .then((data) => {
          //把傳進來的資料更改為執行SQL語句後的結果
          setArticleList(data)
        })
    }
  }, [serchInput])


  return (
    <>
      {/* <Spinner variant='primary'/>
      <Loading className={`{(${isLoading}) ? "" : visually-hidden}`} />
<button onClick={toggle}>toggle</button> */}
      <Header data={articleList} setSerchInput={setSerchInput} />
      <ForumAside btn={btn} />
      <FadeIn className="container h-100">
        <div className="frContent">
          {(articleList.length == 0) ?
            <div className='txtGray'>找不到相關文章</div>
            :
            <Article articDetails={articleList} />
          }
        </div>
      </FadeIn>
      <Footer />
    </>
  )
}

export default Forum