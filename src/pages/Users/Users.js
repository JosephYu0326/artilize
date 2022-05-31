//會員資料
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import AsideBar from '../../component/AsideBar'
import { Container, Form, Button, Row, Image } from 'react-bootstrap'
import logo from '../../images/logo.png'

function Users(props) {
  const usersAsideBar = {
    btnTitle: [
      '會員資料',
      '訂單紀錄',
      '文章收藏',
      '商品收藏',
      '個人主頁',
      '我的優惠券',
    ],
    btnTo: [
      '/users',
      '/users/orderrecord',
      '/users/articlecollect',
      '/users/productcollect',
      '/users/personalpage',
      '/users/mycoupon',
    ],
  }

  return (
    <>
      <Header />
      {/* <div>會員資料</div>
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
      <Header /> */}
      <AsideBar btn={usersAsideBar} />
      <div className="bg-background">
        <section>
          <Container>
            <Row className="d-flex flex-column justify-content-center align-items-center  ">
              <form className="d-flex flex-column justify-content-center align-items-center">
                <div>
                  <figure className="figure roundedCircle">
                    <img alt="" src={logo} width="45" height="45" />
                  </figure>
                </div>
                <div
                  className=" BorderRadius usersBackground p-5  d-flex flex-column"
                  style={{ minWidth: '568px' }}
                >
                  <div style={{ paddingLeft: '12px' }}>
                    <h4 className="ph_title row ExtraBold text-primary mb-4">
                      會員資料
                    </h4>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">帳號</h6>
                    <div className="form-text text-secondary">artilize</div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">信箱</h6>
                    <div className="form-text text-secondary">
                      artilize@gmail.com
                    </div>
                  </div>
                  {/* <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">密碼</h6>
                    <div className="form-text text-secondary">
                      請輸入正確的密碼
                    </div>
                  </div> */}
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">姓名</h6>
                    <div className="form-text text-secondary">王小明</div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">手機</h6>
                    <div className="form-text text-secondary">0932111222</div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">地址</h6>
                    <div className="form-text text-secondary">
                      高雄市前金區中正四路211號8樓之1
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">暱稱</h6>
                    <div className="form-text text-secondary">WANG</div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">生日</h6>
                    <div className="form-text text-secondary">2000/01/01</div>
                  </div>
                  <div
                    id="input-radio"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">性別</h6>
                    <div className="form-text text-secondary">男</div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <Link to="/users/edit/">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill mt-4"
                      >
                        編輯
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
}

export default Users
