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
function Resetpassword(props) {
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

  const handdleChange = (e) => {
    const { name, value } = e.target
    const newChangePasswordData = { ...changepasswordData, [name]: value }
    setChangePasswordData(newChangePasswordData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(ChangePasswordValidate(changepasswordData))
    if (JSON.stringify(ChangePasswordValidate(changepasswordData)) === '{}') {
      sendChangePasswordData()
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

  return (
    <>
      <Header />
      <div className="bg-background">
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
                  id="changePasswordForm"
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
                    <input
                      type="text"
                      className={`form-control BorderRadius ${
                        errors.newPassword ? `is-invalid` : ``
                      }`}
                      placeholder="新密碼"
                      name="newPassword"
                      value={changepasswordData.newPassword}
                      onChange={handdleChange}
                    />
                    <div
                      id="emailHelp"
                      className="form-text text-secondary"
                      style={{ height: '21px' }}
                    >
                      {errors.newPassword && <span>{errors.newPassword}</span>}
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="text"
                      className={`form-control BorderRadius ${
                        errors.confirmNewPassword ? `is-invalid` : ``
                      }`}
                      placeholder="請再次輸入新密碼"
                      name="confirmNewPassword"
                      value={changepasswordData.confirmNewPassword}
                      onChange={handdleChange}
                    />
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
      </div>
    </>
  )
}

export default Resetpassword
