import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Swal from 'sweetalert2'
import FadeIn from 'react-fade-in/lib/FadeIn'
import {
  FaTrashAlt,
  FaEdit,
  FaStar,
  FaAngleLeft,
  FaAngleRight,
  FaCommentDots,
} from 'react-icons/fa'
import Comment from './Comment'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import '../../styles/AsideBar.scss'
import '../../styles/global.scss'
import '../../styles/Forum.scss'

function Article(props) {
  const userId = localStorage.getItem('userId')
  const auth = localStorage.getItem('auth')
  const userAvatar = userId ? localStorage.getItem('userAvatar') : `user.png`
  console.log(userAvatar)

  const [show, setShow] = useState(false)

  //留言
  const [comments, setComments] = useState([{}])
  const [comment_msg, setComment_msg] = useState('')
  //追蹤留言內容
  const [commentInput, setCommentInput] = useState('')
  //文章關聯(好像dosn't work)
  const [preArticle, setPreArticle] = useState([{}])
  const [nowArticle, setNowArticle] = useState({})
  const [nextArticle, setNextArticle] = useState([{}])
  const [postLength, setPostLength] = useState(0)
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  const { forumid } = useParams()

  //===跟據param拿到當前文章，以及前後篇文章
  const getNowArticle = async () => {
    let res = await fetch(`${process.env.REACT_APP_API_URL}/forum/${forumid}`)
    let data = await res.json()
    if (data.length === 3) {
      setPreArticle(data[0])
      setNowArticle(data[1])
      setNextArticle(data[2])
    } else {
      setPreArticle(data[0])
      setNowArticle(data[1])
      setNextArticle({ title: '', created_time: '', content: '' })
      console.log(data)
    }
  }

  // ======留言匯入
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/comments/${forumid}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data)
        console.log('留言:')
        console.log(comments.length)
      })
    //UPDATE WITH ARTICLE TITLE
  }, [nowArticle])

  useEffect(() => {
    getNowArticle()
  }, [])

  useEffect(() => {
    setComment_msg('')
    setCommentInput('')
    //setPostLength(nowArticle.content.length)
  }, [forumid])

  // ----------CLICK觸發的事件------------
  // ======文章收藏
  function hnadleLike() {
    // 如果會員沒登入退回
    if (!userId) {
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: '您尚未登入，請登入後再操作',
        showConfirmButton: false,
        timer: 1500,
      })
      return
    } else {
      //已經收藏
      // if (nowArticle.favorited) {
      //   fetch(`${process.env.REACT_APP_API_URL}/ArticleCollection/remove`, {
      //     method: 'PUT',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Accept: 'application/json',
      //     },
      //     body: JSON.stringify({ favorited: nowArticle.favorited }),
      //     //怎麼轉址的時候取回用戶id回到個人頁面?
      //   }).then(setShow(false))
      //   Swal.fire('移除收藏成功!', '', 'success')
      //     // .then(setFavorited(!favorited))
      //     .catch((err) => console.log(`沒有成功刪除，因為${err}`))

      // const remove = async () => {
      //   const url = `${process.env.REACT_APP_API_URL}/ArticleCollection/remove`
      //   const request = new Request(url, {
      //     method: 'DELETE',
      //     body: JSON.stringify({
      //       likeID: userId,
      //     }),
      //     headers: new Headers({
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     }),
      //   })
      //   const response = await fetch(request)
      //   const data = await response.json()
      //   if (data.success) {
      //     setFavorited(!favorited)
      //     console.log(data, 'remove from Favorite')
      //   } else {
      //     alert('Failed to remove from Favorite')
      //   }
      // }
      // remove()
      // } else {
      //未收藏
      function alert() {
        Swal.fire('修改成功!', '', 'success')
      }
      fetch(`${process.env.REACT_APP_API_URL}/ArticleCollection`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          favorited: nowArticle.favorited,
          article: forumid,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          toggle(!state)
          // alert()
          getNowArticle()
          console.log(data)
        })
        .catch((err) => console.log(`沒有成功新增，因為${err}`))
      // .then((json) => console.log(json))

      // .then((data) => {
      //   console.log(data)
      //   if (data.ok) {
      //     setFavorited(!favorited)
      //     console.log(data, 'Add to Favorite')
      //   } else {
      //     alert('失敗')
      //   }
      // })

      // const add = async () => {
      //   fetch(`${process.env.REACT_APP_API_URL}/ArticleCollection/add`, {
      //     method: 'POST',
      //     body: JSON.stringify({
      //       "articleId": 71,
      //       "userId": 2,
      //     }),
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Accept": "application/json",
      //     }
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       if (data.ok) {
      //         setFavorited(!favorited)
      //         console.log(data, 'Add to Favorite')
      //       } else {
      //         alert('失敗')
      //       }
      //     })
      // }
      // add()
    }
  }
  // }

  // ======文章刪除
  function hnadleDel(e) {
    e.preventDefault()
    setShow(true)
    if (show) {
      Swal.fire({
        title: `確定刪除「${nowArticle.title}」?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#4153bb',
        cancelButtonColor: '#f4b942',
        confirmButtonText: '確定',
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${process.env.REACT_APP_API_URL}/forum/${forumid}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({ id: forumid }),
            //怎麼轉址的時候取回用戶id回到個人頁面?
          }).then(setShow(false))
          Swal.fire('刪除成功!', '', 'success')
            .then(goBack())
            .catch((err) => console.log(`沒有成功刪除，因為${err}`))
        }
      })
    }
  }

  // ======下一篇
  function next() {
    fetch(`${process.env.REACT_APP_API_URL}/forum/${nextArticle.article_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 3) {
          setPreArticle(data[0])
          setNowArticle(data[1])
          setNextArticle(data[2])
          //console.log(data)
        } else {
          setPreArticle(data[0])
          setNowArticle(data[1])
          setNextArticle({ title: '', created_time: '', content: '' })
        }
      })
  }
  // ======上一篇
  function pre() {
    fetch(`${process.env.REACT_APP_API_URL}/forum/${preArticle.article_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 3) {
          setPreArticle(data[0])
          setNowArticle(data[1])
          setNextArticle(data[2])
        } else {
          setPreArticle(data[0])
          setNowArticle(data[1])
          setNextArticle({ title: '', created_time: '', content: '' })
        }
      })
  }

  // ======新增留言
  let body = {
    comment: commentInput,
    userid: userId,
    article: forumid,
  }

  function postComment(e) {
    e.preventDefault()
    let isPass = true // 有沒有通過檢查
    setComment_msg('') // 清空訊息

    //表單資料送出之前, 做格式檢查
    if (commentInput.length < 15) {
      isPass = false
      setComment_msg(
        `留言字數需15字以上，您還需要${15 - commentInput.length}字`
      )
    }
    if (isPass) {
      fetch(`${process.env.REACT_APP_API_URL}/ArticleComment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      })
        // .then(alert('增新成功'))
        .then((r) => r.json())
        .then((obj) => {
          // console.log(obj.serverStatus);
          if (obj.serverStatus === 2) {
            let commentSuccsee = true
            if (commentSuccsee) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: '評論發表成功',
                showConfirmButton: false,
                timer: 1500,
              })
              getNowArticle()
              setCommentInput('')
            }
          }
        })
        .catch(function (error) {
          alert('新增失敗，網站忙碌中，請再試一次')
        })
    }
  }

  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 500 },
  })

  return (
    <>
      <Header />
      <div className="backBtn displayN">
        <Link to="/forum">
          回討論區
          <FaAngleLeft />
        </Link>
      </div>
      <div className="con container">
        <FadeIn className="row">
          <div className="col-lg-1 liquidLeft"></div>
          <div className="liquid col-lg-10 col-sm-12">
            <section className="frContent mb-5">
              <div className="articleHead d-flex align-items-start justify-content-between">
                <div className="d-flex align-items-center">
                  <Link to={`/forum/FrPersonalPage/${nowArticle.users_id}`}>
                    <img
                      className="avatar m-4"
                      src={`${process.env.REACT_APP_API_URL}/images/${nowArticle.userAvatar}`}
                      alt="userpicture"
                    />
                  </Link>
                  <div>
                    <Link
                      className="p txtGray"
                      to={`/forum/FrPersonalPage/${nowArticle.users_id}`}
                    >
                      {nowArticle.userNickName}
                    </Link>
                    <div className="h4 ps-3 Regular">{nowArticle.title}</div>
                  </div>
                </div>
                <div className="like d-flex justify-content-center align-items-center">
                  <animated.div
                    style={{
                      scale: x.to({
                        range: [0.8, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1.2, 0.97, 0.9, 1.2, 0.9, 1.1, 1.03, 1],
                      }),
                    }}
                  >
                    <FaStar
                      onClick={hnadleLike}
                      className={`${
                        nowArticle.favorited ? 'likeIt' : ''
                      } text-decoration-none fs-5 mx-2`}
                    />
                  </animated.div>
                  <Link
                    to={`/forum/EditArticle/${nowArticle.article_id}`}
                    className="text-decoration-none"
                  >
                    <FaEdit
                      className={`${
                        nowArticle.users_id == userId ? '' : 'd-none'
                      } fs-5 mx-2 `}
                    />
                  </Link>
                  <FaTrashAlt
                    onClick={hnadleDel}
                    className={`${
                      nowArticle.users_id == userId ? '' : 'd-none'
                    } fs-5 mx-2 articleDel`}
                  />
                </div>
              </div>
              <div className="articleBody py-5">
                {/* <p className="txtGray pLabel">
                  閱讀時間{' '}
                  {nowArticle.content.length < 400
                    ? 1
                    : Math.floor(nowArticle.content.length / 400)}{' '}
                  分鐘
                </p> */}
                <div
                  dangerouslySetInnerHTML={{ __html: `${nowArticle.content}` }}
                ></div>
              </div>
              <div className="articleFoot">
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="category pRegular">
                      分類：{nowArticle.thema}
                    </p>
                    <div className="d-flex align-items-center">
                      <FaCommentDots />
                      <div className="px-2">{comments.length}</div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaAngleLeft />
                      <div onClick={next}>
                        <Link
                          className="text-decoration-none"
                          to={`/forum/${nextArticle.article_id}`}
                        >
                          {nextArticle.title}
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div onClick={pre}>
                        <Link
                          className="text-decoration-none"
                          to={`/forum/${preArticle.article_id}`}
                        >
                          {preArticle.title}
                        </Link>
                      </div>
                      <FaAngleRight />
                    </div>
                  </div>
                </div>
              </div>
              {/* 新增回復 */}
              {userId ? (
                <section className="d-flex flex-column border my-5 p-4 newComment">
                  <div className="d-flex align-items-center">
                    <img
                      className="avatar m-3"
                      src={` ${process.env.REACT_APP_API_URL}/images/${userAvatar}`}
                      alt="userpicture"
                    />
                    <div>Me</div>
                  </div>
                  <textarea
                    id="inputBox"
                    type="text"
                    value={commentInput}
                    className="my-3 form-control"
                    onChange={(e) => setCommentInput(e.target.value)}
                  ></textarea>
                  <div style={{ color: 'red' }}>{comment_msg}</div>
                  <div className="align-self-end">
                    <button
                      onClick={postComment}
                      className="btn btn-primary rounded-pill"
                    >
                      新增回覆
                    </button>
                  </div>
                </section>
              ) : (
                <section className="d-flex txtGray flex-column text-center border my-5 p-4 newComment">
                  <Link to="/users" className="text-decoration-none">
                    登入以參與討論
                  </Link>
                </section>
              )}
              <Comment forum={getNowArticle} comment={comments} />
            </section>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </>
  )
}

export default Article
