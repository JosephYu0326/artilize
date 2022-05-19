//編輯會員資料
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import AsideBar from '../../component/AsideBar'
import { Container, Form, Button, Row, Image } from 'react-bootstrap'
import logo from 'C:/Users/FU/Documents/react/artilize/src/images/logo.png'

function Edit(props) {
  return (
    <>
      <div>會員資料</div>
      <Link to="users/login">會員登入</Link>
      <br />
      <Link to="users/edit">編輯會員資料</Link>
      <br />
      <Link to="users/signup">新會員註冊</Link>
      <br />
      <Link to="users/forgetpassword">會員忘記密碼</Link>
      <br />
      <Link to="users/orderrecord">訂單紀錄</Link>
      <br />
      <Link to="users/articlecollect">文章收藏</Link>
      <br />
      <Link to="users/productcollect">商品收藏</Link>
      <br />
      <Link to="users/personalpage">個人主頁</Link>
      <br />
      <Link to="users/mycoupon">我的優惠券</Link>
      <Header />
      {/* <AsideBar /> */}
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
                <figure className="figure d-flex justify-content-center roundedCircle">
                  <img
                    alt=""
                    src={logo}
                    width="45"
                    height="45"
                    // className="d-inline-block"
                  />
                </figure>
                <Form className="">
                  <div style={{ paddingLeft: '12px' }}>
                    <h4 className="ph_title row ExtraBold text-primary mb-3">
                      編輯會員資料
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
                  <Form.Group className="mb-3" controlId="">
                    {/* <Form.Label>密碼</Form.Label> */}
                    <Form.Control type="" placeholder="姓名" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    {/* <Form.Label>密碼</Form.Label> */}
                    <Form.Control type="" placeholder="手機" />
                    <Form.Text className="text-secondary">
                      請輸入正確的手機
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    {/* <Form.Label>密碼</Form.Label> */}
                    <Form.Control type="" placeholder="地址" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    {/* <Form.Label>密碼</Form.Label> */}
                    <Form.Control type="" placeholder="暱稱" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    {/* <Form.Label>密碼</Form.Label> */}
                    <Form.Control type="" placeholder="生日" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    {/* <Form.Label>密碼</Form.Label> */}
                    <Form.Control type="" placeholder="性別" />
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
                    <Link to="/users/edit/">
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

export default Edit
