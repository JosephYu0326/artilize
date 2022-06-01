import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { FaTrashAlt } from 'react-icons/fa'
import '../../styles/Forum.scss'
function Comment(props) {
  const [show, setShow] = useState(false)
  let comment = props.comment
  const getNowArticle = props.forum

  console.log(comment)
  const userID = 'linlin5400'
  const Reply = comment.map((v, i) => {
    //刪除留言
    function hnadleDel() {
      if (comment[i].username == userID) {
        setShow(true)
        if (show) {
          Swal.fire({
            title: `確定刪除「${comment[i].Blog_comment_content}」?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4153bb',
            cancelButtonColor: '#f4b942',
            confirmButtonText: '確定',
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`${process.env.REACT_APP_API_URL}/ArticleComment`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
                body: JSON.stringify({ id: comment[i].blog_comment_id }),
              })
                .then(
                  getNowArticle(),
                  setShow(false),
                  Swal.fire('刪除成功!', '', 'success')
                )
                .catch((err) => console.log(`沒有成功刪除，因為${err}`))
            }
          })
        }
      }
    }
    return (
      <>
        <section key={i} className="d-flex flex-column my-5 p-4 ">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-none">{comment[i].blog_comment_id}</div>
            <div className="frComment d-flex align-items-center justify-content-between">
              <img
                className="avatar m-3"
                src="https://picsum.photos/id/555/200/"
                alt="userpicture"
              />
              <div>{comment[i].nickname} </div>
              <div className="txtGray">{comment[i].username}</div>
            </div>
            <FaTrashAlt
              onClick={hnadleDel}
              className={`${
                comment[i].username == userID ? '' : 'd-none'
              } fs-5 mx-2`}
            />
          </div>
          <div className="my-3">{comment[i].Blog_comment_content}</div>
          <div className="align-self-end txtGray">
            {comment[i].COMMENT_time}
          </div>
          <hr />
        </section>
      </>
    )
  })

  return (
    <>
      <div className="comment">{Reply}</div>
    </>
  )
}

export default Comment
