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
  const { auth, setAuth } = props
  const history = useHistory()

  return (
    <>
      <Header />
      <div className="bg-background">
        <section>
          <Container>
            <Row
              className="d-flex justify-content-center align-items-center"
              style={{ height: '100vh' }}
            >
              <div
                className=" BorderRadius usersBackground p-5"
                style={{ maxWidth: '568px', minWidth: '390px' }}
              >
                <form>
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
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="帳號"
                      value={account}
                      onChange={(e) => {
                        setAccount(e.target.value)
                      }}
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
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="密碼"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
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
                      className="btn btn-primary rounded-pill"
                      onClick={() => {
                        setAuth(!auth)

                        // 呈現歡迎訊息
                        alert('你好，歡迎')

                        // 導向會員頁面
                        history.push('/users/signup/')
                      }}
                    >
                      {auth ? '登出' : '登入'}
                    </button>
                    <Link to="/users/signup/">
                      <button
                        type="submit"
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
