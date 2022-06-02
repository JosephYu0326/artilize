//會員資料
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
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
  // const { auth, userId } = props
  // console.log(auth)
  // console.log(userId)
  const userId = JSON.parse(localStorage.getItem('userId'))
  const [data, setData] = useState([])

  const fetchUserData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users?userId=${userId}`
    )
    const results = await response.json()
    // console.log(results)
    setData(results[0])
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  console.log(data)
  const {
    userAccount,
    userAddress,
    userAvatar,
    userBirthday,
    userEmail,
    userGender,
    userMobile,
    userName,
    userNickName,
  } = data

  const history = useHistory()
  const clickLogOut = () => {
    if (window.confirm('確定是否登出')) {
      localStorage.removeItem('userId')
      localStorage.setItem('auth', false)
      alert('登出成功')
      history.push('users/login')
    }
  }
  return (
    <>
      <Header />
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
                    <div className="form-text text-secondary ">
                      {userAccount}
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">信箱</h6>
                    <div className="form-text text-secondary ">{userEmail}</div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular ">姓名</h6>
                    <div className="form-text text-secondary ">
                      {userName ? userName : `無資料`}
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">手機</h6>
                    <div className="form-text text-secondary ">
                      {userMobile ? userMobile : `無資料`}
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">地址</h6>
                    <div className="form-text text-secondary">
                      {userAddress ? userAddress : `無資料`}
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">暱稱</h6>
                    <div className="form-text text-secondary">
                      {userNickName ? userNickName : `無資料`}
                    </div>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">生日</h6>
                    <div className="form-text text-secondary">
                      {userBirthday ? userBirthday : `無資料`}
                    </div>
                  </div>
                  <div
                    id="input-radio"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <h6 className="Regular">性別</h6>
                    <div className="form-text text-secondary">
                      {userGender ? userGender : `無資料`}
                    </div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <Link to="/users/edit/">
                      <button
                        type="click"
                        className="btn btn-primary rounded-pill mt-4"
                      >
                        編輯
                      </button>
                    </Link>

                    <button
                      type="click"
                      className="btn btn-primary rounded-pill mt-4"
                      onClick={clickLogOut}
                    >
                      登出
                    </button>
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
