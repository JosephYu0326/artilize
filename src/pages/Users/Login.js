//會員登入
import React, { useEffect, useRef } from 'react'
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
import jwtDecode from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import FacebookLogin from 'react-facebook-login'

function Login(props) {
  const [loginData, setLoginData] = useState({
    userAccount: '',
    userPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [googleAuth, setGoogleAuth] = useState(false)
  const auth = JSON.parse(localStorage.getItem('auth'))
  const [hidepassword, setHidePassword] = useState(false)
  const [googleLogin, setGoogleLogin] = useState({
    email: '',
    name: '',
    picture: '',
    sub: '',
    account: '',
  })
  const [facebookLogin, setFacebookLogin] = useState({
    email: '',
    picture: '',
    userId: '',
    account: '',
  })
  const history = useHistory()
  const isMounted = useRef(false)
  const eye = <FaEye />
  const closeEye = <FaEyeSlash />

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
    } else if (
      JSON.stringify(LoginValidate(loginData)) === '{}' &&
      googleAuth === false
    ) {
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
        localStorage.setItem('userAccount', result.userAccount)
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
  //google 登入
  const { email, name, picture, sub, account } = googleLogin
  console.log(googleLogin)
  const sendGoogleLogIn = async () => {
    try {
      const responseGoogle = await fetch(
        `${process.env.REACT_APP_API_URL}/users/googlelogin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(googleLogin),
        }
      )
      const resultGoogle = await responseGoogle.json()
      console.log(resultGoogle)
      console.log(resultGoogle.userId)
      if (resultGoogle.ok === true) {
        localStorage.setItem('userId', resultGoogle.userId)
        localStorage.setItem('auth', true)
        localStorage.setItem('userAvatar', resultGoogle.userAvatar)
        localStorage.setItem('userAccount', account)
        MySwal.fire({
          icon: 'success',
          title: '歡迎登入Artilize',
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
  useEffect(() => {
    if (isMounted.current) {
      if (sub !== '') {
        sendGoogleLogIn()
      }
    } else {
      isMounted.current = true
    }
  }, [googleLogin])

  const showPassword = (e) => {
    setHidePassword(!hidepassword)
  }

  //facebook登入
  const responseFacebook = (response) => {
    console.log(response)
    setFacebookLogin({
      email: response.email,
      picture: response.picture.data.url,
      userId: Math.floor(response.userID * 0.00000001),
      account: `Fb_${response.email.split('@')[0]}`,
    })
  }
  const sendFacebookLogin = async () => {
    try {
      const responseFacebook = await fetch(
        `${process.env.REACT_APP_API_URL}/users/facebooklogin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(facebookLogin),
        }
      )
      const resultFacebook = await responseFacebook.json()
      console.log(resultFacebook)
      if (resultFacebook.ok === true) {
        localStorage.setItem('userId', resultFacebook.userId)
        localStorage.setItem('auth', true)
        localStorage.setItem('userAvatar', resultFacebook.userAvatar)
        localStorage.setItem('userAccount', facebookLogin.account)
        MySwal.fire({
          icon: 'success',
          title: '歡迎登入Artilize',
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
  useEffect(() => {
    if (isMounted.current) {
      if (facebookLogin.userId !== '') {
        sendFacebookLogin()
      }
    } else {
      isMounted.current = true
    }
  }, [facebookLogin])

  return (
    <>
      <Header />
      <div className="bg-background">
        <FadeIn>
          <section>
            <Container>
              <Row className="d-flex justify-content-center align-items-center usersRow usersliquid">
                <div
                  className=" BorderRadius usersBackground p-5"
                  style={{ maxWidth: '568px', minWidth: '390px' }}
                >
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    id="loginForm"
                    className="d-flex justify-content-center flex-column "
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
                      <div className="d-flex">
                        <input
                          type={`${
                            hidepassword === false ? 'password' : 'text'
                          }`}
                          className={`form-control  BorderRadius ${
                            errors.userPassword ? `is-invalid` : ``
                          } `}
                          placeholder="密碼"
                          name="userPassword"
                          value={loginData.userPassword}
                          onChange={handleChange}
                        />
                        <i
                          onClick={showPassword}
                          style={{
                            marginLeft: -50,
                            marginTop: 6,
                            color: 'rgb(65,83,187)',
                            cursor: 'pointer',
                          }}
                        >
                          {hidepassword === false ? closeEye : eye}
                        </i>
                      </div>

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
                          className="form-text  usersContentcolor Regular"
                          style={{ cursor: 'pointer' }}
                        >
                          忘記密碼
                        </label>
                      </Link>
                    </div>
                    <ReCAPTCHA
                      className="align-self-center mb-3 "
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
                        style={{ width: 300 }}
                      >
                        登入
                      </button>
                    </div>
                    <div
                      // style={{ border: '1px solid lightgrey' }}
                      className="loginBorder text-center mb-3 mt-3"
                    >
                      <span className="loginInnertText">or</span>
                    </div>
                  </form>
                  <div className="d-fle flex-column  align-items-center">
                    <GoogleOAuthProvider
                      clientId={`${process.env.REACT_APP_GOOGLE_LOGIN_KEY}`}
                    >
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          console.log(credentialResponse)
                          const ab = jwtDecode(credentialResponse.credential)
                          console.log(ab)
                          setGoogleLogin({
                            email: ab.email,
                            name: ab.name,
                            picture: ab.picture,
                            sub: Math.floor(ab.sub * 0.0000000000001),
                            account: `Google_${ab.email.split('@')[0]}`,
                          })
                        }}
                        onError={() => {
                          console.log('Login Failed')
                        }}
                        // type="icon"
                        theme="filled_black"
                        text="signin"
                        shape="pill"
                        width="300"
                      />
                    </GoogleOAuthProvider>
                    <div className="facebook d-flex flex-column align-items-center">
                      <FacebookLogin
                        appId={`${process.env.REACT_APP_FACEBOOK_LOGIN_KEY}`}
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        icon="fa-facebook"
                        textButton="&nbsp;&nbsp;Sign In with Facebook"
                        cssClass="BorderRadius btn btn-primary btnFacebook mt-3"
                        // authType="reauthenticate"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center mt-3">
                    <h6 className="ph_title  Regular usersContentcolor  ">
                      還沒有帳號嗎?按
                      <Link className="ph_title Regular" to="/users/signup/">
                        這裡
                      </Link>
                      加入Artilize
                    </h6>
                  </div>
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
