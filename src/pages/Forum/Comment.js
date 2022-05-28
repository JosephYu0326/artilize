import React from "react";
import '../../styles/Forum.scss'
function Comment(props) {

  const comment = props.comment
  // console.log(comment)

  const Reply = comment.map((v, i) => {
    return (
      <>
        <section key={i} className="d-flex flex-column my-5 p-4 ">
          <div className="d-flex align-items-center">
            <img
              className="avatar m-3"
              src="https://picsum.photos/id/555/200/"
              alt="userpicture"
            />
            <div>{comment[i].nickname}</div>
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
