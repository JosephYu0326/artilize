import React, { useState } from 'react'
import Calendar from '../../component/Calendar'

function Book(props) {
  const isOpen = props.isOpen
  const setIsOpen = props.setIsOpen

  function closeWindow() {
    let window = document.querySelector('.book-window-frame')
    window.style.display = 'none'
    setIsOpen(false)
  }

  return isOpen ? (
    <div className="book-window-frame">
      <div className="book-window">
        <Calendar />
        <button className="btn btn-primary mt-3" onClick={closeWindow}>
          關閉
        </button>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Book
