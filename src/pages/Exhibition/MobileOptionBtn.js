import React from 'react'
import { subDays } from 'rsuite/esm/utils/dateUtils'
import '../../styles/exhibition-list.scss'

function MobileOptionBtn(props) {
  const { whichButton, setPriceSubmit, setDateSubmit } = props

  function submit() {
    if (whichButton[0] === 1) {
      setPriceSubmit(true)
    }
    if (whichButton[1] === 1) {
      setDateSubmit(true)
    }

    let close = document.querySelector('.window-on')
    close.setAttribute('class', 'window-off')
  }

  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <button
        className="btn btn-primary rounded-pill window-btn"
        onClick={submit}
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
