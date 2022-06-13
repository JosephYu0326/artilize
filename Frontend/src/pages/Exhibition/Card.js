import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import Book from '../Exhibition/Book'
import { Placeholder } from 'rsuite/esm/Placeholder/Placeholder'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

function Card(props) {
  const {
    searchData,
    lowPrice,
    highPrice,
    searchDate,
    searchGallery,
    searchCategory,
    searchLocation,
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [start, setStart] = useState([])
  const [end, setEnd] = useState([])
  const [ticketKind, setTicketKind] = useState('')
  const [ticketPrice, setTicketPrice] = useState('')
  const [ticketArray, setTicketArray] = useState([])
  const [museum, setMuseum] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const params = useParams()
  const [datas, setDatas] = useState([])
  const [datas1, setDatas1] = useState([])

  const MySwal = withReactContent(Swal)
  const history = useHistory()

  const intParams = parseInt(params.kid)

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/exhibition`)
    const results = await response.json()

    setDatas(results)
    setDatas1(results)
    if (searchData) setDatas1(searchData)
    if (searchDate) setDatas1(searchDate)
    if (searchGallery) {
      let temp = datas.filter((v, i) => v.mName.includes(searchGallery))
      setDatas1(temp)
    }

    if (searchCategory) {
      let temp = datas.filter((v, i) => v.kind.includes(searchCategory))
      setDatas1(temp)
    }

    if (searchLocation) {
      let temp = datas.filter((v, i) => v.city.includes(searchLocation))
      setDatas1(temp)
    }

    if (lowPrice || highPrice) {
      let temp = datas.filter((v, i) => {
        return PriceCompare(v.TicketPrice.split(','))
      })
      setDatas1(temp)
    }

    function PriceCompare(price) {
      price.sort(function (a, b) {
        return a - b
      })

      const temp = price.map((v, i) => {
        return price[i] >= lowPrice && price[i] <= highPrice
      })

      let output
      if (temp.includes(false)) {
        output = false
      } else {
        output = true
      }
      return output
    }
  }

  useEffect(() => {
    setIsLoading(true)
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highPrice])

  useEffect(() => {
    setIsLoading(true)
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lowPrice])
  useEffect(() => {
    setIsLoading(true)
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData])

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [searchDate])

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [searchGallery])

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [searchCategory])

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [searchLocation])

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }, [isLoading])

  let pagination = datas1.map((v, i) => {
    return (
      <div key={v.id} className="col d-flex justify-content-center">
        <div className="ph-item">
          <div className="ph-col-12">
            <div className="ph-picture"></div>
            <div className="ph-row">
              <div className="ph-col-12 big"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12 empty"></div>
              <div className="ph-col-4 "></div>
              <div className="ph-col-8 empty"></div>
              <div className="ph-col-6"></div>
              <div className="ph-col-6 empty"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-4"></div>
              <div className="ph-col-8 empty"></div>
              <div className="ph-col-6"></div>
              <div className="ph-col-6 empty"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-6"></div>
              <div className="ph-col-6 empty"></div>

              <div className="ph-col-12 empty"></div>
              <div className="ph-col-4 big empty"></div>
              <div className="ph-col-4 big"></div>
              <div className="ph-col-4 big empty"></div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  function handleClick(e) {
    const auth = JSON.parse(localStorage.getItem('auth'))
    if (auth !== true) {
      MySwal.fire({
        icon: 'warning',
        title: '您尚未登入，將跳轉至登入畫面',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      }).then(() => {
        history.push('/users/login')
      })
    } else {
      let index = parseInt(e.target.dataset.order)
      let totalLength = document.querySelectorAll('.imgframe').length

      let image = document.querySelectorAll('.imgframe')[totalLength - index]
      let date =
        document.querySelectorAll('.dateText')[totalLength - index].innerText

      let museum =
        document.querySelectorAll('.museumText')[totalLength - index].innerText

      setMuseum(museum)

      let Day = date.split('\n')
      setStart(Day[0])
      setEnd(Day[1])

      setImage(image.dataset.image)
      setTitle(e.target.dataset.title)

      setIsOpen(!isOpen)

      let temp = datas[totalLength - index].TicketName
      let Ticket = temp.split(',')
      setTicketKind(Ticket)

      let temp2 = datas[totalLength - index].TicketPrice
      let Price = temp2.split(',')
      setTicketPrice(Price)
    }
  }

  useEffect(() => {
    let array = []
    for (let i = 0; i < ticketKind.length; i++) {
      array.push(0)
    }
    setTicketArray(array)
  }, [ticketKind])

  let card = datas1.map((v, i) => {
    return (
      <div key={v.id}>
        <div className="col d-flex justify-content-center">
          <div className="exhibitioncard d-flex BoxShadow">
            <Link
              to={`/exhibition/introduce/${v.id}`}
              className="imgframe-link"
            >
              <div className="imgframe-out">
                <img
                  className="imgframe"
                  src={`${process.env.REACT_APP_API_URL}/stylesheets/images/${v.pic1}`}
                  data-image={v.pic1}
                  alt={v.pic1}
                />
              </div>
            </Link>
            <div className="d-flex content">
              <div className="title mt-2">
                <Link
                  to={`/exhibition/introduce/${v.id} `}
                  className="selectlink"
                >
                  <h5 className="titletext text-web pt-2">{v.aName}</h5>
                </Link>
                <Link
                  to={`/exhibition/introduce/${v.id} `}
                  className="selectlink"
                >
                  <h6 className="pRegular titletext text-mobile my-2">
                    {v.aName}
                  </h6>
                </Link>
              </div>
              <div className="date-area-data">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    className="cardicon me-2"
                    icon={faMapMarkerAlt}
                  />
                  <div className="text-web museumText">{v.mName}</div>
                  <div className="text-mobile pSmall museumText-2">
                    {v.mName}
                  </div>
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
                data-title={v.aName}
                data-order={v.id}
              >
                訂票
              </button>
              <button
                type="button"
                className="btn btn-secondary book pRegular text-mobile"
                onClick={handleClick}
                data-title={v.aName}
                data-order={v.id}
              >
                訂票
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  })
  if (
    searchData ||
    lowPrice ||
    highPrice ||
    searchDate ||
    searchGallery ||
    searchCategory ||
    searchLocation
  ) {
    if (datas1.length < 1) {
      pagination = <div className="notfound">查無資料！</div>
      card = <div className="notfound">查無資料！</div>
    }
  }

  return (
    <>
      <Book
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        image={image}
        start={start}
        end={end}
        ticketKind={ticketKind}
        ticketPrice={ticketPrice}
        ticketArray={ticketArray}
        museum={museum}
      />

      {isLoading ? pagination : card}
    </>
  )
}

export default Card
