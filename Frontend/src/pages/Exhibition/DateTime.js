import React from 'react'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DateTime(props) {
  const { setSearchDate, dateSubmit, setDateSubmit } = props
  const [datas, setDatas] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/exhibition`)
    const results = await response.json()
    setDatas(results)
  }
  // console.log(test)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (dateSubmit) {
      handleSubmit2()
      setDateSubmit(false)
    }
  }, [dateSubmit])

  function handleSubmit(e) {
    e.preventDefault()
    let temp = datas.filter((v, i) => {
      // 資料表中的日期轉換格式
      return DateCompare(v.start, v.end)
    })

    setSearchDate(temp)
  }
  function handleSubmit2() {
    let temp = datas.filter((v, i) => {
      // 資料表中的日期轉換格式
      return DateCompare(v.start, v.end)
    })
    setSearchDate(temp)
  }

  function DateCompare(start, end) {
    return (
      Date.parse(start) <= endDate.setHours(0, 0, 0) &&
      Date.parse(end) >= startDate.setHours(0, 0, 0)
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="h4 my-0">日期</div>
          <div>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
        </div>
        <div className="d-flex">
          <DatePicker
            className="dateinput"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          ~
          <DatePicker
            className="dateinput"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate}
          />
        </div>
        <button type="submit" className="assure-btn btn">
          確定
        </button>
      </form>
    </>
  )
}

export default DateTime
