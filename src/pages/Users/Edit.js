//編輯會員資料
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import AsideBar from '../../component/AsideBar.js'
import { Container, Row, Image } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react'
import logo from '../../images/logo.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Footer from '../../component/Footer'
import FadeIn from 'react-fade-in'
import ReCAPTCHA from 'react-google-recaptcha'

function Edit(props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [nickname, setNickname] = useState('')
  const [birthday, setBirthday] = useState('')
  const [avatar, setAvatar] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [googleAuth, setGoogleAuth] = useState(false)
  // 記錄選中了哪個值
  const [gender, setGender] = useState('')
  const genderOptions = [1, 2, 3]
  const userId = JSON.parse(localStorage.getItem('userId'))
  const auth = JSON.parse(localStorage.getItem('auth'))
  const [data, setData] = useState([])
  const isMounted = useRef(false)
  const fetchUserData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users?userId=${userId}`
    )
    const results = await response.json()
    // console.log(results)
    setData(results[0])
    setName(results[0].userName)
    setPhone(results[0].userMobile)
    setAddress(results[0].userAddress)
    setNickname(results[0].userNickName)
    setBirthday(results[0].userBirthday)
    setGender(results[0].userGender)
    setAvatar(results[0].userAvatar)
    setImageName(results[0].userAvatar)
  }
  console.log(genderOptions)
  console.log(gender)
  const MySwal = withReactContent(Swal)
  const history = useHistory()
  useEffect(() => {
    if (auth === true) {
      fetchUserData()
    } else {
      MySwal.fire({
        icon: 'warning',
        title: '您尚未登入，將跳轉至登入畫面',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      }).then(() => {
        history.push('/users/login')
      })
    }
  }, [])
  const formDate = (birthday) => {
    let fromatted_date =
      new Date(birthday).getFullYear() +
      '-' +
      (new Date(birthday).getMonth() + 1) +
      '-' +
      new Date(birthday).getDate()
    return fromatted_date
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (googleAuth === true) {
      sendData()
    } else if (googleAuth === false) {
      MySwal.fire({
        icon: 'error',
        title: '請驗證是否不是機器人',
      })
    }
  }
  const sendData = async () => {
    try {
      const editForm = document.getElementById('editForm')
      console.log(editForm)
      const formData = new FormData(editForm)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/edit?id=${userId}`,
        { method: 'PUT', body: formData }
      )
      const results = await response.json()
      console.log(results)
      if (results.ok === true) {
        localStorage.setItem('userAvatar', results.userAvatar)
        MySwal.fire({
          icon: 'success',
          title: '修改成功',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          history.push('/users')
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onClickImage = (e) => {
    e.preventDefault()
    const avatar = document.getElementById('avatar')
    avatar.click()
  }
  const [selectedFile, setSelectedFile] = useState()
  const [fileName, setIsFileName] = useState('')
  const [imageName, setImageName] = useState('')
  const handleImage = async (e) => {
    const a = e.target.files[0]
    const b = e.target.files[0].name
    setSelectedFile(a)
    setIsFileName(b)
    console.log(a)
    console.log(b)
    setAvatar('')
    // sendImage()
  }
  const sendImage = async () => {
    const formData = new FormData()
    formData.append('file', selectedFile)
    formData.append('fileName', fileName)
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/uploadImage`,
      { method: 'POST', body: formData }
    )
    const results = await response.json()
    console.log(results)
    console.log(results.filename)
    setImageName(results.filename)
  }
  console.log(imageName)
  useEffect(() => {
    if (isMounted.current) {
      sendImage()
    } else {
      isMounted.current = true
    }
  }, [fileName])
  const imageUrl = `${process.env.REACT_APP_API_URL}/images/${avatar}`
  const imageUrl1 = `${process.env.REACT_APP_API_URL}/images/${imageName}`
  const imageUser = `${process.env.REACT_APP_API_URL}/images/user.png`
  const authChange = (value) => {
    console.log('Captcha value:', value)
    if (value !== null) {
      setGoogleAuth(true)
    }
  }
  console.log(birthday)
  return (
    <>
      <Header />
      <div className="bg-background">
        <section className={`${!auth ? 'd-none' : ''}`}>
          <Container>
            <Row className="d-flex justify-content-center align-items-center   usersliquid">
              <FadeIn>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <figure className="figure roundedCircle ">
                    <img
                      alt=""
                      src={`${
                        avatar == null
                          ? imageUser
                          : imageName == null
                          ? imageUrl
                          : imageUrl1
                      }`}
                      width="90"
                      height="90"
                      style={{ border: '1px solid black', borderRadius: '50%' }}
                    />
                  </figure>
                  <div className="d-flex justify-content-center mb-4">
                    <button
                      className="btn btn-primary rounded-pill"
                      onClick={onClickImage}
                    >
                      更換大頭照
                    </button>
                    <input
                      type="file"
                      name="avatar"
                      id="avatar"
                      onChange={handleImage}
                      accept="image/*"
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>
              </FadeIn>
              <FadeIn>
                <form
                  className="d-flex flex-column justify-content-center align-items-center"
                  id="editForm"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className=" BorderRadius usersBackground pt-5 ps-5 pe-5 pb-3 d-flex flex-column usersData usersData1">
                    <div style={{ paddingLeft: '12px' }}>
                      <h4 className="ph_title row ExtraBold text-primary mb-4">
                        編輯會員資料
                      </h4>
                    </div>
                    <input
                      type="hidden"
                      name="userAvatar"
                      value={imageName}
                      onChange={(e) => {
                        setImageName(e.target.value)
                      }}
                    />

                    <div
                      id="input-text"
                      className="mb-3 usersContentcolor Regular"
                    >
                      <h6 className="Regular">姓名</h6>
                      <input
                        type="text"
                        className="form-control BorderRadius "
                        //id="exampleFormControlInput1"
                        name="userName"
                        placeholder="真實姓名"
                        value={name}
                        onChange={(e) => {
                          const a = e.target.value
                          setName(a)
                        }}
                        required
                      />
                    </div>
                    <div
                      id="input-text"
                      className="mb-3 usersContentcolor Regular"
                    >
                      <h6 className="Regular">手機</h6>
                      <input
                        type="tel"
                        className="form-control BorderRadius "
                        //id="exampleFormControlInput1"
                        placeholder="09xxxxxxxx"
                        value={phone}
                        name="userMobile"
                        onChange={(e) => {
                          setPhone(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div
                      id="input-text"
                      className="mb-3 usersContentcolor Regular"
                    >
                      <h6 className="Regular">地址</h6>
                      <input
                        type="text"
                        className="form-control  BorderRadius"
                        //id="exampleFormControlInput1"
                        placeholder=""
                        name="userAddress"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div
                      id="input-text"
                      className="mb-3 usersContentcolor Regular"
                    >
                      <h6 className="Regular">暱稱</h6>
                      <input
                        type="text"
                        className="form-control BorderRadius "
                        name="userNickName"
                        //id="exampleFormControlInput1"
                        placeholder=""
                        value={nickname}
                        onChange={(e) => {
                          setNickname(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div
                      id="input-text"
                      className="mb-3 usersContentcolor Regular"
                    >
                      <h6 className="Regular">生日</h6>
                      <DatePicker
                        dateFormat="yyyy-MM-dd"
                        selected={startDate}
                        onChange={(date, e) => {
                          setStartDate(date)
                          e.target.value = date
                          setBirthday(e.target.value)
                          console.log(e.target.value)
                        }}
                        maxDate={new Date()}
                        showDisabledMonthNavigation
                        className="form-control BorderRadius"
                        value={birthday}
                        fixedHeight
                        // peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        useShortMonthInDropdown
                      />
                      <input
                        type="hidden"
                        className="form-control BorderRadius "
                        //id="exampleFormControlInput1"
                        placeholder=""
                        value={birthday === null ? '' : formDate(birthday)}
                        name="userBirthday"
                        onChange={(e) => {
                          setBirthday(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div
                      id="input-radio"
                      className="mb-3 usersContentcolor Regular"
                    >
                      <h6 className="Regular">性別</h6>
                      <div className="d-flex">
                        {genderOptions.map((v, i) => {
                          return (
                            <div className="form-check BorderRadius" key={i}>
                              <input
                                type="radio"
                                id={'gender' + i}
                                onChange={(e) => {
                                  setGender(parseInt(e.target.value))
                                }}
                                name="userGender"
                                required
                                className="form-check-input"
                                value={v}
                                checked={v === gender}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={'gender' + i}
                              >
                                {v === 1 ? '男' : v === 2 ? '女' : '不詳'}
                              </label>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <ReCAPTCHA
                      className="align-self-center mb-3"
                      sitekey={`${process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}`}
                      onChange={authChange}
                    />
                    <div className="d-flex justify-content-around">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill mt-3"
                      >
                        送出
                      </button>
                    </div>
                  </div>
                </form>
              </FadeIn>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Edit
