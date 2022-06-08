//會員登入
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import LoginValidate from './formComponents/LoginValidate'
import Footer from '../../component/Footer'
import FadeIn from 'react-fade-in'
import ReCAPTCHA from 'react-google-recaptcha'
function Login(props) {
  const [loginData, setLoginData] = useState({
    userAccount: '',
    userPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [googleAuth, setGoogleAuth] = useState(false)
  const auth = JSON.parse(localStorage.getItem('auth'))
  const history = useHistory()
  if (auth === true) {
    history.push('/users')
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    const newLoginData = { ...loginData, [name]: value }
    setLoginData(newLoginData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(LoginValidate(loginData))
    setIsSubmitting(true)
    if (
      JSON.stringify(LoginValidate(loginData)) === '{}' &&
      googleAuth === true
    ) {
      sendLoginData()
    } else if (googleAuth === false) {
      MySwal.fire({
        icon: 'error',
        title: '請驗證是否不是機器人',
      })
    }
  }
  const MySwal = withReactContent(Swal)
  const sendLoginData = async () => {
    try {
      const loginForm = document.getElementById('loginForm')
      const formData = new FormData(loginForm)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/login`,
        { method: 'POST', body: formData }
      )
      const result = await response.json()
      console.log(result)
      if (result.ok === true) {
        localStorage.setItem('userId', result.userId)
        localStorage.setItem('auth', true)
        localStorage.setItem('userAvatar', result.userAvatar)
        MySwal.fire({
          icon: 'success',
          title: '歡迎登入Artilize',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          history.push('/users')
        })
      } else if (result.message === '無此帳號或帳號輸入錯誤') {
        MySwal.fire({
          icon: 'error',
          title: '無此帳號或帳號輸入錯誤',
        })
      } else if (result.message === '密碼輸入錯誤') {
        MySwal.fire({
          icon: 'error',
          title: '密碼輸入錯誤',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const authChange = (value) => {
    console.log('Captcha value:', value)
    if (value !== null) {
      setGoogleAuth(true)
    }
  }
  return (
    <>
      <Header />
      <div className="bg-background">
        <FadeIn>
          <section>
            <Container>
              <Row className="d-flex justify-content-center align-items-center usersRow">
                <div
                  className=" BorderRadius usersBackground p-5"
                  style={{ maxWidth: '568px', minWidth: '390px' }}
                >
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    id="loginForm"
                    className="d-flex justify-content-center flex-column"
                  >
                    <div style={{ paddingLeft: '12px' }}>
                      <h4 className="ph_title row ExtraBold text-primary">
                        登入
                      </h4>
                      <h6 className="ph_title row Regular usersContentcolor mb-3 ">
                        使用您的Artilize帳號
                      </h6>
                    </div>
                    <div id="input-text" className="mb-3">
                      <input
                        type="text"
                        className={`form-control BorderRadius ${
                          errors.userAccount ? `is-invalid` : ``
                        }`}
                        name="userAccount"
                        placeholder="帳號"
                        value={loginData.userAccount}
                        onChange={handleChange}
                      />
                      <div
                        id="emailHelp"
                        className="form-text text-secondary"
                        style={{ height: '21px' }}
                      >
                        {errors.userAccount && (
                          <span>{errors.userAccount}</span>
                        )}
                      </div>
                    </div>
                    <div
                      id="input-text"
                      className="mb-3 usersContentcolor Regular"
                    >
                      <input
                        type="text"
                        className={`form-control  BorderRadius ${
                          errors.userPassword ? `is-invalid` : ``
                        } `}
                        placeholder="密碼"
                        name="userPassword"
                        value={loginData.userPassword}
                        onChange={handleChange}
                      />
                      <div
                        id="emailHelp"
                        className="form-text text-secondary"
                        style={{ height: '21px' }}
                      >
                        {errors.userPassword && (
                          <span>{errors.userPassword}</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <Link to="/users/forgetpassword/">
                        <label
                          className="form-text mb-3 usersContentcolor Regular"
                          style={{ cursor: 'pointer' }}
                        >
                          忘記密碼
                        </label>
                      </Link>
                    </div>
                    <ReCAPTCHA
                      className="align-self-center mb-3"
                      sitekey={`${process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}`}
                      onChange={authChange}
                    />
                    <div className="d-flex justify-content-around">
                      {/* <Link to="/users/">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill"
                      >
                        登入
                      </button>
                    </Link> */}
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill "
                      >
                        登入
                      </button>
                      <Link to="/users/signup/">
                        <button
                          type="click"
                          className="btn btn-primary rounded-pill"
                        >
                          註冊
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </Row>
            </Container>
          </section>
        </FadeIn>
      </div>
      <Footer />
    </>
  )
}

export default Login
