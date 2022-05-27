//建立新活動資料
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../styles/AddAbility.scss'
import { FiSettings } from 'react-icons/fi'

function AddAbility(props) {
  const [exhibition, setExhibition] = useState({ username: '' })

  // select 縣市
  const [selectedValue, setSelectedValue] = useState('')
  const carOptions = ['volvo', 'saab', 'mercedes', 'audi']
  //詳細地址
  const [address, setAddress] = useState('')
  //活動內容介紹
  const [activities, setActivities] = useState('')
  //票券名稱
  const [ticketName, setTicketName] = useState('')
  //票券數量
  const [amount, setAmount] = useState('')
  //票券價格
  const [price, setPrice] = useState('')
  //票券說明
  const [ticketDescription, setTicketDescription] = useState('')
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   sendData()
  // }
  // async function sendData() {
  //   const myForm = document.getElementById('myForm')
  //   const formData = new FormData(myForm)
  //   const response = await fetch(`http://localhost:5000/users`, {
  //     method: 'POST',
  //     body: formData,
  //   })
  //   const results = await response.json()
  //   console.log(results)
  // }
  return (
    <>
      {/* onSubmit={handleSubmit} */}
      <div>建立新活動資料</div>
      <form id="myForm">
        <div className="container d-flex justify-content-center">
          <div className="row formwidth">
            <div className="col-12 ">
              <h3>開始建立活動資訊</h3>
              <h5>請創建一個活動展覽資訊</h5>
            </div>
            <div className="col-12">
              {' '}
              <div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  活動名稱
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="活動名稱"
                  name="abilityName"
                  value={exhibition}
                  onChange={(e) => {
                    setExhibition(e.target.value)
                  }}
                />
                <h6>請輸入活動名稱</h6>
              </div>
            </div>
            <div className="col-12">
              <section>
                <h3>活動時間</h3>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    開始時間
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="活動時間"
                  />
                  <h6>請輸入活動時間</h6>
                </div>
              </section>
            </div>
            <div className="col-12">
              {' '}
              <section>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    結束時間
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="活動時間"
                  />
                  <h6>請輸入活動時間</h6>
                </div>
              </section>
            </div>
            <h3>活動地點</h3>
            <div className="col-6">
              <section>
                {/* <label htmlFor="Place" className="form-label">
                  活動地點
                </label> */}
                {/* <select className="form-select" id="sel1" name="Place">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select> */}
                <select
                  className="form-select"
                  name="Place"
                  id="Place"
                  value={selectedValue}
                  onChange={(e) => {
                    setSelectedValue(e.target.value)
                  }}
                >
                  <option value="">請選擇縣市</option>
                  {carOptions.map((v, i) => {
                    return (
                      <option key={i} value={v}>
                        {/* 開頭轉為大寫英文 */}
                        {v.charAt(0).toUpperCase() + v.slice(1)}
                      </option>
                    )
                  })}
                </select>
                <h6>請選擇縣市</h6>
              </section>
            </div>
            <div className="col-6">
              <section>
                {/* <label htmlFor="Place" className="form-label"></label> */}
                {/* <select className="form-select" id="sel1" name="Place">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select> */}
                <select
                  className="form-select"
                  name="Place"
                  id="Place"
                  value={selectedValue}
                  onChange={(e) => {
                    setSelectedValue(e.target.value)
                  }}
                >
                  <option value="">請選擇鄉鎮市區</option>
                  {carOptions.map((v, i) => {
                    return (
                      <option key={i} value={v}>
                        {/* 開頭轉為大寫英文 */}
                        {v.charAt(0).toUpperCase() + v.slice(1)}
                      </option>
                    )
                  })}
                </select>
                <h6>請選擇鄉鎮市區</h6>
              </section>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  詳細地址（道路、街名、巷弄號、樓層）
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                  }}
                  placeholder="例如:中山北路二段106-2號6樓"
                />
                <h6>請輸入詳細活動地址</h6>
              </div>
            </div>
            <div className="col-12">
              {/* 活動內容介紹 */}
              <section className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  活動內容介紹
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  value={activities}
                  onChange={(e) => {
                    setActivities(e.target.value)
                  }}
                />
                <div className="row ">
                  <div className="col-6">
                    <h6>請輸入50個字以上</h6>
                  </div>
                  <div className="col-6 text-end">
                    <h6>顯示字數</h6>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-12">
              <h3>新增活動票券</h3>
            </div>
            <div className="col-md-5">
              <div className="mb-3">
                <label htmlFor="ticketName" className="form-label">
                  票券名稱
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ticketName"
                  placeholder="活動名稱"
                  value={ticketName}
                  onChange={(e) => {
                    setTicketName(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  票券數量
                </label>
                <input
                  type="value"
                  className="form-control"
                  id="amount"
                  placeholder="1000"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  票券價格
                </label>
                <input
                  type="value"
                  className="form-control"
                  id="price"
                  placeholder="1000"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value)
                  }}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <div className="col-12 pb-1">
                  <h6>操作</h6>
                </div>
                <div className="col-12 d-flex justify-content-around  py-2">
                  {/* <button>
                    <FiSettings />
                  </button>
                  <button>
                    <FiSettings />
                  </button>
                  <button>
                    <FiSettings />
                  </button> */}
                  <FiSettings />
                  <FiSettings />
                  <FiSettings />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="TicketDescription" className="form-label">
                  票券說明
                </label>
                <textarea
                  className="form-control"
                  id="TicketDescription"
                  rows="10"
                  value={ticketDescription}
                  onChange={(e) => {
                    setTicketDescription(e.target.value)
                  }}
                />
                <div className="row ">
                  <div className="col-6">
                    <h6>請輸入50個字以上</h6>
                  </div>
                  <div className="col-6 text-end">
                    <h6>顯示字數</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  開始時間
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="活動時間"
                />
                <h6>請輸入活動時間</h6>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  開始時間
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="活動時間"
                />
                <h6>請輸入活動時間</h6>
              </div>
            </div>
            <div className="col-12">
              <div className="d-grid gap-3">
                <button type="button" className="btn btn-primary my-2">
                  收合資訊
                </button>
              </div>
            </div>
            <div className="col-md-12 ">
              <div class="d-grid gap-2 d-md-flex justify-content-md-evenly">
                <button class="btn btn-primary me-md-2" type="button">
                  Button
                </button>
                <button class="btn btn-primary" type="button">
                  Button
                </button>
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <div className="d-grid gap-2 my-2 col-md-3">
                <button className="btn m btn-primary" type="submit">
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
    </>
  )
}

export default AddAbility
