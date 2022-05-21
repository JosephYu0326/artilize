import React from "react";
import {
    FaReply,
    FaCommentDots,
  } from "react-icons/fa";
function Comment(props) {
  return (
    <>
      <div className="comment">
        <section className="d-flex flex-column my-5 p-4 ">
          <div className="d-flex align-items-center">
            <img
              className="avatar m-3"
              src="https://picsum.photos/id/555/200/"
              alt="userpicture"
            />
            <div>otherUser</div>
          </div>
          <div className="my-3">{"Awesome!"}</div>
          <div className="d-flex align-self-end  fs-5">
          <div className="px-3">
            <FaCommentDots />
          </div>
          <div>
            {/* <FaReply /> */}
          </div>
          </div>

          {/* reply */}
          {/* <hr className="replyHr MiddleGrey"/>
          <div className="d-flex align-items-center">
            <div className="h6">{'replyUser'}</div>
          </div>
          <div className="my-3">{"Awesome!"}</div> */}
          <hr />
        </section>
      </div>
    </>
  );
}

export default Comment;
