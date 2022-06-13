import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Map() {
  return (
    <>
      <div className="position-relative">
        <img
          src={require('./images/Rectangle 20.png')}
          alt="map"
          className="mapimg"
        />

        <div className="d-flex mapicon-frame position-absolute">
          <FontAwesomeIcon className="mapicon" icon={faMapMarkerAlt} />
        </div>
        <div className="d-flex mapsearch position-absolute">
          <Link
            className="maplink position-absolute"
            to="/exhibition/mapsearch"
          >
            地圖找展覽
          </Link>
        </div>
      </div>
    </>
  )
}

export default Map
