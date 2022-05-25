import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
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
  const [perArticle, setPerArticle] = useState([])
  const [preArticle, setPreArticle] = useState([])
  const [nextArticle, setNextArticle] = useState([])
  const { forumid } = useParams()
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/forum`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArticleList(data)
  //     })
  // }, [])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/${forumid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 3) {
          setPreArticle(data[0])
          setPerArticle(data[1])
          setNextArticle(data[2])
          console.log(perArticle);
        } else {
          setPreArticle(data[0])
          setPerArticle(data[1])
          setNextArticle({ title: '', created_time: '', content: '' })
        }
      }
      )
  }, [])

  function hnadleEdit() {
    console.log('123');

  }

  // var yes = confirm('你確定嗎？');

  // if (yes) {
  //     alert('你按了確定按鈕');
  // } else {
  //     alert('你按了取消按鈕');
  // }

  // ======文章刪除
  function hnadleDel() {

    fetch(`${process.env.REACT_APP_API_URL}/forum/${forumid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ "id": forumid })
    }).then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(`沒有成功刪除，因為${err}`));
  }



  function next() {
    fetch(`${process.env.REACT_APP_API_URL}/forum/${nextArticle.article_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 3) {
          setPreArticle(data[0])
          setPerArticle(data[1])
          setNextArticle(data[2])
          console.log(data);
        } else {
          setPreArticle(data[0])
          setPerArticle(data[1])
          setNextArticle({ title: '', created_time: '', content: '' })
        }
        console.log(nextArticle.title)
      })
  }

  function pre() {
    fetch(`${process.env.REACT_APP_API_URL}/forum/${preArticle.article_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length == 3) {
          setPreArticle(data[0])
          setPerArticle(data[1])
          setNextArticle(data[2])
          console.log(data);
        } else {
          setPreArticle(data[0])
          setPerArticle(data[1])
          setNextArticle({ title: '', created_time: '', content: '' })
        }
        console.log(preArticle.title)
      })
  }




  return (
    <>
      <Header />
      <div className="backBtn displayN" onClick={goBack}>
        回前一頁
        <FaAngleLeft />
      </div>
      <div className="container">
        <FadeIn className="row">
          <div className="col-lg-1 liquidLeft"></div>
          <div className="liquid col-lg-10 col-sm-12">
            <section className="frContent mb-5">
              <div className="articleHead d-flex align-items-start justify-content-between">
                <div className="d-flex align-items-center">
                  <Link to={`/forum/FrPersonalPage/${perArticle.users_id}`}>
                    <img
                      className="avatar m-4"
                      src="https://picsum.photos/200"
                      alt="userpicture"
                    />
                  </Link>
                  <div>
                    <Link className="p txtGray" to={`/forum/FrPersonalPage/${perArticle.users_id}`}>
                      {perArticle.nickname}
                    </Link>
                    <div className="h4 ps-3 Regular">{perArticle.title}</div>
                  </div>
                </div>
                <div className="like d-flex justify-content-center align-items-center">
                  <FaStar className="fs-5 mx-2" />
                  <FaEdit onClick={hnadleEdit} className="fs-5 mx-2" />
                  <FaTrashAlt onClick={hnadleDel} className="fs-5 mx-2" />
                </div>
              </div>
              <div className="articleBody py-5">
                <pre>{perArticle.content}</pre>
              </div>
              <div className="articleFoot">
                <div>
                  <div className="d-flex justify-content-between">
                    <p className="category pSmall">分類：{perArticle.thema}</p>
                    <div className="d-flex align-items-center">
                      <FaCommentDots />
                      <div className="px-2">25</div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <FaAngleLeft />
                      <div onClick={next}>{nextArticle.title}</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div onClick={pre}>{preArticle.title}</div>
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
                  className="my-3 form-control"
                ></textarea>
                <div className="align-self-end">
                  <button className="btn btn-primary rounded-pill">
                    新增回覆
                  </button>
                </div>
              </section>

              <Comment />
            </section>
          </div>
        </FadeIn>
      </div>
      <Footer />
    </>
  )
}

export default Article