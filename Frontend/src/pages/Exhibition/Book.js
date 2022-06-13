import { doc } from 'prettier'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../../component/Calender'
import closePng from '../Exhibition/images/Category.png'

let storage = localStorage

function Book(props) {
  const [TicketPrice, setTicketPrice] = useState()
  const [TicketKind, setTicketKind] = useState('')
  const [ticketText, setTicketText] = useState('票種')
  const [count, setCount] = useState(1)
  const [buyTime, setBuyTime] = useState([])

  const isOpen = props.isOpen
  const setIsOpen = props.setIsOpen
  const title = props.title
  const image = props.image
  const start = props.start
  const end = props.end
  const TicketCategory = props.ticketKind
  const TicketPriceArray = props.ticketPrice
  const TicketArray = props.ticketArray
  const museum = props.museum
  const [Ticket, setTicket] = useState(TicketArray)

  useEffect(() => {
    setTicket(TicketArray)
  }, [TicketArray])

  useEffect(() => {
    if (TicketKind) {
      setTicketText(TicketKind)
    }
  }, [TicketKind])

  function numPlus() {
    setCount(count + 1)
  }
  function numMinus() {
    if (count <= 1) {
      setCount(1)
    } else {
      setCount(count - 1)
    }
  }

  function closeWindow() {
    let window = document.querySelector('.book-window-frame')
    window.style.display = 'none'
    let buyWhichTicket = []

    for (let i = 0; i < TicketCategory.length; i++) {
      buyWhichTicket.push(0)
    }
    setTicket(buyWhichTicket)
    setCount(1)
    setTicketPrice('')
    setTicketText('票種')
    setIsOpen(false)
    setBuyTime([])
  }
  function selectTicket(e) {
    let thetarget = e.target
    let thetargetParent = e.target.parentNode

    // 找第幾個
    var index
    for (let i = 0; i < Ticket.length; i++) {
      if (thetarget === thetargetParent.childNodes[i]) {
        index = i
        break
      }
    }

    // 設定樣式
    if (Ticket[index]) {
      Ticket[index] = 0
      thetarget.setAttribute('class', 'ticket')
      setTicketPrice('')
      // 設定票種類
    } else {
      Ticket[index] = 1
      thetarget.setAttribute('class', 'ticket selected')
      setTicketPrice(TicketPriceArray[index])
    }

    setTicketKind(TicketCategory[index])

    // 重設其餘選項的樣式
    let other = document.querySelectorAll('.ticket')
    for (let i = 0; i < Ticket.length; i++) {
      if (i === index) {
        continue
      }
      Ticket[i] = 0
      other[i].setAttribute('class', 'ticket')
    }
    setCount(1)

    for (let i = 0; i < Ticket.length; i++) {
      if (Ticket[i]) {
        setTicketText(TicketKind)
        break
      } else {
        setTicketText('票種')
      }
    }
  }

  function buyTicket() {
    let startDay = new Date(start)
    let endDay = new Date(end)
    let buyTimeDay = new Date(buyTime)

    if (TicketKind === '') {
      alert('請選擇票種')
    } else if (startDay > buyTimeDay || buyTimeDay > endDay) {
      alert(`請選擇${start}~${end}`)
    } else {
      if (storage['addItemList'] == null) {
        storage['addItemList'] = []
      }
      storage['addItemList'] += `${title},`

      let titleArray = storage['addItemList'].split(',')

      let userId = parseInt(storage.getItem('userId'))

      titleArray.pop()
      storage['totalNum'] = titleArray.length
      let index = parseInt(storage.getItem('totalNum')) - 1
      let storageJson = {
        index: index,
        title: titleArray[index],
        start: start,
        end: end,
        buyTime: buyTime,
        image: image,
        count: count,
        TicketPrice: TicketPrice,
        TicketKind: TicketKind,
        museum: museum,
        userID: userId,
      }

      storage.setItem(title, JSON.stringify(storageJson))
    }

    let buyWhichTicket = []

    for (let i = 0; i < TicketCategory.length; i++) {
      buyWhichTicket.push(0)
    }

    setIsOpen(false)
    setCount(1)
    setTicket(buyWhichTicket)
    setTicketPrice('')
    setTicketKind('')
    setTicketText('票種')
  }
  if (TicketCategory) {
    var ticketFrame = TicketCategory.map((v, i) => {
      return (
        <button key={i} className="btn ticket" onClick={selectTicket}>
          {TicketCategory[i]}
        </button>
      )
    })
  }

  return isOpen ? (
    <div className="book-window-frame">
      <div className="book-window">
        <div className="book-set">
          <div className="book-title">
            <h3>請選擇日期、票種</h3>
            <div className="title-frame">
              <div className="museumText">{museum}</div>
              <div className="title-text">{title}</div>
            </div>
          </div>
          <div>
            {start}~{end}
          </div>
          <div className="date-content-frame d-flex align-items-center">
            <Calendar setBuyTime={setBuyTime} start={start} end={end} />

            <div className="information">
              <div className="ticket-frame">{ticketFrame}</div>
              <div className="count mt-3 mb-4">
                <div>{ticketText}</div>
                <div>TWD {TicketPrice}/張</div>
              </div>
              <div className="btn-frame my-3">
                <button className="btn" onClick={numPlus}>
                  +
                </button>
                <div className="num">{count}</div>
                <button className="btn" onClick={numMinus}>
                  -
                </button>
              </div>
              <div className="line"></div>
              <div className="count my-3">
                <div>總金額</div>
                <div>TWD {TicketPrice ? count * TicketPrice : 0}元</div>
              </div>
              <button
                className="btn btn-primary rounded-pill"
                onClick={buyTicket}
              >
                立即訂購
              </button>
            </div>
          </div>
        </div>

        <Link to="#">
          <img
            className="closeBtn"
            src={closePng}
            alt="closeBtn"
            onClick={closeWindow}
          />
        </Link>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Book
