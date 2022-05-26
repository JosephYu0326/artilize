//建立新活動資料
import React from 'react'
import { Link } from 'react-router-dom'

function B2Btotal(props) {
  return (
    <>
      <div className="row style = {{ border: '1px solid' }}">
        <div class="d-flex bd-highlight style = {{ border: '1px solid' }}">
          <div class="p-2 flex-grow-1 bd-highlight ">1 ~ 3 檔活動(共 3 檔)</div>
          <div class="p-2 bd-highlight">開始時間</div>
          <div class="p-2 bd-highlight">建立時間</div>
        </div>
        {/* <div className="col flex-grow-1 bd-highlight">1</div>
        <div className="col bd-highlight">2</div>
        <div className="col bd-highlight">3</div> */}
      </div>
    </>
  )
}

export default B2Btotal
