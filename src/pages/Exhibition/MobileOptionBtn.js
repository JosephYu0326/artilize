import React from 'react'
import '../../styles/exhibition-list.scss'

function MobileOptionBtn() {
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <button
        className="btn btn-primary rounded-pill window-btn"
        onClick={closewindow}
      >
        確定
      </button>
      <button
        className="btn btn-outline-primary rounded-pill window-btn"
        onClick={closewindow}
      >
        取消
      </button>
    </div>
  )
}
function closewindow(e) {
  let thetarget = e.target.parentNode.parentNode.parentNode.parentNode
  thetarget.setAttribute('class', 'window-off')
}

export default MobileOptionBtn
