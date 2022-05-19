import React from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DateTime() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  return (
    <>
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
    </>
  )
}

export default DateTime
