import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function B2Bliste(props) {
  //   const { id, title, image, startime, endtime,createtime } = props
  //   const { image } = props
  const { id, title, image, startime, endtime, createtime, handleDelete } =
    props
  return (
    <>
      <div className="row d-flex align-items-center mb-5 border">
        <div className="col-md-2 style={{border:'1px solid'}}">123456789</div>
        <div className="col-md-3 col-sm-12">
          {' '}
          <img
            src={require(`${image}`)}
            className="imgListe"
            alt="exhibitionImg"
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <div>{title}</div>
          <div>開始時間:{startime}</div>
          <div>結束時間:{endtime}</div>
          <div>建立時間:{createtime}</div>
        </div>
        <div className="col-md-2 col-sm-12">XXX</div>
        <div className="col-md-2 col-sm-12">
          <button className="trash-btn">
            {/* <FontAwesomeIcon
              className="trash"
              icon={faTrashAlt}
              onClick={handleDelete}
            /> */}
          </button>
        </div>
      </div>
    </>
  )
}

export default B2Bliste
