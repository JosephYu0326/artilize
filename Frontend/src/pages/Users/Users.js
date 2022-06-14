//會員資料
import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import AsideBar from '../../component/AsideBar'
import { Container, Form, Button, Row, Image } from 'react-bootstrap'
import logo from '../../images/user.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Footer from '../../component/Footer'
import FadeIn from 'react-fade-in'

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
  const auth = JSON.parse(localStorage.getItem('auth'))
  console.log(auth)
  const [data, setData] = useState([])

  const fetchUserData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users?userId=${userId}`
    )
    const results = await response.json()
    // console.log(results)
    setData(results[0])
  }
  const MySwal = withReactContent(Swal)
  const history = useHistory()

  useEffect(() => {
    if (auth === true) {
      fetchUserData()
    } else {
      MySwal.fire({
        icon: 'warning',
        title: '您尚未登入，將跳轉至登入畫面',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      }).then(() => {
        history.push('/users/login')
      })
    }
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
  console.log(userAvatar)

  const clickLogOut = (e) => {
    e.preventDefault()
    MySwal.fire({
      title: '您確定要登出嗎?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: '取消',
      confirmButtonText: '確定',
      confirmButtonColor: '#4153BB',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('userId')
        localStorage.removeItem('userAvatar')
        localStorage.removeItem('userAccount')
        localStorage.setItem('auth', false)
        // const temp = localStorage.getItem('addItemList').split(',')
        // const temp2 = localStorage.getItem('addItemList2').split(',')
        // for (let i = 0; i < temp.length - 1; i++) {
        //   localStorage.removeItem(temp[i])
        // }
        // for (let i = 0; i < temp2.length - 1; i++) {
        //   localStorage.removeItem(temp2[i])
        // }
        // localStorage.removeItem('totalPrice')
        // localStorage.removeItem('addItemList')
        // localStorage.removeItem('addItemList2')
        // localStorage.setItem('totalNum', 0)

        MySwal.fire({
          title: '登出成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          history.push('users/login')
        })
      }
    })
    // if (window.confirm('確定是否登出')) {
    //   localStorage.removeItem('userId')
    //   localStorage.setItem('auth', false)
    //   alert('登出成功')
    //   history.push('users/login')
    // }
  }
  const imageUrl = ` ${process.env.REACT_APP_API_URL}/images/${userAvatar}`
  const imageUser = ` ${process.env.REACT_APP_API_URL}/images/user.png`
  return (
    <>
      <Header />
      <AsideBar btn={usersAsideBar} />
      <div className="bg-background">
        <section className={`${!auth ? 'd-none' : ''}`}>
          <Container>
            <Row className="d-flex flex-column justify-content-center align-items-center usersliquid ">
              <form className="d-flex flex-column justify-content-center align-items-center">
                <FadeIn>
                  <div>
                    <figure className="figure roundedCircle">
                      <img
                        alt=""
                        src={` ${userAvatar == null ? imageUser : imageUrl}`}
                        width="90"
                        height="90"
                        style={{
                          border: '1px solid #4153BB ',
                          borderRadius: '50%',
                        }}
                      />
                    </figure>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className=" BorderRadius usersBackground p-5  d-flex flex-column usersData">
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
                      <div className="form-text text-secondary ">
                        {userEmail}
                      </div>
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
                        {userGender
                          ? userGender === 1
                            ? `男`
                            : userGender === 2
                            ? `女`
                            : `不詳`
                          : `不詳`}
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link to="/users/edit/">
                        <button
                          type="click"
                          className="btn btn-primary rounded-pill mt-4"
                        >
                          編輯會員資料
                        </button>
                      </Link>
                      <Link to="/users/changepassword/">
                        <button
                          type="click"
                          className="btn btn-primary rounded-pill mt-4"
                        >
                          更改密碼
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
                </FadeIn>
              </form>
            </Row>
          </Container>
        </section>
      </div>
      <div className={`usersRow1 ${auth === true ? 'd-none' : ''}`}></div>
      <Footer />
    </>
  )
}

export default Users
