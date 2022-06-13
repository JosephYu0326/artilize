//新會員註冊
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../styles/users.scss'
import Header from '../../component/Header'
import { Container, Row } from 'react-bootstrap'
import { useState } from 'react'

import SignUpForm from './formComponents/SignupForm'
import Footer from '../../component/Footer'
import FadeIn from 'react-fade-in'

const SignUp = () => {
  const history = useHistory()
  const auth = JSON.parse(localStorage.getItem('auth'))
  if (auth === true) {
    history.push('/users')
  }
  return (
    <>
      <Header />
      <div className="bg-background">
        <FadeIn>
          <section>
            <Container>
              <Row className="d-flex justify-content-center align-items-center usersRow usersliquid">
                <div
                  className=" BorderRadius usersBackground p-5"
                  style={{ maxWidth: '568px', minWidth: '390px' }}
                >
                  <SignUpForm />
                </div>
              </Row>
            </Container>
          </section>
        </FadeIn>
      </div>
      <Footer />
    </>
  )
}

export default SignUp
