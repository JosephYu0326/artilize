import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Waypoint } from 'react-waypoint'
import FadeIn from 'react-fade-in'
import '../../styles/Forum.scss'
import '../../styles/AsideBar.scss'
import ForumAside from '../../component/ForumAside'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Article from '../../component/Article'
import Chat from '../../component/Chat'

function Forum(props) {
  const forumSpinner = (
    <div
      style={{ height: '77.5vh', overflow: 'auto' }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  )
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const urlSearchParams = new URLSearchParams(location.search)
  const currentTopic = urlSearchParams.get('topic')
  const forBkCurrentTopic = encodeURI(currentTopic)
  const [btn, setBtn] = useState([])
  const [serchInput, setSerchInput] = useState('')
  const [articleList, setArticleList] = useState([{}])

  // ==============

  // const [hasMore, sethasMore] = useState(true);
  const [limit, setLimit] = useState(0)
  const [page, setPage] = useState(3)
  // useEffect(() => {
  //   const getComments = async () => {
  //     const res = await fetch(
  //       `${process.env.REACT_APP_API_URL}/forum?topic=${forBkCurrentTopic}&limit=0`
  //     );
  //     const data = await res.json();
  //     console.log('GETCOMMENT');
  //     setArticleList(data);
  //   };

  //   getComments();
  // }, []);

  // const fetchComments = async () => {
  //   const res = await fetch(
  //     `${process.env.REACT_APP_API_URL}/forum?topic=${forBkCurrentTopic}&limit=${limit}`
  //     // For json server use url below
  //     // `http://localhost:3004/comments?_page=${page}&_limit=20`
  //   );
  //   const data = await res.json();
  //   console.log('COMMENT');
  //   return data;
  //   setLimit(limit + 3)
  // };

  // const fetchData = async () => {
  //   const commentsFormServer = await fetchComments();

  //   setArticleList([...articleList, ...commentsFormServer]);
  //   if (commentsFormServer.length === 0 || commentsFormServer.length < 5) {
  //     sethasMore(false);
  //   }
  //   setLimit(limit + 3);
  //   console.log(limit);
  // };

  // ==============

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
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [currentTopic])

  // ============
  const fetchComments = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/forum?topic=${forBkCurrentTopic}&limit=${limit}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data)
        console.log('infinity')
        setPage(page + 3)
      })
  }

  // ============
  //文章搜尋
  useEffect(() => {
    if (serchInput) {
      setIsLoading(true)
      fetch(`${process.env.REACT_APP_API_URL}/Forum/search`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          keyword: serchInput,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          //把傳進來的資料更改為執行SQL語句後的結果
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
          setArticleList(data)
        })
    }
  }, [serchInput])

  return (
    // <>

    //   <Header data={articleList} setSerchInput={setSerchInput} />
    //   <ForumAside btn={btn} />
    //   <InfiniteScroll
    //     dataLength={articleList.length} //This is important field to render the next data
    //     next={fetchData}
    //     hasMore={hasMore}
    //     loader="Loading"
    //     endMessage="Yay! You have seen it all"
    //   >
    //     <FadeIn className="container h-100">
    //       <div className="frContent">
    //         {articleList.map((articleList) => {
    //           return <Post key={articleList.id} articleList={articleList} />;
    //         })}
    //       </div>
    //     </FadeIn>
    //   </InfiniteScroll>
    //   <Footer />
    // </>

    <>
      <Chat />
      <Header data={articleList} setSerchInput={setSerchInput} />
      <ForumAside btn={btn} />
      {isLoading ? (
        forumSpinner
      ) : (
        <>
          <FadeIn className="container h-100">
            <div className="frContent">
              {articleList.length == 0 ? (
                <div className="txtGray d-flex justify-content-center">
                  找不到相關文章
                </div>
              ) : (
                <Article
                  articDetails={articleList}
                  fetchComments={fetchComments}
                />
              )}
            </div>
          </FadeIn>
          <Footer />
          <Waypoint onEnter={fetchComments} />
        </>
      )}
    </>
  )
}

export default Forum
