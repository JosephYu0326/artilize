//廠商後臺
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/B2B.scss'
import { useState } from 'react'
//套件 datepicker
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

function B2B(props) {
  //活動名稱
  // const [exhibition, setExhibition] = useState('')
  // // select 縣市
  // const [selectedValue, setSelectedValue] = useState('')
  // const carOptions = ['volvo', 'saab', 'mercedes', 'audi']
  // //活動日期
  // //開始

  // const [startDate, setStartDate] = useState(new Date())

  // //結束
  // //詳細地址
  // const [address, setAddress] = useState('')
  // //活動內容介紹
  // const [activities, setActivities] = useState('')
  // //票券名稱
  // const [ticketName, setTicketName] = useState('')
  // //票券數量
  // const [amount, setAmount] = useState('')
  // //票券價格
  // const [price, setPrice] = useState('')
  // //票券說明
  // const [ticketDescription, setTicketDescription] = useState('')

  return (
    <>
      <div>廠商後臺</div>
      <Link to="/b2b/addability">建立新活動資料</Link>
      <main className="container "></main>
    </>
  )
}

export default B2B
