import { doc } from 'prettier'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from '../../component/Calendar'
import closePng from '../Exhibition/images/Category.png'

function Book(props) {
  const [Ticket, setTicket] = useState([0, 0])
  const TicketPriceArray = [30, 50]
  const [TicketPrice, setTicketPrice] = useState()
  const TicketCategory = ['全票', '優待票']
  const [TicketKind, setTicketKind] = useState('')
  const [count, setCount] = useState(1)
  const [total, setTotal] = useState('')

  const isOpen = props.isOpen
  const setIsOpen = props.setIsOpen
  const title = props.title

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
    setTicket([0, 0])
    setCount(1)
    setTicketPrice('')
    setIsOpen(false)
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
  }

  return isOpen ? (
    <div className="book-window-frame">
      <div className="book-window">
        <div className="book-set">
          <div className="book-title">
            <h3>請選擇日期、票種</h3>
            <div className="title-frame">
              <div>{title}</div>
            </div>
          </div>
          <div className="d-flex">
            <Calendar />
            <div className="information">
              <div className="ticket-frame">
                <button className="btn ticket" onClick={selectTicket}>
                  {TicketCategory[0]}
                </button>
                <button className="btn ticket" onClick={selectTicket}>
                  {TicketCategory[1]}
                </button>
              </div>
              <div className="count mt-3 mb-4">
                <div>{Ticket[0] || Ticket[1] ? TicketKind : '票種'}</div>
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
              <button className="btn btn-primary rounded-pill">立即訂購</button>
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
