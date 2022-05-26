//編輯會員資料
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import AsideBar from '../../component/AsideBar'
import { Container, Row, Image } from 'react-bootstrap'
import { useState } from 'react'
import logo from 'C:/Users/FU/Documents/react/artilize/src/images/logo.png'

function Edit(props) {
  const [account, setAccount] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [nickname, setNickname] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')

  return (
    <>
      <Header />
      {/* <AsideBar btn1="123" /> */}

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
                <form>
                  <div style={{ paddingLeft: '12px' }}>
                    <h4 className="ph_title row ExtraBold text-primary mb-4">
                      編輯會員資料
                    </h4>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="text"
                      className="form-control "
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
                      type="email"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="信箱"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
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
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="text"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="姓名"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                    />
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="tel"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="手機"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value)
                      }}
                    />
                    <div id="emailHelp" className="form-text text-secondary">
                      請再次輸入正確的手機
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
                      placeholder="地址"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value)
                      }}
                    />
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="text"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="暱稱"
                      value={nickname}
                      onChange={(e) => {
                        setNickname(e.target.value)
                      }}
                    />
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="date"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="生日"
                      value={birthday}
                      onChange={(e) => {
                        setBirthday(e.target.value)
                      }}
                    />
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="radio"
                      className="form-control "
                      id="exampleFormControlInput1"
                      placeholder="性別"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value)
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-around">
                    <Link to="//">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-pill mt-4"
                      >
                        送出
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

export default Edit
