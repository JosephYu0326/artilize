//會員登入
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Form, Button, Row } from 'react-bootstrap'
import { useState } from 'react'

function Login(props) {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [inputText, setInputText] = useState('')

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
                <section id="input-text" class="mb-3">
                  <h2>文字輸入框</h2>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    value={inputText}
                    onChange={(e) => {
                      setInputText(e.target.value)
                    }}
                  />
                </section>
                <Form className="">
                  <div style={{ paddingLeft: '12px' }}>
                    <h4 className="ph_title row ExtraBold text-primary">
                      登入
                    </h4>

                    <h6 className="ph_title row Regular usersContentcolor mb-3 ">
                      使用您的Artilize帳號
                    </h6>
                  </div>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicAccount"
                    id="input-text"
                  >
                    {/* <Form.Label>帳號</Form.Label> */}
                    <Form.Control
                      type="text"
                      placeholder="帳號"
                      value={account}
                      onChange={(e) => {
                        setAccount(e.target.value)
                      }}
                    />
                    <Form.Text className="text-secondary">
                      請輸入正確的帳號
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>密碼</Form.Label> */}
                    <Form.Control
                      type="password"
                      placeholder="密碼"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                    />
                    <Form.Text className="text-secondary">
                      請輸入正確的密碼
                    </Form.Text>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 usersContentcolor Regular"
                    controlId=""
                  >
                    <Link to="/users/ForgetPassword/">
                      <Form.Label>忘記密碼</Form.Label>
                    </Link>
                  </Form.Group>
                  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="記住我" />
                      </Form.Group> */}
                  <div className="d-flex justify-content-around">
                    <Link to="/users/">
                      <Button variant="primary rounded-pill" type="submit">
                        登入
                      </Button>
                    </Link>
                    <Link to="/users/signup/">
                      <Button variant="primary rounded-pill" type="submit">
                        註冊
                      </Button>
                    </Link>
                  </div>
                </Form>
              </div>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default Login
