import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Accordion(active) {
  const [state, setState] = useState(active)

  function expand() {
    setState(!state)
  }
  return (
    <>
      <Link to="#" className="selectlink" onClick={expand}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="h4 my-0">我是標題</div>

          <div className="option-expand position-relative d-flex justify-content-center align-items-center">
            <div className={state ? 'plusIcon1 expand' : 'plusIcon1'}></div>
            <div className={state ? 'plusIcon2 expand' : 'plusIcon2'}></div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Accordion
