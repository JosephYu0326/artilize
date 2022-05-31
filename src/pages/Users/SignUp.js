//新會員註冊
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function SignUp(props) {
  const [addUserData, setUserData] = useState({
    userAccount: '',
    userEmail: '',
    userPassword: '',
    userConfirmPassword: '',
  })

  const handleChange = (e) => {
    const newAddUserData = { ...addUserData, [e.target.name]: e.target.value }
    setUserData(newAddUserData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    sendAddUserData()
  }
  const MySwal = withReactContent(Swal)
  const sendAddUserData = async () => {
    try {
      const addUserForm = document.getElementById('addUserForm')
      const formData = new FormData(addUserForm)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/signup`,
        { method: 'POST', body: formData }
      )
      const results = await response.json()
      console.log(results)
      if (results.ok === true) {
        MySwal.fire({
          title: <h3>註冊成功</h3>,
          icon: 'success',
        })
      } else {
        MySwal.fire({
          title: (
            <div>
              <h3>註冊失敗</h3>
            </div>
          ),
          icon: 'error',
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
                <form id="addUserForm" onSubmit={handleSubmit}>
                  <div style={{ paddingLeft: '12px' }}>
                    <h4 className="ph_title row ExtraBold text-primary mb-4">
                      新會員註冊
                    </h4>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="text"
                      className="form-control "
                      name="userAccount"
                      placeholder="帳號"
                      value={addUserData.userAccount}
                      onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text text-secondary">
                      請輸入正確的帳號
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="email"
                      className="form-control "
                      name="userEmail"
                      placeholder="信箱"
                      value={addUserData.userEmail}
                      onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text text-secondary">
                      請輸入正確的信箱
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="password"
                      className="form-control "
                      name="userPassword"
                      placeholder="密碼"
                      value={addUserData.userPassword}
                      onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text text-secondary">
                      請輸入正確的密碼
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="password"
                      className="form-control "
                      name="userConfirmPassword"
                      placeholder="請再次輸入密碼"
                      value={addUserData.userConfirmPassword}
                      onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text text-secondary">
                      請再次輸入正確的密碼
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

export default SignUp
