//會員更改密碼
import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ResetPasswordValidate from './formComponents/ResetPasswordValidate'
import FadeIn from 'react-fade-in'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
function Resetpassword(props) {
  const [changepasswordData, setChangePasswordData] = useState({
    newPassword: '',
    confirmNewPassword: '',
  })
  const [errors, setErrors] = useState({})
  const MySwal = withReactContent(Swal)
  const history = useHistory()
  const params = useParams()
  console.log(params.userId)

  const auth = JSON.parse(localStorage.getItem('auth'))
  if (auth === true) {
    history.push('/users')
  }

  const handdleChange = (e) => {
    const { name, value } = e.target
    const newChangePasswordData = { ...changepasswordData, [name]: value }
    setChangePasswordData(newChangePasswordData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(ResetPasswordValidate(changepasswordData))
    if (JSON.stringify(ResetPasswordValidate(changepasswordData)) === '{}') {
      sendChangePasswordData()
    }
  }
  const sendChangePasswordData = async () => {
    try {
      const changePasswordForm = document.getElementById('changePasswordForm')
      const formData = new FormData(changePasswordForm)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/resetPassword1?userId=${params.userId}`,
        { method: 'POST', body: formData }
      )
      const result = await response.json()
      console.log(result)
      if (result.ok === true) {
        MySwal.fire({
          icon: 'success',
          title: '密碼重設成功，請使用新密碼登入',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          history.push('/users/login')
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const [hidepassword, setHidePassword] = useState(false)
  const [hidepassword1, setHidePassword1] = useState(false)
  const eye = <FaEye />
  const closeEye = <FaEyeSlash />
  const showPassword = (e) => {
    setHidePassword(!hidepassword)
  }
  const showPassword1 = (e) => {
    setHidePassword1(!hidepassword1)
  }

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
                    id="changePasswordForm"
                  >
                    <div style={{ paddingLeft: '12px' }}>
                      <h4 className="ph_title row ExtraBold text-primary mb-4">
                        重設密碼
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
                            errors.newPassword ? `is-invalid` : ``
                          }`}
                          placeholder="新密碼"
                          name="newPassword"
                          value={changepasswordData.newPassword}
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
                            hidepassword1 === false ? 'password' : 'text'
                          }`}
                          className={`form-control BorderRadius ${
                            errors.confirmNewPassword ? `is-invalid` : ``
                          }`}
                          placeholder="請再次輸入新密碼"
                          name="confirmNewPassword"
                          value={changepasswordData.confirmNewPassword}
                          onChange={handdleChange}
                        />
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
                        {errors.confirmNewPassword && (
                          <span>{errors.confirmNewPassword}</span>
                        )}
                      </div>
                    </div>

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

export default Resetpassword
