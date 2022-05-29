import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import FadeIn from 'react-fade-in/lib/FadeIn'
import {
  FaShareAltSquare,
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
  const userId = 2
  const [show, setShow] = useState(false)
  // 文章收藏狀態
  const [favorited, setFavorited] = useState(false)
  //留言
  const [comments, setComments] = useState([{}])
  const [comment_msg, setComment_msg] = useState("")
  //追蹤留言內容
  const [commentInput, setCommentInput] = useState("")
  //文章關聯(好像dosn't work)
  const [preArticle, setPreArticle] = useState([{}])
  const [nowArticle, setNowArticle] = useState({})
  const [nextArticle, setNextArticle] = useState([{}])
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

      console.log("此頁文章")
      console.log(nowArticle)
    } else {
      setPreArticle(data[0])
      setNowArticle(data[1])
      setNextArticle({ title: '', created_time: '', content: '' })
    }
  }


  // ======留言匯入
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/comments/${forumid}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data)
        console.log("留言:");
        console.log(comments.length);
      })
    //UPDATE WITH ARTICLE TITLE
  }, [nowArticle, show])


  useEffect(() => {
    getNowArticle()
  }, [])

  useEffect(() => {
    setCommentInput('')
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
        timer: 1500
      })
      return
    } else {
      //已經收藏
      if (favorited) {
        fetch(`${process.env.REACT_APP_API_URL}/ArticleCollection/remove`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({ "id": userId, "article": forumid })
          //怎麼轉址的時候取回用戶id回到個人頁面?
        }).then(setShow(false))
        Swal.fire(
          '移除收藏成功!',
          '',
          'success'
        ).then(setFavorited(!favorited)
        )
          .catch(err => console.log(`沒有成功刪除，因為${err}`));

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
      } else {
        //未收藏
        fetch(`${process.env.REACT_APP_API_URL}/ArticleCollection/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "like": null,
            "userId": userId,
            "articleId": forumid
          })
        })
          .then(json => console.log(json))
        Swal.fire(
          '新增成功!',
          '',
          'success'
        ).then((data) => {
          console.log(data);
          if (data.ok) {
            setFavorited(!favorited)
            console.log(data, 'Add to Favorite')
          } else {
            alert('失敗')
          }
        }).then(setFavorited(!favorited))
        // .catch(err => console.log(`沒有成功新增，因為${err}`))
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
  }
  // ------
  // const add = async () => {
  //   const url = `${process.env.REACT_APP_API_URL}/ArticleCollection/add`
  //   const request = new Request(url, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       "articleId": forumid,
  //       "userId": userId,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json",
  //     },
  //   })
  //   const response = await fetch(request)
  //   const data = await response.json()
  //   if (data.success) {
  //     setFavorited(!favorited)
  //     console.log(data, 'Add to Favorite')
  //   } else {
  //     alert('失敗')
  //   }
  // }
  // add()
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
        confirmButtonText: '確定'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${process.env.REACT_APP_API_URL}/forum/${forumid}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({ "id": forumid })
            //怎麼轉址的時候取回用戶id回到個人頁面?
          }).then(setShow(false))
          Swal.fire(
            '刪除成功!',
            '',
            'success'
          ).then(goBack())
            .catch(err => console.log(`沒有成功刪除，因為${err}`));
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
          console.log(data);
        } else {
          setPreArticle(data[0])
          setNowArticle(data[1])
          setNextArticle({ title: '', created_time: '', content: '' })
        }
        console.log(` ${nextArticle.title}`)
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
          console.log(data);
        } else {
          setPreArticle(data[0])
          setNowArticle(data[1])
          setNextArticle({ title: '', created_time: '', content: '' })
        }

      })
  }

  // ======新增留言
  let body = {
    "comment": commentInput,
    "userid": userId,
    "article": forumid
  }

  function postComment(e) {
    e.preventDefault();
    let isPass = true; // 有沒有通過檢查
    setComment_msg(''); // 清空訊息

    //表單資料送出之前, 做格式檢查
    if (commentInput.length < 10) {
      isPass = false;
      setComment_msg('留言字數需10字以上，請重新輸入')
    }
    if (isPass) {
      fetch(`${process.env.REACT_APP_API_URL}/ArticleComment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(body)
      })
        // .then(alert('增新成功'))
        .then(r => r.json())
        .then(obj => {
          // console.log(obj.serverStatus);
          if ((obj.serverStatus) === 2) {
            let commentSuccsee = true
            if (commentSuccsee) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: '評論發表成功',
                showConfirmButton: false,
                timer: 1500
              })
              getNowArticle()
              setCommentInput('')
            }
          }
        })
        .catch(function (error) {
          alert('新增失敗，網站忙碌中，請再試一次');
        })
    }
  }

  return (
    <>
      <Header />
      <div className="backBtn displayN">
        <Link to="/forum">回討論區
          <FaAngleLeft />
        </Link>
      </div>
      <div className="container">
        <FadeIn className="row">
          <div className="col-lg-1 liquidLeft"></div>
          <div className="liquid col-lg-10 col-sm-12">
            <section className="frContent mb-5">
              <div className="articleHead d-flex align-items-start justify-content-between">
                <div className="d-flex align-items-center">
                  <Link to={`/forum/FrPersonalPage/${nowArticle.users_id}`}>
                    <img
                      className="avatar m-4"
                      src="https://picsum.photos/200"
                      alt="userpicture"
                    />
                  </Link>
                  <div>
                    <Link className="p txtGray" to={`/forum/FrPersonalPage/${nowArticle.users_id}`}>
                      {nowArticle.nickname}
                    </Link>
                    <div className="h4 ps-3 Regular">{nowArticle.title}</div>
                  </div>
                </div>
                <div className="like d-flex justify-content-center align-items-center">
                  <FaStar onClick={hnadleLike} className={`${(favorited) ? "likeIt" : ""} text-decoration-none fs-5 mx-2`} />
                  <Link to={`/forum/EditArticle/${nowArticle.article_id}`} className='text-decoration-none' ><FaEdit className="fs-5 mx-2" /></Link>
                  <FaTrashAlt onClick={hnadleDel} className="fs-5 mx-2" />
                </div>
              </div>
              <div className="articleBody py-5">
                <div dangerouslySetInnerHTML={{ __html: `${nowArticle.content}` }}></div>
              </div>
              <div className="articleFoot">
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="category pRegular">分類：{nowArticle.thema}</p>
                    <div className="d-flex align-items-center">

                      <a href="https://www.facebook.com/sharer.php?u=localhost:3000/forum/116&quote=藝化上的這篇文章好有趣，一起加入討論吧！" target="_blank">
                        <FaShareAltSquare />
                      </a>
                      <FaCommentDots />
                      <div className="px-2">{comments.length}</div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaAngleLeft />
                      <div onClick={next}><Link className='text-decoration-none' to={`/forum/${nextArticle.article_id}`}>{nextArticle.title}</Link></div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div onClick={pre}><Link className='text-decoration-none' to={`/forum/${preArticle.article_id}`}>{preArticle.title}</Link></div>
                      <FaAngleRight />
                    </div>
                  </div>
                </div>
              </div>
              {/* 新增回復 */}
              <section className="d-flex flex-column border my-5 p-4 newComment">
                <div className="d-flex align-items-center">
                  <img
                    className="avatar m-3"
                    src="https://picsum.photos/200"
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
                  <button onClick={postComment} className="btn btn-primary rounded-pill">
                    新增回覆
                  </button>
                </div>
              </section>
              <Comment comment={comments} />
            </section>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </>
  )
}

export default Article