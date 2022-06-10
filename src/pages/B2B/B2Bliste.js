import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function B2Bliste(props) {
  const { id, aName, pic1, pic2, start, end, time, handleDelete, handleRRR } =
    props
  return (
    <>
      <div className="row d-flex align-items-center mb-5 border">
        <div className="col-md-2 style={{border:'1px solid'}}"></div>
        <div className="col-md-3 col-sm-12">
          <img
            src={`http://localhost:5000/uploads/${pic1}`}
            className="imgListe"
            alt="exhibitionImg"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="text-truncate">{aName}</div>
          <div>開始時間:{start}</div>
          <div>結束時間:{end}</div>
          <div>建立時間:{time}</div>
        </div>
        <div className="col-md-2 col-sm-12">
          <button className="trash-btn" onClick={handleRRR}>
            編輯
          </button>
        </div>
        <div className="col-md-2 col-sm-12">
          <button className="trash-btn" onClick={handleDelete}>
            刪除
          </button>
          {/* <FontAwesomeIcon
              className="trash"
              icon={faTrashAlt}
              onClick={handleDelete}
            /> */}
        </div>
      </div>
    </>
  )
}

export default B2Bliste
