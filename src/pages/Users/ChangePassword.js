//會員更改密碼
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ChangePasswordValidate from './formComponents/ChangePasswordValidate'
import FadeIn from 'react-fade-in'
import ReCAPTCHA from 'react-google-recaptcha'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
function ChangePassword(props) {
  const [changepasswordData, setChangePasswordData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const [errors, setErrors] = useState({})
  const MySwal = withReactContent(Swal)
  const history = useHistory()

  const auth = JSON.parse(localStorage.getItem('auth'))
  const userId = JSON.parse(localStorage.getItem('userId'))
  const [googleAuth, setGoogleAuth] = useState(false)
  if (auth === false) {
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
  const handdleChange = (e) => {
    const { name, value } = e.target
    const newChangePasswordData = { ...changepasswordData, [name]: value }
    setChangePasswordData(newChangePasswordData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(ChangePasswordValidate(changepasswordData))
    if (
      JSON.stringify(ChangePasswordValidate(changepasswordData)) === '{}' &&
      googleAuth === true
    ) {
      sendChangePasswordData()
    } else if (googleAuth === false) {
      MySwal.fire({
        icon: 'error',
        title: '請驗證是否不是機器人',
      })
    }
  }
  const sendChangePasswordData = async () => {
    try {
      const changePasswordForm = document.getElementById('changePasswordForm')
      const formData = new FormData(changePasswordForm)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/changePassword?userId=${userId}`,
        { method: 'POST', body: formData }
      )
      const result = await response.json()
      console.log(result)
      if (result.ok === false) {
        MySwal.fire({
          icon: 'error',
          title: '舊密碼輸入錯誤',
        })
      } else if (result.ok === true) {
        MySwal.fire({
          icon: 'success',
          title: '密碼變更成功',
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
  const authChange = (value) => {
    console.log('Captcha value:', value)
    if (value !== null) {
      setGoogleAuth(true)
    }
  }
  const [hidepassword, setHidePassword] = useState(false)
  const [hidepassword1, setHidePassword1] = useState(false)
  const [hidepassword2, setHidePassword2] = useState(false)
  const eye = <FaEye />
  const closeEye = <FaEyeSlash />
  const showPassword = (e) => {
    setHidePassword(!hidepassword)
  }
  const showPassword1 = (e) => {
    setHidePassword1(!hidepassword1)
  }
  const showPassword2 = (e) => {
    setHidePassword2(!hidepassword2)
  }
  return (
    <>
      <Header />
      <div className="bg-background">
        <FadeIn>
          <section className={`${!auth ? 'd-none' : ''}`}>
            <Container>
              <Row className="d-flex justify-content-center align-items-center usersRow usersliquid">
                <div
                  className=" BorderRadius usersBackground p-5"
                  style={{ maxWidth: '568px', minWidth: '390px' }}
                >
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    id="changePasswordForm"
                    className="d-flex flex-column"
                  >
                    <div style={{ paddingLeft: '12px' }}>
                      <h4 className="ph_title row ExtraBold text-primary mb-4">
                        更改密碼
                      </h4>
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
                          className={`form-control BorderRadius ${
                            errors.oldPassword ? `is-invalid` : ``
                          }`}
                          placeholder="舊密碼"
                          name="oldPassword"
                          value={changepasswordData.oldPassword}
                          onChange={handdleChange}
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
                        {errors.oldPassword && (
                          <span>{errors.oldPassword}</span>
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
                            hidepassword1 === false ? 'password' : 'text'
                          }`}
                          className={`form-control BorderRadius ${
                            errors.newPassword ? `is-invalid` : ``
                          }`}
                          placeholder="新密碼"
                          name="newPassword"
                          value={changepasswordData.newPassword}
                          onChange={handdleChange}
                        />{' '}
                        <i
                          onClick={showPassword1}
                          style={{
                            marginLeft: -50,
                            marginTop: 6,
                            color: 'rgb(65,83,187)',
                            cursor: 'pointer',
                          }}
                        >
                          {hidepassword1 === false ? closeEye : eye}
                        </i>
                      </div>
                      <div
                        id="emailHelp"
                        className="form-text text-secondary"
                        style={{ height: '21px' }}
                      >
                        {errors.newPassword && (
                          <span>{errors.newPassword}</span>
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
                            hidepassword2 === false ? 'password' : 'text'
                          }`}
                          className={`form-control BorderRadius ${
                            errors.confirmNewPassword ? `is-invalid` : ``
                          }`}
                          placeholder="請再次輸入新密碼"
                          name="confirmNewPassword"
                          value={changepasswordData.confirmNewPassword}
                          onChange={handdleChange}
                        />{' '}
                        <i
                          onClick={showPassword2}
                          style={{
                            marginLeft: -50,
                            marginTop: 6,
                            color: 'rgb(65,83,187)',
                            cursor: 'pointer',
                          }}
                        >
                          {hidepassword2 === false ? closeEye : eye}
                        </i>
                      </div>
                      <div
                        id="emailHelp"
                        className="form-text text-secondary"
                        style={{ height: '21px' }}
                      >
                        {errors.confirmNewPassword && (
                          <span>{errors.confirmNewPassword}</span>
                        )}
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
    </>
  )
}

export default ChangePassword
