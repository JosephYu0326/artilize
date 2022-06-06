// //建立新活動資料
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import '../../styles/AddAbility.scss'
// import { FiSettings } from 'react-icons/fi'

// import Axios from 'axios'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// // import { zh-TW } from 'date-fns/esm/locale'
// import { registerLocale, setDefaultLocale } from 'react-datepicker'
// import { zhTW } from 'date-fns/locale'
// import { Form } from 'react-bootstrap'
// registerLocale('zhTW', zhTW)

// function AddAbility(props) {
//   //活動名稱
//   const [exhibition, setExhibition] = useState('')
//   //展覽圖片
//   const [fileData, setFileData] = useState()
//   // select 地區
//   const [selectedValue1, setSelectedValue1] = useState('')
//   const carOptions1 = ['volvo', 'saab', 'mercedes', 'audi']
//   // select 縣市
//   const [selectedValue, setSelectedValue] = useState('')
//   const carOptions = ['volvo', 'saab', 'mercedes', 'audi']
//   //展覽日期 開始
//   const [startDate, setStartDate] = useState(new Date())
//   //展覽日期 結束
//   const [endDate, setEndDate] = useState(new Date())
//   //詳細地址
//   const [address, setAddress] = useState('')
//   //活動內容介紹
//   const [activities, setActivities] = useState('')
//   //票券名稱
//   const [ticketName, setTicketName] = useState('')
//   //票券數量
//   const [amount, setAmount] = useState('')
//   //票券價格
//   const [price, setPrice] = useState('')
//   //票券說明
//   const [ticketDescription, setTicketDescription] = useState('')

//   const fileChangeHandler = (e) => {
//     // setFileData(e.target.files)
//     // setFileData(e.target.files[1])
//     setFileData(e.target.files[0])
//     // console.log('e.target.files', e.target.files)
//     if (e.target.files.length !== 0) {
//       setFileData(URL.createObjectURL(e.target.files[0]))
//     }
//     // setFileData(URL.createObjectURL(e.target.files[0]))
//     // setFileData(URL.createObjectURL(e.target.files))
//     console.log(
//       'URL.createObjectURL(e.target.files)',
//       URL.createObjectURL(e.target.files)
//     )

//     console.log('fileData', fileData)
//   }

//   // const onSubmitHandler = (e) => {
//   //   e.preventDefault()

//   //   const data = new FormData()
//   //   data.append('image', fileData)
//   //   // for (let i = 0; i < fileData.length; i++) {
//   //   //   data.append('image', fileData[i])
//   //   // }

//   //   fetch('http://localhost:5000/B2B/B2B/', {
//   //     method: 'POST',
//   //     body: data,
//   //   })
//   //     .then((result) => {
//   //       console.log('file sent successful')
//   //     })
//   //     .catch((err) => {
//   //       console.log('err.message', err.message)
//   //     })
//   // }
//   // const submitForm = () => {
//   //   Axios.post('http://localhost:5000/B2B/B2B/', {
//   //     exhibition: exhibition,
//   //     fileData: fileData,
//   //     selectedValue1: selectedValue1,
//   //     selectedValue: selectedValue,
//   //     startDate: startDate,
//   //     endDate: endDate,
//   //     address: address,
//   //     activities: activities,
//   //     ticketName: ticketName,
//   //     amount: amount,
//   //     price: price,
//   //     ticketDescription: ticketDescription,
//   //   }).then(() => {
//   //     alert('成功發送表單')
//   //   })
//   // }

//   const submitForm = (e) => {
//     fetch('http://localhost:5000/B2B/B2B/', {
//       method: 'POST',
//       body: new FormData(document.getElementById('myForm')),
//     })
//       .then((res) => res.text())
//       .then((text) => console.log('上傳成功...' + text))

//     e.preventDefault()
//   }

//   return (
//     <>
//       {/* onSubmit={handleSubmit} */}
//       <div>建立新活動資料</div>
//       <form
//         id="myForm"
//         // onSubmit={onSubmitHandler}
//         encType="multipart/form-data"
//       >
//         <div className="container d-flex justify-content-center">
//           <div className="row formwidth">
//             <div className="col-12 ">
//               <h3>開始建立活動資訊</h3>
//               <h5>請創建一個活動展覽資訊</h5>
//               <input
//                 type="file"
//                 onChange={fileChangeHandler}
//                 multiple
//                 name="img"
//                 accept="image/*"
//                 // style={{ display: 'none' }}
//               />
//             </div>

