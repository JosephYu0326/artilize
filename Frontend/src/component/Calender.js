import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'

import '../styles/Calendar.scss'
import { doc } from 'prettier'

function Calendar(props) {
  const { setBuyTime, start, end } = props

  const now = new Date()
  const [myYear, setMyYear] = useState()
  const [myMonth, setMyMonth] = useState()
  const [dayLength, setDayLength] = useState(0)
  const [output, setOutput] = useState([])

  // 要得到今天的西元年使用Date物件的getFullYear()，要得到月份使用getMonth()(注意回傳為 0~11)
  const nowY = myYear ? myYear : now.getFullYear()

  // nowM =1-12
  const nowM = myMonth ? myMonth : now.getMonth() + 1 //注意回傳為 0~11

  useEffect(() => {
    setMyYear(nowY)
    setMyMonth(nowM)
  }, [])

  // 呈現標題
  const weekDayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  // 呈現月份
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // 本月有幾天
  // (上個月的最後一天是幾號)
  const days = new Date(myYear, myMonth, 0).getDate()

  // 創一個陣列，決定日期是否被選取
  const selectState = []
  const [temp1, setTemp1] = useState(selectState)

  for (let i = 0; i < days; i++) {
    selectState.push(0)
  }

  // 這個月的第一天是星期幾(0-6) (月份為0-11)
  const firstDay = new Date(myYear, myMonth - 1, 1).getDay()

  // 這個月的最後一天是星期幾
  const endDay = new Date(myYear, myMonth, 0).getDay()

  // 本月所有日期的陣列資料
  const daysDataArray = []

  // 補前面的空白資料
  for (let i = 0; i < firstDay; i++) {
    daysDataArray.push('')
  }

  // 加入本月所有的日期資料
  for (let i = 0; i < days; i++) {
    daysDataArray.push(i + 1)
  }

  // 補後面的空白資料

  for (let i = 0; i < 6 - endDay; i++) {
    daysDataArray.push('')
  }

  // 準備要呈現在網頁上
  const daysDisplayArray = _.chunk(daysDataArray, 7)

  function handleClick(e) {
    let selectedDay = parseInt(e.target.innerText)
    let setStyle = e.target.parentNode

    // 月份補零
    let newMymonth = myMonth.toString()
    if (newMymonth.length <= 1) {
      newMymonth = '0' + newMymonth
    }
    // 日期補零
    let newMyDay = selectedDay.toString()
    if (newMyDay.length <= 1) {
      newMyDay = '0' + newMyDay
    }

    if (temp1[selectedDay] === 1) {
      selectState[selectedDay] = 0
      setBuyTime('')
    } else {
      selectState[selectedDay] = 1
      setBuyTime(`${myYear.toString()}-${newMymonth}-${newMyDay}`)
    }
    setTemp1(selectState)

    if (selectState[selectedDay] === 1) {
      if (document.querySelector('.select')) {
        let select = document.querySelectorAll('.select')
        for (let i = 0; i < select.length; i++) {
          select[i].setAttribute('class', '')
        }
      }
      setStyle.setAttribute('class', 'select')
    } else {
      setStyle.setAttribute('class', '')
    }
  }

  if (myMonth <= 0) {
    setMyMonth(12)
  }

  function nextMonth() {
    let year = Math.floor((myMonth + 1) / 13)
    setMyMonth((myMonth % 12) + 1)
    setMyYear(nowY + year)

    // 清空前面選擇的
    let select = document.querySelectorAll('.select')
    for (let i = 0; i < select.length; i++) {
      select[i].setAttribute('class', '')
    }
  }
  function prevMonth() {
    let year = Math.floor((myMonth - 1) / 13)
    if (myMonth - 1 === 0) {
      year = year - 1
    }
    setMyMonth(myMonth - 1)
    setMyYear(nowY + year)

    // 清空前面選擇的
    let select = document.querySelectorAll('.select')
    for (let i = 0; i < select.length; i++) {
      select[i].setAttribute('class', '')
    }
  }

  return (
    <>
      <div className="calendar-frame">
        <div className="title-frame">
          <h4 className="title-date-text">
            {monthList[myMonth - 1] + ' ' + myYear}
          </h4>

          <div className="monthBtn">
            <div>
              <Link to="#" className="selectlink">
                <FiChevronLeft className="btn-size" onClick={prevMonth} />
              </Link>
            </div>
            <div>
              <Link to="#" className="selectlink">
                <FiChevronRight className="btn-size" onClick={nextMonth} />
              </Link>
            </div>
          </div>
        </div>

        <table className="calendar-content">
          <thead id="title">
            <tr>
              {weekDayList.map(function (v, i) {
                return <th key={i}>{v}</th>
              })}
            </tr>
          </thead>
          <tbody id="data">
            {daysDisplayArray.map((v, i) => {
              return (
                <tr key={i}>
                  {v.map((item, idx) => (
                    <td key={idx}>
                      <Link
                        to="#"
                        className="selectlink-canbuy"
                        onClick={handleClick}
                        data-day={item ? item : ''}
                      >
                        {item}
                      </Link>
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Calendar
