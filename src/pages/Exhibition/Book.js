import React from 'react'

function Book(props) {
  const isOpen = props.isOpen
  console.log(isOpen)
  return isOpen ? (
    <div className="book-window-frame">
      <div className="book-window">123</div>
    </div>
  ) : (
    ''
  )
}

export default Book
