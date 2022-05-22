import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import exhibitionimg from './images/exhibition1.jpeg'
import Book from '../Exhibition/Book'

function Card() {
  const [isOpen, setIsOpen] = useState(false)
  const cards = ['1', '2', '3', '4', '5', '6']

  const imgurl = {
    backgroundImage: `url(${exhibitionimg})`,
  }
  function handleClick() {
    setIsOpen(!isOpen)
  }

  const card = cards.map((v, i) => {
    return (
      <div key={i}>
        <div className="col d-flex justify-content-center">
          <div className="exhibitioncard d-flex BoxShadow">
            <Link to="/exhibition/introduce" className="imgframe-link">
              <div style={imgurl} className="imgframe"></div>
            </Link>
            <div className="d-flex content">
              <div className="title mt-2">
                <Link to="/exhibition/introduce" className="selectlink">
                  <h5 className="titletext text-web pt-2">
                    《掘光而行│洪瑞麟的展覽-{i}
                  </h5>
                </Link>
                <Link to="/exhibition/introduce" className="selectlink">
                  <h6 className="pRegular titletext text-mobile my-2">
                    《掘光而行│洪瑞麟的展覽-{i}
                  </h6>
                </Link>
              </div>
              <div className="date-area-data">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    className="cardicon me-2"
                    icon={faMapMarkerAlt}
                  />
                  <div className="text-web">台北市立美術館</div>
                  <div className="text-mobile pSmall">台北市立美術館</div>
                </div>
                <div className="my-1 d-flex align-items-center">
                  <FontAwesomeIcon
                    className="cardicon me-2"
                    icon={faCalendarAlt}
                  />
                  <div className="text-web">
                    2022-03-19 <br /> 2022-07-31
                  </div>
                  <div className="text-mobile pSmall">
                    2022-03-19 <br /> 2022-07-31
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary book h5 text-web"
                onClick={handleClick}
              >
                訂票
              </button>
              <button
                type="button"
                className="btn btn-secondary book pRegular text-mobile"
                onClick={handleClick}
              >
                訂票
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <>
      <Book isOpen={isOpen} setIsOpen={setIsOpen} />

      {card}
    </>
  )
}

export default Card
