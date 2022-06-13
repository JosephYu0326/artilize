import React, { useState, useEffect } from 'react'
import { FaCommentDots } from 'react-icons/fa'
function CommentCount(props) {
  const [comment, setComment] = useState(0)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/forum/comments/${props.num}`)
      .then((res) => res.json())
      .then((data) => {
        setComment(data)
      })
  }, [])

  return (
    <>
      <FaCommentDots />
      <div className="px-2">{comment.length}</div>
    </>
  )
}

export default CommentCount
