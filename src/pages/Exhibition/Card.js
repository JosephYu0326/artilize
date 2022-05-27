import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import Book from '../Exhibition/Book'

function Card() {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [start, setStart] = useState([])
  const [end, setEnd] = useState([])

  const params = useParams()
  const [datas, setDatas] = useState([])

  const intParams = parseInt(params.kid)

  const fetchData = async () => {
    var response
    if (intParams) {
      response = await fetch(
        `http://localhost:5050/exhibition/categories/${params.kid}`
      )
    } else {
      response = await fetch('http://localhost:5050/exhibition')
    }
    const results = await response.json()
    setDatas(results)
  }
  useEffect(() => {
    fetchData()
  }, [intParams])

  function handleClick(e) {
    let index = parseInt(e.target.dataset.order) - 1
    let image = document.querySelectorAll('.imgframe')[index]

    let date = document.querySelectorAll('.dateText')[index].innerText

    let Day = date.split('\n')
    setStart(Day[0])
    setEnd(Day[1])

    setImage(image.dataset.image)
    setTitle(e.target.dataset.title)
    setIsOpen(!isOpen)
  }

  const card = datas.map((v, i) => {
    return (
      <div key={v.exhibitionId}>
        <div className="col d-flex justify-content-center">
          <div className="exhibitioncard d-flex BoxShadow">
            <Link
              to={`/exhibition/introduce/${v.exhibitionId}`}
              className="imgframe-link"
            >
              <img
                className="imgframe"
                src={require(`./images/${v.image}`)}
                data-image={v.image}
                alt={v.image}
              />
            </Link>
            <div className="d-flex content">
              <div className="title mt-2">
                <Link
                  to={`/exhibition/introduce/${v.exhibitionId} `}
                  className="selectlink"
                >
                  <h5 className="titletext text-web pt-2">{v.name}</h5>
                </Link>
                <Link
                  to={`/exhibition/introduce/${v.exhibitionId} `}
                  className="selectlink"
                >
                  <h6 className="pRegular titletext text-mobile my-2">
                    {v.name}
                  </h6>
                </Link>
              </div>
              <div className="date-area-data">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    className="cardicon me-2"
                    icon={faMapMarkerAlt}
                  />
                  <div className="text-web">{v.place}</div>
                  <div className="text-mobile pSmall">{v.place}</div>
                </div>
                <div className="my-1 d-flex align-items-center">
                  <FontAwesomeIcon
                    className="cardicon me-2"
                    icon={faCalendarAlt}
                  />
                  <div className="text-web dateText">
                    {v.start.slice(0, 10)} <br /> {v.end.slice(0, 10)}
                  </div>
                  <div className="text-mobile pSmall dateText-2">
                    {v.start.slice(0, 10)} <br /> {v.end.slice(0, 10)}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-secondary book h5 text-web"
                onClick={handleClick}
                data-title={v.name}
                data-order={v.exhibitionId}
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
      <Book
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        image={image}
        start={start}
        end={end}
      />

      {card}
    </>
  )
}

export default Card