//             <div className="col-12">
//               <figure className="figure">
//                 <img className="imgwidth img-fluid" src={fileData} />
//               </figure>
//             </div>
//             {/* <div className="col-12">
//               <figure className="figure">
//                 <img className="imgwidth img-fluid" src={fileData} />
//               </figure>
//             </div> */}
//             <div className="col-12">
//               {' '}
//               <div>
//                 <label
//                   htmlFor="exampleFormControlInput1"
//                   className="form-label"
//                 >
//                   活動名稱
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="活動名稱"
//                   name="abilityName"
//                   value={exhibition}
//                   onChange={(e) => {
//                     setExhibition(e.target.value)
//                   }}
//                 />
//                 <h6>請輸入活動名稱</h6>
//               </div>
//             </div>
//             <div className="col-12">
//               <section>
//                 <h3>活動時間</h3>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="exampleFormControlInput1"
//                     className="form-label"
//                   >
//                     開始時間
//                   </label>
//                   {/* <input
//                     type="datetime-local"
//                     className="form-control"
//                     id="exampleFormControlInput1"
//                     placeholder="活動時間"
//                   /> */}
//                   <DatePicker
//                     locale="zhTW"
//                     className="col-12"
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     selectsStart
//                     startDate={startDate}
//                     endDate={endDate}
//                     peekNextMonth
//                     showMonthDropdown
//                     showYearDropdown
//                     dropdownMode="select"
//                   />
//                   <h6>請輸入活動時間</h6>
//                 </div>
//               </section>
//             </div>
//             <div className="col-12">
//               {' '}
//               <section>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="exampleFormControlInput1"
//                     className="form-label"
//                   >
//                     結束時間
//                   </label>
//                   {/* <input
//                     type="datetime-local"
//                     className="form-control"
//                     id="exampleFormControlInput1"
//                     placeholder="活動時間"
//                   /> */}
//                   <DatePicker
//                     locale="zhTW"
//                     className="col-12"
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     selectsEnd
//                     startDate={startDate}
//                     endDate={endDate}
//                     minDate={startDate}
//                     peekNextMonth
//                     showMonthDropdown
//                     showYearDropdown
//                     yearDropdownItemNumber={15}
//                     dropdownMode="select"
//                   />
//                   <h6>請輸入活動時間</h6>
//                 </div>
//               </section>
//             </div>
//             <h3>活動地點</h3>
//             <div className="col-6">
//               <section>
//                 <select
//                   className="form-select"
//                   name="Place"
//                   id="Place"
//                   value={selectedValue1}
//                   onChange={(e) => {
//                     setSelectedValue1(e.target.value)
//                   }}
//                 >
//                   <option value="">請選擇地區</option>
//                   {carOptions.map((v, i) => {
//                     return (
//                       <option key={i} value={v}>
//                         {/* 開頭轉為大寫英文 */}
//                         {v.charAt(0).toUpperCase() + v.slice(1)}
//                       </option>
//                     )
//                   })}
//                 </select>
//                 <h6>請選擇地區</h6>
//               </section>
//             </div>
//             <div className="col-6">
//               <section>
//                 <select
//                   className="form-select"
//                   name="Place"
//                   id="Place"
//                   value={selectedValue}
//                   onChange={(e) => {
//                     setSelectedValue(e.target.value)
//                   }}
//                 >
//                   <option value="">請選擇縣市</option>
//                   {carOptions.map((v, i) => {
//                     return (
//                       <option key={i} value={v}>
//                         {/* 開頭轉為大寫英文 */}
//                         {v.charAt(0).toUpperCase() + v.slice(1)}
//                       </option>
//                     )
//                   })}
//                 </select>
//                 <h6>請選擇鄉鎮市區</h6>
//               </section>
//             </div>
//             <div className="col-12">
//               <div className="mb-3">
//                 <label
//                   htmlFor="exampleFormControlInput1"
//                   className="form-label"
//                 >
//                   詳細地址（道路、街名、巷弄號、樓層）
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   value={address}
//                   onChange={(e) => {
//                     setAddress(e.target.value)
//                   }}
//                   placeholder="例如:中山北路二段106-2號6樓"
//                 />
//                 <h6>請輸入詳細活動地址</h6>
//               </div>
//             </div>
//             <div className="col-12">
//               {/* 活動內容介紹 */}
//               <section className="mb-3">
//                 <label
//                   htmlFor="exampleFormControlTextarea1"
//                   className="form-label"
//                 >
//                   活動內容介紹
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="exampleFormControlTextarea1"
//                   rows="10"
//                   value={activities}
//                   onChange={(e) => {
//                     setActivities(e.target.value)
//                   }}
//                 />
//                 <div className="row ">
//                   <div className="col-6">
//                     <h6>請輸入50個字以上</h6>
//                   </div>
//                   <div className="col-6 text-end">
//                     <h6>顯示字數</h6>
//                   </div>
//                 </div>
//               </section>
//             </div>
//             <div className="col-12">
//               <h3>新增活動票券</h3>
//             </div>
//             <div className="col-md-5">
//               <div className="mb-3">
//                 <label htmlFor="ticketName" className="form-label">
//                   票券名稱
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="ticketName"
//                   placeholder="活動名稱"
//                   value={ticketName}
//                   onChange={(e) => {
//                     setTicketName(e.target.value)
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="mb-3">
//                 <label htmlFor="amount" className="form-label">
//                   票券數量
//                 </label>
//                 <input
//                   type="value"
//                   className="form-control"
//                   id="amount"
//                   placeholder="1000"
//                   value={amount}
//                   onChange={(e) => {
//                     setAmount(e.target.value)
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="col-md-2">
//               <div className="mb-3">
//                 <label htmlFor="price" className="form-label">
//                   票券價格
//                 </label>
//                 <input
//                   type="value"
//                   className="form-control"
//                   id="price"
//                   placeholder="1000"
//                   value={price}
//                   onChange={(e) => {
//                     setPrice(e.target.value)
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="col-md-2">
//               <div>
//                 <div className="col-12 pb-1">
//                   <h6>操作</h6>
//                 </div>
//                 <div className="col-12 d-flex justify-content-around  py-2">
//                   {/* <button>
//                     <FiSettings />
//                   </button>
//                   <button>
//                     <FiSettings />
//                   </button>
//                   <button>
//                     <FiSettings />
//                   </button> */}
//                   <FiSettings />
//                   <FiSettings />
//                   <FiSettings />
//                 </div>
//               </div>
//             </div>
//             <div className="col-12">
//               <div className="mb-3">
//                 <label htmlFor="TicketDescription" className="form-label">
//                   票券說明
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="TicketDescription"
//                   rows="10"
//                   value={ticketDescription}
//                   onChange={(e) => {
//                     setTicketDescription(e.target.value)
//                   }}
//                 />
//                 <div className="row ">
//                   <div className="col-6">
//                     <h6>請輸入50個字以上</h6>
//                   </div>
//                   <div className="col-6 text-end">
//                     <h6>顯示字數</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="col-12">
//               <div className="mb-3">
//                 <label
//                   htmlFor="exampleFormControlInput1"
//                   className="form-label"
//                 >
//                   開始時間
//                 </label>
//                 <input
//                   type="datetime-local"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="活動時間"
//                 />
//                 <h6>請輸入活動時間</h6>
//               </div>
//             </div>
//             <div className="col-12">
//               <div className="mb-3">
//                 <label
//                   htmlFor="exampleFormControlInput1"
//                   className="form-label"
//                 >
//                   開始時間
//                 </label>
//                 <input
//                   type="datetime-local"
//                   className="form-control"
//                   id="exampleFormControlInput1"
//                   placeholder="活動時間"
//                 />
//                 <h6>請輸入活動時間</h6>
//               </div>
//             </div> */}
//             {/* <div className="col-12">
//               <div className="d-grid gap-3">
//                 <button type="button" className="btn btn-primary my-2">
//                   收合資訊
//                 </button>
//               </div>
//             </div> */}
//             {/* <div className="col-md-12 ">
//               <div class="d-grid gap-2 d-md-flex justify-content-md-evenly">
//                 <button class="btn btn-primary me-md-2" type="button">
//                   Button
//                 </button>
//                 <button class="btn btn-primary" type="button">
//                   Button
//                 </button>
//               </div>
//             </div> */}
//             <div className="col-md-12 d-flex justify-content-center">
//               <div className="d-grid gap-2 my-2 col-md-3">
//                 <button
//                   className="btn m btn-primary"
//                   type="submit"
//                   value="送出"
//                   onClick={submitForm}
//                   // onClick={""}
//                 >
//                   確認
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//       <br />
//     </>
//   )
// }

// export default AddAbility
