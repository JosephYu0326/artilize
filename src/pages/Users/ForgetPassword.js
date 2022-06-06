//會員忘記密碼
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'
import Footer from '../../component/Footer'
import emailjs from '@emailjs/browser'
function ForgetPassword(props) {
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    sendEmail()
  }
  const sendEmail = async () => {
    try {
      const resetEmailForm = document.getElementById('resetEmailForm')
      const formData = new FormData(resetEmailForm)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/resetpassword`,
        { method: 'POST', body: formData }
      )
      const result = await response.json()
      console.log(result)
    } catch (error) {}
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
                <form onSubmit={handleSubmit} id="resetEmailForm">
                  <div style={{ paddingLeft: '12px' }}>
                    <h4 className="ph_title row ExtraBold text-primary mb-4">
                      忘記密碼
                    </h4>
                  </div>
                  <div
                    id="input-text"
                    className="mb-3 usersContentcolor Regular"
                  >
                    <input
                      type="text"
                      className="form-control "
                      name="userEmail"
                      placeholder="請輸入註冊時的Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                    <div id="emailHelp" className="form-text text-secondary">
                      請輸入註冊時的Email
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
      <Footer />
    </>
  )
}

export default ForgetPassword
