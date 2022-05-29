import React, { Children, useState } from "react";
import Swal from 'sweetalert2'
import {
  FaTrashAlt
} from 'react-icons/fa'
import '../../styles/Forum.scss'
function Comment(props) {
  const [show, setShow] = useState(false)
  let comment = props.comment
  console.log(comment);




  // const getNowComment = async () => {
  //   const res = await fetch(`${process.env.REACT_APP_API_URL}/forum/comments/${forumid}`)
  //   const data = await res.json()
  //   setComments(data)
  // }

  //刪除留言
  function hnadleDel(e) {
    e.preventDefault()
    const id = document.querySelector('.frComment').previousSibling.innerHTML
    const commentContent = document.querySelector('.frComment').parentNode.nextSibling.innerHTML
    const commentUser = document.querySelector('.frComment').lastChild.innerHTML
    //使用者id與留言id一致
    const userID = "linlin5400"
    if (commentUser == userID) {
      setShow(true)
      if (show) {
        Swal.fire({
          title: `確定刪除「${commentContent}」?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#4153bb',
          cancelButtonColor: '#f4b942',
          confirmButtonText: '確定'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`${process.env.REACT_APP_API_URL}/ArticleComment`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
              },
              body: JSON.stringify({ "id": id })
              //怎麼轉址的時候取回用戶id回到個人頁面?
            }).then(setShow(false),
              comment = props.comment
              //setComment(props.comment)
            )
            Swal.fire(
              '刪除成功!',
              '',
              'success'
            )
              .catch(err => console.log(`沒有成功刪除，因為${err}`));

          }
        })
      }
    }
  }

  // console.log(comment[1].blog_comment_id)

  const Reply = comment.map((v, i) => {
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
            <FaTrashAlt onClick={hnadleDel} className="fs-5 mx-2" />
          </div>
          <div className="my-3">{comment[i].Blog_comment_content}</div>
          <div className="align-self-end txtGray">{comment[i].COMMENT_time}</div>
          <hr />
        </section>
      </>
    )
  })



  return (
    <>
      <div className="comment">
        {Reply}
      </div>
    </>
  );
}

export default Comment;
