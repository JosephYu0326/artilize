//建立新活動資料
import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../styles/AddAbility.scss'
import { FiSettings } from 'react-icons/fi'
//DatePicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { zh-TW } from 'date-fns/esm/locale'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import { zhTW } from 'date-fns/locale'
//sweetalert2
import Swal from 'sweetalert2'
//react Boostrap
import { Form, Col, Button, Feedback } from 'react-bootstrap'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

registerLocale('zhTW', zhTW)

function AddAbility(props) {
  const history = useHistory()
  const [data, setDate] = useState(null)

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/B2B/B2B/')
    const results = await response.json()
    console.log(results)
    setDate(results)
  }
  console.log(data)
  useEffect(() => {
    fetchData()
  }, [])

  //活動名稱
  // aName setAname
  const [aName, setAname] = useState('')
  //展覽圖片
  const [fileData, setFileData] = useState([])
  // select 地區
  //direction setDirection
  const [direction, setDirection] = useState('')
  const direction1 = ['北部', '中部', '南部', '東部', '離島']

  // select 縣市
  // city setCity
  const [city, setCity] = useState('')
  const city1 = [
    '基隆市',
    '台北市',
    '新北市	',
    '桃園縣',
    '新竹市',
    '新竹縣',
    '苗栗縣',
    '台中市',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義市',
    '嘉義縣',
    '台南市',
    '高雄市',
    '屏東縣',
    '台東縣',
    '花蓮縣',
    '宜蘭縣',
    '澎湖縣',
    '金門縣',
    '連江縣',
  ]
  //展覽活動類型
  const [kind, setKind] = useState('')
  const kind1 = [
    '古典美術',
    '現代美術',
    '歷史',
    '科技',
    '其他',
    '課程',
    '派對',
    '聚會',
    '市集',
    '比賽',
    '表演',
    '研討會',
    '分享會',
    '見面會',
    '宣傳活動',
    '導覽',
    '體驗',
  ]
  //館方
  const [museum, setMuseum] = useState('')
  const museum1 = [
    '台北美術館',
    '故宮博物院',
    '高雄美術館',
    '台南美術館 ',
    '奇美博物館',
    '蘭陽博物館',
    '台北當代美術館',
    '嘉義美術館',
    '北師美術館',
    '台中美術館',
  ]
  //展覽日期 開始
  const [start, setStart] = useState(new Date())
  //展覽日期 結束
  const [end, setEnd] = useState(new Date())
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

  const fileChangeHandler = (e) => {
    console.log(e.target.files[0])
    console.log(e.target.files.length)
    if (e.target.files.length > 0) {
      let fileNames = []
      for (let a = 0, max = e.target.files.length; a < max; a++) {
        fileNames.push(URL.createObjectURL(e.target.files[a]))
      }
      setFileData(fileNames)
    }
    // setFileData(e.target.files)
    // setFileData(e.target.files[1])
    //setFileData(e.target.files[0])
    // console.log('e.target.files', e.target.files)
    // if (e.target.files.length !== 0) {
    //   setFileData(URL.createObjectURL(e.target.files[0]))
    // }
    // setFileData(URL.createObjectURL(e.target.files[0]))
    // setFileData(URL.createObjectURL(e.target.files))
    // console.log(
    //   'URL.createObjectURL(e.target.files)',
    //   URL.createObjectURL(e.target.files)
    // )

    // console.log('fileData', fileData)
  }

  // const onSubmitHandler = (e) => {
  //   e.preventDefault()

  //   const data = new FormData()
  //   data.append('image', fileData)
  //   // for (let i = 0; i < fileData.length; i++) {
  //   //   data.append('image', fileData[i])
  //   // }

  //   fetch('http://localhost:5000/B2B/B2B/', {
  //     method: 'POST',
  //     body: data,
  //   })
  //     .then((result) => {
  //       console.log('file sent successful')
  //     })
  //     .catch((err) => {
  //       console.log('err.message', err.message)
  //     })
  // }
  const [validated, setValidated] = useState(false)

  //網址id
  const params = useParams()
  const id = params.id

  const submitForm = (e) => {
    console.log('submitForm')
    e.preventDefault()

    const form = e.currentTarget

    if (form.checkValidity() === false) {
      console.log('form.checkValidity false')
      e.preventDefault()
      e.stopPropagation()
      Swal.fire({
        icon: 'error',
        title: '請輸入表格',
        text: '錯誤',
      })
      return
    }

    document.getElementById('myForm').validated = true

    if (fileData.length > 0) {
      fetch('http://localhost:5000/B2B/B2B/' + id, {
        method: 'put',
        body: new FormData(document.getElementById('myForm')),
      })
        .then((res) => res.text())
        .then((text) => console.log('上傳成功...' + text))
      // Swal.fire('成功', '成功建立上傳活動', 'success')
      Swal.fire({
        title: '確定是否要上傳活動',
        // text: "You won't be able to revert this!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push('/b2b')
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '請選擇圖檔',
        text: '請選兩張圖片上傳',
      })
    }
  }
  //boostrap 表單驗證
  //const [validated, setValidated] = useState(false)

  // const handleSubmit = (event) => {
  //   console.log('handleSubmit')
  //   const form = event.currentTarget
  //   if (form.checkValidity() === false) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }

  //   document.getElementById('myForm').validated = true
  //   // setValidated(true)
  // }

  return (
    <>
      <Header />
      <Form
        id="myForm"
        // onSubmit={onSubmitHandler}
        encType="multipart/form-data"
        //boostrap 表單驗證
        noValidate
        validated="false"
        onSubmit={submitForm}
      >
        <div className="container d-flex justify-content-center">
          <div className="row formwidth">
            <div className="col-12 ">
              <h3>編輯活動資料</h3>
              <h5>請編輯該活動展覽資訊</h5>
              <label htmlFor="upload_img">
                <input
                  type="file"
                  multiple
                  onChange={fileChangeHandler}
                  name="img"
                  id="upload_img"
                  accept="image/*"
                  style={{ display: 'none' }}
                />

                <i className="fa fa-photo btn btn-primary ">上傳圖片</i>
              </label>
              {/* <Stack direction="row" alignItems="center" spacing={10}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={fileChangeHandler}
                    name="img"
                    id="select-image"
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </Stack> */}
              {/* {fileData && data && (
                <div>
                  <div>Image Preview:</div>
                  <img src={fileData} alt={data.name} height="100px" />
                </div>
              )} */}
            </div>

            <div className="col-12">
              <figure className="figure">
                {}
                {/* <img className="imgwidth img-fluid" src={fileData} /> */}
                {fileData.map((v, i) => {
                  //console.log(v)
                  return <img className="imgwidth img-fluid" src={v} />
                })}
              </figure>
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
                <Form.Control
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="活動名稱"
                  name="aName"
                  value="李義弘：回顧展"
                  onChange={(e) => {
                    setAname(e.target.value)
                  }}
                  //required
                  minLength="2"
                  required
                  autoFocus
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入正確的姓名</h6>
                </Form.Control.Feedback>
                {/* <h6>請輸入活動名稱</h6> */}
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
                  {/* <input
                    type="datetime-local"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="活動時間"
                  /> */}
                  <DatePicker
                    dateFormat="yyyy-MM-dd"
                    locale="zhTW"
                    className="col-12"
                    selected={new Date()}
                    onChange={(date) => setStart(date)}
                    selectsStart
                    startDate={start}
                    endDate={end}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    name="start"
                  />
                  {/* <h6>請輸入活動時間</h6> */}
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
                  {/* <input
                    type="datetime-local"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="活動時間"
                  /> */}
                  <DatePicker
                    dateFormat="yyyy-MM-dd"
                    locale="zhTW"
                    className="col-12"
                    selected={new Date(2022, 8, 8)}
                    onChange={(date) => setEnd(date)}
                    selectsEnd
                    startDate={start}
                    endDate={end}
                    minDate={start}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    yearDropdownItemNumber={15}
                    dropdownMode="select"
                    name="end"
                  />
                  {/* <h6>請輸入活動時間</h6> */}
                </div>
              </section>
            </div>
            <h3>活動地點</h3>
            <div className="col-6">
              <section>
                <Form.Control
                  required
                  as="select"
                  custom
                  className="form-select"
                  name="direction"
                  id="direction"
                  value={1}
                  onChange={(e) => {
                    setDirection(e.target.value)
                  }}
                >
                  <option value="">請選擇地區</option>
                  {direction1.map((v, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {v}
                      </option>
                    )
                  })}
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請選擇地區</h6>
                </Form.Control.Feedback>
              </section>
            </div>
            <div className="col-6">
              <section>
                <Form.Control
                  required
                  as="select"
                  custom
                  className="form-select"
                  name="fkCityId"
                  id="city"
                  value={2}
                  onChange={(e) => {
                    setCity(e.target.value)
                  }}
                >
                  <option value="">請選擇縣市</option>
                  {city1.map((v, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {v}
                      </option>
                    )
                  })}
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請選擇鄉鎮市區</h6>
                </Form.Control.Feedback>
              </section>
            </div>
            <h3>活動類型與館方</h3>
            <div className="col-6">
              <section>
                <Form.Control
                  required
                  as="select"
                  custom
                  className="form-select"
                  name="fkKindId"
                  id="fkKindId"
                  value={2}
                  onChange={(e) => {
                    setKind(e.target.value)
                  }}
                >
                  <option value="">請選擇活動類型</option>
                  {kind1.map((v, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {v}
                      </option>
                    )
                  })}
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請選擇活動類型</h6>
                </Form.Control.Feedback>
              </section>
            </div>
            <div className="col-6">
              <section>
                <Form.Control
                  required
                  as="select"
                  custom
                  className="form-select"
                  name="fkMuseumId"
                  id="museum"
                  value={1}
                  onChange={(e) => {
                    setMuseum(e.target.value)
                  }}
                >
                  <option value="">請選擇館方</option>
                  {museum1.map((v, i) => {
                    return (
                      <option key={i} value={i + 1}>
                        {v}
                      </option>
                    )
                  })}
                </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請選擇館方</h6>
                </Form.Control.Feedback>
              </section>
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
                <Form.Group
                  required
                  as="textarea"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  value="「李義弘：回顧展」邀請藝評學者王嘉驥擔任客座策展人，是藝術家長達55年的藝術生涯以來規模最大也最重要的一次展出。李義弘（1941-）早年曾在基隆的國民中學任教，並追隨書畫名家江兆申（1925-1996）；1978年後轉向專職創作。從傳統山水繪畫入手，繼而導入自然與風土實景，搜盡臺灣奇特地形，也赴海外遊歷；運用筆墨作畫的同時，他也藉助於攝影，捕捉實景以發想創作。李義弘於晚年發展出立體感與空間構造性兼具的山海繪畫，確立其獨創一格的現代水墨藝術風貌。展覽將以「造景」與「寫景」兩大脈絡為方向，聚焦李義弘的山水／風景類型的繪畫，觀察並梳理「想像」與「再現」兩種創作思維，如何在他長年的藝術實踐中既平行發展又相互滲透，最終融匯出卓然成家的獨特景觀。"
                  name="intro"
                  onChange={(e) => {
                    setActivities(e.target.value)
                  }}
                  minLength="10"
                />
                <div className="row ">
                  <div className="col-6">
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      <h6>請輸入正確的姓名</h6>
                    </Form.Control.Feedback>
                    {/* <h6>請輸入50個字以上</h6> */}
                  </div>
                  <div className="col-6 text-end">
                    {/* <h6>顯示字數</h6> */}
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
                  name="name"
                  placeholder="票券名稱"
                  value="軍人票"
                  onChange={(e) => {
                    setTicketName(e.target.value)
                  }}
                  required
                  maxLength="4"
                  pattern="^[\u4e00-\u9fa5_a-zA-Z0-9]+$"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入文字</h6>
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  票券數量
                </label>
                <Form.Control
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  placeholder="1000"
                  value={500}
                  onChange={(e) => {
                    setAmount(e.target.value)
                  }}
                  required
                  pattern="^[0-9]*$"
                  maxLength="4"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入數字</h6>
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  票券價格
                </label>
                <Form.Control
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  placeholder="1000"
                  value={250}
                  onChange={(e) => {
                    setPrice(e.target.value)
                  }}
                  required
                  pattern="^[0-9]*$"
                  maxLength="4"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  <h6>請輸入數字</h6>
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="col-12">
              <div className="mb-3">
                <label htmlFor="TicketDescription" className="form-label">
                  票券說明
                </label>
                <Form.Group
                  required
                  as="textarea"
                  className="form-control"
                  id="TicketDescription"
                  rows="10"
                  name="tintro"
                  value="軍人票特價中"
                  onChange={(e) => {
                    setTicketDescription(e.target.value)
                  }}
                />
                <div className="row ">
                  <div className="col-6">{/* <h6>請輸入50個字以上</h6> */}</div>
                  <div className="col-6 text-end">
                    {/* <h6>顯示字數</h6> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <div className="d-grid gap-2 my-2 col-md-3">
                <button
                  className="btn m btn-primary"
                  type="submit"
                  value="送出"
                  // onClick={submitForm}
                >
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
      <br />
      <Footer />
    </>
  )
}

export default AddAbility
