//會員忘記密碼
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import Footer from '../../component/Footer'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { css } from '@emotion/react'
import PuffLoader from 'react-spinners/PuffLoader'
import FadeIn from 'react-fade-in'
import ReCAPTCHA from 'react-google-recaptcha'

function ForgetPassword(props) {
  const auth = JSON.parse(localStorage.getItem('auth'))
  const history = useHistory()
  const MySwal = withReactContent(Swal)
  const [loading, setIsLoading] = useState(false)
  const [color, setColor] = useState('#4153BB')
  const [googleAuth, setGoogleAuth] = useState(false)
  if (auth === true) {
    history.replace('/users')
  }
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    let a = {}
    if (!email) {
      a.email = '此欄位不能為空白'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      a.email = '無效的Email'
    }
    setErrors(a)
    if (JSON.stringify(errors) === '{}' && googleAuth === true) {
      setIsLoading(true)
      sendEmail()
    } else if (googleAuth === false) {
      MySwal.fire({
        icon: 'error',
        title: '請驗證是否不是機器人',
      })
    }
  }
  const sendEmail = async () => {
    try {
      const resetEmailForm = document.getElementById('resetEmailForm')
      const formData = new FormData(resetEmailForm)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/resetpassword`,
        { method: 'POST', body: formData }
      )

      const result = await response.json()
      if (result.ok === false) {
        setIsLoading(false)
        MySwal.fire({
          icon: 'error',
          title: '無此Email，請重新輸入',
        })
      } else {
        setIsLoading(false)
        MySwal.fire({
          icon: 'success',
          title: '重設密碼信，已寄至您的Email',
          showConfirmButton: 'false',
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          history.replace('/users/login')
        })
      }

      // console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: rgb(65, 83, 187);
  `
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
              <Row className="d-flex flex-column justify-content-center align-items-center usersRow usersliquid">
                <div
                  className=" BorderRadius usersBackground p-5"
                  style={{ maxWidth: '568px', minWidth: '390px' }}
                >
                  <form
                    onSubmit={handleSubmit}
                    id="resetEmailForm"
                    className="d-flex flex-column"
                  >
                    <div style={{ paddingLeft: '12px' }}>
                      <h4 className="ph_title row ExtraBold text-primary mb-4">
                        忘記密碼
                      </h4>
                    </div>
                    <div
                      id="input-text"
                      className="mb-3 usersContentcolor Regular"
                    >
                      <input
                        type="text"
                        className={`form-control BorderRadius  ${
                          errors.email ? `is-invalid` : ``
                        } `}
                        name="userEmail"
                        placeholder="請輸入註冊時的Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                      />
                      <div
                        id="emailHelp"
                        className="form-text text-secondary"
                        style={{ height: '21px' }}
                      >
                        {errors.email && <span>{errors.email}</span>}
                      </div>
                    </div>
                    <ReCAPTCHA
                      className="align-self-center mb-3"
                      sitekey={`${process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}`}
                      onChange={authChange}
                    />
                    <PuffLoader
                      color={'#4153BB'}
                      loading={loading}
                      css={override}
                      size={150}
                    />
                    <div className="d-flex justify-content-around">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill mt-4"
                      >
                        送出
                      </button>
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

export default ForgetPassword
