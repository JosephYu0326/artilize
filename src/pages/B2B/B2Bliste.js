import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// `${process.env.REACT_APP_API_URL}/exhibition/${params.exhibitionId}`
// src={`${process.env.REACT_APP_API_URL}/stylesheets/images/${v.pic2}`}
function B2Bliste(props) {
  const { id, aName, pic1, pic2, start, end, time, handleDelete, handleRRR } =
    props
  return (
    <>
      <div className="row d-flex align-items-center mb-5 border bobo">
        <div className="col-md-2 style={{border:'1px solid'}}"></div>
        <div className="col-md-3 col-sm-12 my-3">
          <img
            // src={`http://localhost:5000/uploads/${pic1}`}
            // src={`${process.env.REACT_APP_API_URL}/stylesheets/images/${pic1}`}
            src={`http://localhost:5000/stylesheets/images/${pic1}`}
            className="imgListe rounded-3 "
            alt="exhibitionImg"
          />
        </div>
        <div className="col-md-3 col-sm-12 my-3">
          <div className="text-truncate ">活動名稱:{aName}</div>
          <div>開始時間:{start}</div>
          <div>結束時間:{end}</div>
          <div>建立時間:{time}</div>
        </div>
        <div className="col-md-2 col-sm-12 my-3 d-grid gap-2 mx-auto">
          <button className="trash-btn btn btn-primary ">
            <Link
              className="link-light text-decoration-none "
              to={`/b2b/edit/${handleRRR}`}
            >
              編輯
            </Link>
          </button>
        </div>
        <div className="col-md-2 col-sm-12 my-3 d-grid gap-2  mx-auto">
          <button className="trash-btn btn btn-danger " onClick={handleDelete}>
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
