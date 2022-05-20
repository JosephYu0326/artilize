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
  const [exhibition, setExhibition] = useState('')
  // select 縣市
  const [selectedValue, setSelectedValue] = useState('')
  const carOptions = ['volvo', 'saab', 'mercedes', 'audi']
  //活動日期
  //開始

  const [startDate, setStartDate] = useState(new Date())

  //結束
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

  return (
    <>
      <div>廠商後臺</div>
      <Link to="/b2b/addability">建立新活動資料</Link>
      <main className="container ">
        <div className="row d-flex justify-content-center ">
          {/*onSubmit=handleSubmit*/}
          <form className="col-6 b2bForm ">
            <h1>開始建立活動資訊</h1>
            <h6>請創建一個活動展覽資訊</h6>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            {/* <figure className="figure d-flex justify-content-center ">
              <img
                src="../images/logo.svg"
                className="figure-img img-  rounded"
                alt="..."
              />
            </figure> */}

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                活動名稱
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="活動名稱"
                name=""
                value={exhibition}
                onChange={(e) => {
                  setExhibition(e.target.value)
                }}
              />
            </div>

            <div>請輸入活動名稱</div>
            <h3>活動時間</h3>
            <section>
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
              </div>
              <h6>請輸入活動時間</h6>
            </section>

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
              </div>
              <h6>請輸入活動時間</h6>
            </section>

            <section>
              <label htmlFor="Place" className="form-label">
                活動地點
              </label>
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
                <option value="">請選擇</option>
                {carOptions.map((v, i) => {
                  return (
                    <option key={i} value={v}>
                      {/* 開頭轉為大寫英文 */}
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </option>
                  )
                })}
              </select>
            </section>

            <h6>請選擇縣市</h6>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                詳細地址（鄉鎮市區、道路、街名、巷弄號、樓層）
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                placeholder="例如:中山區中山北路二段106-2號6樓"
              />
            </div>
            <h6>請輸入詳細活動地址</h6>
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
            </section>

            <section>
              <div className="row justify-content-center">
                <h5>新增活動票券</h5>
                <div className="col-3 ">
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
                <div className="col-3 ">
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
                <div className="col-3 ">
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

                <div className="col-3 ">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      操作
                    </label>
                    <input
                      type="value"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="1000"
                    />
                  </div>
                </div>
              </div>
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
              </div>
            </section>

            <section>
              <section>
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
                </div>
                <h6>請輸入活動時間</h6>
              </section>

              <section>
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
                </div>
                <h6>請輸入活動時間</h6>
              </section>
            </section>

            <section>
              <div>
                <div className="d-grid gap-3">
                  <button type="button" className="btn btn-primary my-2">
                    收合資訊
                  </button>
                </div>
              </div>

              <div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  <button
                    className="btn btn-primary me-md-5 my-2"
                    type="button"
                  >
                    +免費票
                  </button>
                  <button className="btn btn-primary my-2" type="button">
                    {/* <i className="bi bi-plus-lg"></i> */}
                    +付費票
                  </button>
                </div>
              </div>

              <div>
                {/* sumbit */}
                <div className="d-grid gap-2 col-6 mx-auto my-2">
                  <button className="btn m btn-primary" type="submit">
                    確認
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </main>
    </>
  )
}

export default B2B
