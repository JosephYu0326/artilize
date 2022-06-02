//會員登入
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login(props) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [loginData, setLoginData] = useState({
    userAccount: '',
    userPassword: '',
  })
  const { auth, setAuth, userId, setUserId } = props
  const history = useHistory()
  const handleChange = (e) => {
    const { name, value } = e.target
    const newLoginData = { ...loginData, [name]: value }
    setLoginData(newLoginData)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    sendLoginData()
  }
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
        setAuth(!auth)
        localStorage.setItem('userId', result.userId)
        localStorage.setItem('auth', true)
        setUserId(result.userId)
        alert('歡迎登入')
        history.push('/users')
      } else {
        alert('未有此帳號或帳密輸入錯誤')
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
                <form onSubmit={handleSubmit} noValidate id="loginForm">
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
                      className="form-control BorderRadius"
                      name="userAccount"
                      placeholder="帳號"
                      value={loginData.userAccount}
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
                      type="text"
                      className="form-control BorderRadius"
                      placeholder="密碼"
                      name="userPassword"
                      value={loginData.userPassword}
                      onChange={handleChange}
                    />
                    <div id="emailHelp" className="form-text text-secondary">
                      請輸入正確的密碼
                    </div>
                  </div>
                  <div>
                    <Link to="/users/forgetpassword/">
                      <label className="form-text mb-3 usersContentcolor Regular">
                        忘記密碼
                      </label>
                    </Link>
                  </div>
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
      </div>
    </>
  )
}

export default Login
