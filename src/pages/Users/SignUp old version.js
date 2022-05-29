//新會員註冊
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Form, Button, Row } from 'react-bootstrap'

function SignUp(props) {
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
                <Form className="">
                  <div style={{ paddingLeft: '12px' }}>
                    <h4 className="ph_title row ExtraBold text-primary mb-3">
                      新會員註冊
                    </h4>
                    {/* <h6 className="ph_title row Regular usersContentcolor mb-3 ">
                      使用您的Artilize帳號
                    </h6> */}
                  </div>
                  <Form.Group className="mb-3" controlId="formBasicAccount">
                    {/* <Form.Label>帳號</Form.Label> */}
                    <Form.Control type="account" placeholder="帳號" />
                    <Form.Text className="text-secondary">
                      請輸入正確的帳號
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>帳號</Form.Label> */}
                    <Form.Control type="email" placeholder="信箱" />
                    <Form.Text className="text-secondary">
                      請輸入正確的信箱
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>密碼</Form.Label> */}
                    <Form.Control type="password" placeholder="密碼" />
                    <Form.Text className="text-secondary">
                      請輸入正確的密碼
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>密碼</Form.Label> */}
                    <Form.Control
                      type="password"
                      placeholder="請再次輸入密碼"
                    />
                    <Form.Text className="text-secondary">
                      請輸入正確的密碼
                    </Form.Text>
                  </Form.Group>
                  {/* <Form.Group
                    className="mb-3 usersContentcolor Regular"
                    controlId=""
                  >
                    <Form.Label>忘記密碼</Form.Label>
                  </Form.Group> */}
                  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="記住我" />
                      </Form.Group> */}
                  <div className="d-flex justify-content-around">
                    <Link to="//">
                      <Button variant="primary rounded-pill" type="submit">
                        送出
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

export default SignUp